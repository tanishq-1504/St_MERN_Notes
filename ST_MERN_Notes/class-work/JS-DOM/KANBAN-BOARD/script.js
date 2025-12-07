document.addEventListener('DOMContentLoaded', () => {
    // State
    const defaultTasks = [
        {
            id: '1',
            title: 'Welcome to KanbanFlow',
            description: 'Drag this card to move it to another column.',
            status: 'todo',
            priority: 'low',
            tags: ['Onboarding'],
            date: new Date().toISOString()
        },
        {
            id: '2',
            title: 'Try Dark Mode',
            description: 'Click the moon icon in the top right corner.',
            status: 'in-progress',
            priority: 'medium',
            tags: ['UI'],
            date: new Date().toISOString()
        }
    ];

    let tasks = JSON.parse(localStorage.getItem('kanbanTasks')) || [...defaultTasks];

    // DOM Elements
    const columns = {
        todo: document.getElementById('todo-list'),
        'in-progress': document.getElementById('in-progress-list'),
        done: document.getElementById('done-list')
    };

    const counts = {
        todo: document.getElementById('todo-count'),
        'in-progress': document.getElementById('in-progress-count'),
        done: document.getElementById('done-count')
    };

    const modal = document.getElementById('task-modal');
    const taskForm = document.getElementById('task-form');
    const addTaskBtn = document.getElementById('add-task-btn');
    const clearBoardBtn = document.getElementById('clear-board-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const cancelBtn = document.getElementById('cancel-btn');
    const modalTitle = document.getElementById('modal-title');

    // Drag & Drop State
    let draggedItem = null;

    // Initialize
    renderBoard();
    setupEventListeners();

    // Functions
    function saveTasks() {
        localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
        renderBoard();
    }

    function renderBoard() {
        // Clear columns
        Object.values(columns).forEach(col => col.innerHTML = '');

        // Reset counts
        const statusCounts = { todo: 0, 'in-progress': 0, done: 0 };

        tasks.forEach(task => {
            const taskEl = createTaskElement(task);
            if (columns[task.status]) {
                columns[task.status].appendChild(taskEl);
                statusCounts[task.status]++;
            }
        });

        // Update counts
        Object.keys(statusCounts).forEach(status => {
            if (counts[status]) {
                counts[status].textContent = statusCounts[status];
            }
        });
    }

    function createTaskElement(task) {
        const div = document.createElement('div');
        div.classList.add('task-card');
        div.setAttribute('draggable', 'true');
        div.dataset.id = task.id;

        const date = new Date(task.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        const tagsHtml = (task.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');

        div.innerHTML = `
            <div class="task-header">
                <span class="task-priority priority-${task.priority}">${task.priority}</span>
                <div class="task-actions">
                    <button class="task-btn edit" title="Edit"><i class="fa-solid fa-pen"></i></button>
                    <button class="task-btn delete" title="Delete"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <h3 class="task-title">${task.title}</h3>
            <p class="task-desc">${task.description}</p>
            <div class="task-footer">
                <div class="task-tags">${tagsHtml}</div>
                <div class="task-date"><i class="fa-regular fa-clock"></i> ${date}</div>
            </div>
        `;

        // Drag Events
        div.addEventListener('dragstart', (e) => {
            draggedItem = task;
            div.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            // Set data for compatibility
            e.dataTransfer.setData('text/plain', task.id);
        });

        div.addEventListener('dragend', () => {
            draggedItem = null;
            div.classList.remove('dragging');
            document.querySelectorAll('.column').forEach(col => col.classList.remove('drag-over'));
        });

        // Attach event listeners for buttons manually
        const editBtn = div.querySelector('.edit');
        const deleteBtn = div.querySelector('.delete');

        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openEditModal(task);
        });

        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('Are you sure you want to delete this task?')) {
                tasks = tasks.filter(t => t.id !== task.id);
                saveTasks();
            }
        });

        return div;
    }

    function setupEventListeners() {
        // Column Drag Events
        document.querySelectorAll('.column').forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault(); // Necessary for drop to work
                column.classList.add('drag-over');

                const afterElement = getDragAfterElement(column.querySelector('.task-list'), e.clientY);
                const draggable = document.querySelector('.dragging');
                const list = column.querySelector('.task-list');

                if (draggable) {
                    if (afterElement == null) {
                        list.appendChild(draggable);
                    } else {
                        list.insertBefore(draggable, afterElement);
                    }
                }
            });

            column.addEventListener('dragleave', (e) => {
                // Only remove if we are leaving the column itself, not entering a child
                if (!column.contains(e.relatedTarget)) {
                    column.classList.remove('drag-over');
                }
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();
                column.classList.remove('drag-over');
                const status = column.dataset.status;

                if (draggedItem) {
                    // Update status
                    draggedItem.status = status;
                    // Re-order logic could be added here if we want to persist order within column
                    saveTasks();
                }
            });
        });

        // Modal Events
        addTaskBtn.addEventListener('click', () => openAddModal());

        if (clearBoardBtn) {
            clearBoardBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to reset the board? All tasks will be lost.')) {
                    tasks = [...defaultTasks];
                    saveTasks();
                }
            });
        }

        closeModalBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        const icon = themeToggle.querySelector('i');

        // Check saved theme
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-theme');
            icon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            if (document.body.classList.contains('light-theme')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Form Submit
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('task-id').value;
            const title = document.getElementById('task-title').value;
            const description = document.getElementById('task-desc').value;
            const tags = document.getElementById('task-tags').value.split(',').map(t => t.trim()).filter(t => t);
            const priority = document.querySelector('input[name="priority"]:checked').value;

            if (id) {
                // Edit
                const taskIndex = tasks.findIndex(t => t.id === id);
                if (taskIndex > -1) {
                    tasks[taskIndex] = { ...tasks[taskIndex], title, description, tags, priority };
                }
            } else {
                // Add
                const newTask = {
                    id: Date.now().toString(),
                    title,
                    description,
                    status: 'todo',
                    priority,
                    tags,
                    date: new Date().toISOString()
                };
                tasks.push(newTask);
            }

            saveTasks();
            closeModal();
        });
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.task-card:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    function openAddModal() {
        modalTitle.textContent = 'Add New Task';
        taskForm.reset();
        document.getElementById('task-id').value = '';
        modal.classList.add('active');
        setTimeout(() => document.getElementById('task-title').focus(), 100);
    }

    function openEditModal(task) {
        modalTitle.textContent = 'Edit Task';
        document.getElementById('task-id').value = task.id;
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-desc').value = task.description;
        document.getElementById('task-tags').value = (task.tags || []).join(', ');

        const radio = document.querySelector(`input[name="priority"][value="${task.priority}"]`);
        if (radio) radio.checked = true;

        modal.classList.add('active');
        setTimeout(() => document.getElementById('task-title').focus(), 100);
    }

    function closeModal() {
        modal.classList.remove('active');
    }
});

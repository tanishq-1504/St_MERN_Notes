import useDarkMode from "../hooks/useDarkMode";

function CustomHooks() {
  const [darkMode, toggleDarkMode, styles] = useDarkMode(false);

  return (
    <div style={styles}>
      <button
        onClick={toggleDarkMode}
        className="cursor-pointer px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <p className="mt-4 text-lg font-medium">
        {darkMode ? " Dark mode is ON" : " Light mode is ON"}
      </p>
    </div>
  );
}

export default CustomHooks;

import java.util.PriorityQueue;


class PriorityQueuee {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(3);
        pq.add(1);
        pq.add(4);
        pq.add(1);
        pq.add(5);
        System.out.println("Head of queue: " + pq.peek()); 
        System.out.println("Removed: " + pq.poll()); 
        System.out.println(pq);
    }
}
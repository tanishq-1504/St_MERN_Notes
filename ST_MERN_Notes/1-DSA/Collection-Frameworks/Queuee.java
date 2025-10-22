
import java.util.LinkedList;
import java.util.Queue;

class Queuee{
    public static void main(String[] args) {
        Queue<String> q=new LinkedList<>();
        q.offer("Surya");
        q.offer("Pranav");
        q.offer("Lucky");
        q.offer("ramesh");
        System.out.println(q);
        System.out.println(q.poll());
        System.out.println(q);
        System.out.println(q.peek());
    }
}
import java.util.*;
class Arrayyq {
    public static void main(String[] args) {
        ArrayDeque<String> ad = new ArrayDeque<>();
        ad.offer("surya");
        ad.offer("ram");
        ad.offer("charan");
        ad.offerFirst("Nallagonda");
        ad.offerLast("Pranav");
        System.out.println(ad.getFirst());
        System.out.println(ad.getLast());
        System.out.println(ad);
        ad.poll();
        System.out.println(ad);
        ad.pollFirst();
        System.out.println(ad);
        ad.pollLast();
        System.out.println(ad);
        ad.clear();
        System.out.println("Clear "+ad);
    }
}
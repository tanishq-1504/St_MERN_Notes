
import java.util.HashSet;
import java.util.Set;

class Sett{
    public static void main(String[] args) {
        Set<Integer> s= new HashSet<>();
        s.add(5);
        s.add(6);
        s.add(4);
        s.add(1);
        System.out.println(s);
        System.out.println(s.remove(1));
        System.out.println(s);
        System.out.println(s.isEmpty());

    }
}
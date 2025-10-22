package Arrays.Collection-Frameworks;

public import java.util.ArrayList;

class List{
    public static void main(String[] args) {
        ArrayList<Integer> al=new ArrayList<>();
        al.add(1);
        al.add(2);
        System.out.println(al);
        System.out.println(al.get(1));
        al.set(1,7);
        System.out.println(al);
        System.out.println(al.size());
        al.remove(0);
        System.out.println(al);
    }
} {
    
}

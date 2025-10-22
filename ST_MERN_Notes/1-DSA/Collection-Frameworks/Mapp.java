import java.util.*;
class Mapp{
    public static void main(String[] args) {
        Map<Integer,String> mapp=new HashMap<>();
        Scanner input=new Scanner(System.in);
        for (int i=0;i<3;i++) {
            System.out.println("Enter the Id number: ");
            int num=Integer.parseInt(input.nextLine());
            if(mapp.containsKey(num))
            {
                System.out.println("Id already taken");
                continue;
            }
            System.out.println("Enter the password: ");
            String name=input.nextLine();
            mapp.put(num, name);   
        }
        mapp.putIfAbsent(123,"surya");
        mapp.getOrDefault(234, "pranav");
        System.out.println("Here are the list of Ids and passowrds: "+mapp);
        System.out.println(mapp.entrySet());
        for(Map.Entry<Integer,String> e:mapp.entrySet()){
            System.out.println(e.getValue());
            System.out.println(e.getKey());
        }
    }
}
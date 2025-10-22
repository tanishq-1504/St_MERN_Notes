import java.util.Scanner;

public class Buffer{
    public static void main(String[] args)
    {
        System.out.println("Enter age: ");
        Scanner sc=new Scanner(System.in);
        int age=sc.nextInt();
        System.out.println("Enter Name: ");
        Scanner sc1=new Scanner(System.in);
        String name=sc1.next();
        System.out.println("Age: "+age);
        System.out.println("Name: "+name);
    }


}
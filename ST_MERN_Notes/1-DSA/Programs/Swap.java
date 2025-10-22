import java.util.Scanner;

public class Swap{
    public static void main(String[] args)
    {
        Scanner input=new Scanner(System.in);
        System.out.println(" Enter the digits : ");
        int a=input.nextInt();
        int b=input.nextInt();
       int temp=a;
       a=b;
       b=temp;
        System.out.println(a);
       
        System.out.print(b);
    }
}
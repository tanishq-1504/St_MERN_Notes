import java.util.Scanner;

public class Sum{
    public static void main(String[] args)
    {
        System.out.println("Enter the first number: ");
        Scanner sc=new Scanner(System.in);
        
    
        
        int firstnumber=sc.nextInt();
        System.out.println("Enter the Second number: ");
        Scanner sc1=new Scanner(System.in);
        int secondnumber=sc1.nextInt();
        int third=firstnumber+secondnumber;
        System.out.println("Sum of two numbers: "+third);
    }
}
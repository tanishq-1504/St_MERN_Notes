import java.util.Scanner;

public class Num{
    public static void main(String[] args)
    {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter an integer: ");
        int num=input.nextInt();
        if (num%2==0)
        {
            System.out.println("Number is even");
        }
        else
        {
            System.out.println("Number is odd");
        }

    }
}
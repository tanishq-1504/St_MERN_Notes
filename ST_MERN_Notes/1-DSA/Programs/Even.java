import java.util.*;


public class Even{
    public static void main(String[] args)
    {
        System.out.println("Enter the number: ");
        Scanner sc=new Scanner(System.in);
        int input=sc.nextInt();
        if (input%2==0)
        {
            System.out.println(input+" is Even");
        }
        else{
            System.out.println(input+" is odd");
        }
    }
}
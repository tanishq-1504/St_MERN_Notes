import java.util.Scanner;

public class Fact {
    public static void main(String[] args){
        Scanner input=new Scanner(System.in);
        System.out.println("Enter an integer: ");
        int num=input.nextInt();
        int var=1;
        for (int i=1;i<num+1;i++)
        {
            var*=i;
        }
        System.out.println("Factorial of num: "+var);
    }
}
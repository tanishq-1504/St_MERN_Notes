import java.util.Scanner;

public class dowhile{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int val=0;
        int sum=0;
        do{
            System.out.println("enter the money");
            val=sc.nextInt();
            sum+=val;
        }while(val>0 && sum<100);
    }
}
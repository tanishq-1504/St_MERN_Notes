
import java.util.Scanner;

class Test{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        for (int i = 0; i < 3; i++) {
            System.out.println("Enter the int");
            //int val=sc.nextInt();
            int val=Integer.parseInt(sc.nextLine());
            System.out.println("Enter the string");
            String str=sc.nextLine();
            System.out.println("Int value: "+val);
            System.out.println("String  value: "+str);
            
        }
    }
}
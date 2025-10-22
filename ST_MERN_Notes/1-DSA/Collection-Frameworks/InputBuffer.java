package Arrays.Collection-Frameworks;

public 
import java.util.Scanner;

class InputBuffer{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        for (int i = 0; i < 2; i++) {
            System.out.print("Enter the number: ");
            int val=sc.nextInt();
            System.out.print("Enter the name: ");
            String str=sc.nextLine();
            System.out.println("Number: "+val);
            System.out.println("Name: "+str);
            
        }
    }
} {
    
}

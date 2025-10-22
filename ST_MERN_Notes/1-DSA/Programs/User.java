import java.util.*;

class User{
    public static void main(String[] args) {
        
        System.out.print("Enter some value: ");
        Scanner input=new Scanner(System.in);
        int len=input.nextInt();
        int[] arr=new int[len];
        for (int i = 0; i < len; i++) {
            System.out.print("Enter the value at arr["+i+"]: ");
            arr[i]=input.nextInt();
            
        }
        System.out.println("Content of the array");
        for(int i=0;i<arr.length;i++){
            System.out.println("Value at arr["+i+"] "+arr[i]);
        }
    }
}
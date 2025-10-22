import java.util.*;

class Search{
    public static void main(String[] args) {
        System.out.print("Enter the value ");
        Scanner input=new Scanner(System.in);
        int len=input.nextInt();
        int arr[]=new int[len];
        for(int i=0;i<len;i++){
            arr[i]=(int)(Math.random()*10);
        }
        System.out.println(Arrays.toString(arr));
        System.out.print("Enter the element to be searched: ");
        int element=input.nextInt();
        boolean found=false;
        for (int j=0;j<len;j++){
            if(element ==arr[j]){
                found=true;

            }
        }
        if(found==true){
                System.out.print("The element is found");

            }
            else{
                System.out.print("The element is not found");

            }              
}
}
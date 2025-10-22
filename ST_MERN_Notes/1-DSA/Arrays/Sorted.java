package Arrays;

public class Sorted {
    
}
class Sorted{
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5};
        int n=arr.length;
        //boolean b=true;
        //System.out.println(n);
        for(int i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                System.out.println("not sorted");
            }
            else{
                System.out.println("sorted");
            }

        }
    }
}
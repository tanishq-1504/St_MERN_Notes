import java.util.Arrays;

class RemoveDuplicates{
    public static void main(String[] args) {
        int i=0;
        int j=i+1;
        int[] arr={10,10,20,30,30,40};
        int n=arr.length;
        while(j<n){
            if(arr[i]==arr[j]){
                j++;
            }
            else if(arr[i]!=arr[j]){
                i++;
                arr[i]=arr[j];
            }
        }
        System.out.println(Arrays.toString(arr));
        for(int k=0;k<=i;k++){
            System.out.println(arr[k]+"");
        }
        System.out.println(Arrays.toString(arr));
    }
}
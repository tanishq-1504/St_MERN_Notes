import java.util.Arrays;

class MoveZeros{
    public static void main(String[] args) {
        int[] arr={1,0,8,0,0,6};
        int ct=0;
        int n=arr.length;
        for(int i=0;i<n;i++){
            if(arr[i]!=0){
                swap(arr,i,ct);
                ct+=1;
            }

        }
        System.out.println(Arrays.toString(arr));
    }
    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
import java.util.Arrays;

class ZerosFront{
    public static void main(String[] args) {
        int[] arr={1,0,8,6,0,0};
        int n=arr.length;
        int ct=n-1;
        for(int i=n-1;i>=0;i--){
            if(arr[i]!=0){
                swap(arr,i,ct);
                ct-=1;
            }

        }
        System.out.println(Arrays.toString(arr));

    }
    public static void swap(int[] arr,int i, int j){
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;

    }
}
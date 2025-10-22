class SecondLargest{
    public static void main(String[] args) {
          int[] arr={7,27,3,5,7,6};
          int fl=-1;
          int sl=-1;
          int n=arr.length;
          //System.out.println(n);
          for(int i=0;i<n;i++){
            if(arr[i]>fl){
                sl=fl;
                fl=arr[i];
            }
            else if(arr[i]>sl&&arr[i]<fl){
                sl=arr[i];
            }
          }
          System.out.println(fl);
    }
}
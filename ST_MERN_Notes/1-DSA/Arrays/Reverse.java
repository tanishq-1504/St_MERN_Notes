class Reverse{
    public static void main(String[] args) {
        int[] arr={7,29,38,5,2};
        int n=arr.length;
        int si=0;
        int ei=n-1;
        //System.out.println(n);
        while(si<=ei){
            int temp=arr[si];
            arr[si]=arr[ei];
            arr[ei]=temp;
            si++;
            ei++;
        }
        System.out.println();
    }
}
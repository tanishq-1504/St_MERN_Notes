
class Pattern3 {
    public static void main(String[] args) {
        int n=4;
        for(int r=0;r<n;r++){
            int cval=1;
            for(int col=0;col<n;col++){
               System.out.print(cval);
               cval=1-cval;
               
            }
         System.out.println();   
        }
    }
}
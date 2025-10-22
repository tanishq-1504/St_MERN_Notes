
class Pattern1 {
    public static void main(String[] args) {
        int n=3;
        int val=3;
        for(int r=0;r<n;r++){
            for(int col=0;col<n;col++){
               System.out.print(val);
                
            }
         val=val-1;   
         System.out.println();   
        }
    }
}
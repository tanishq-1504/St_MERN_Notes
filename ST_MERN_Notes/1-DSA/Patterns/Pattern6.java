

class Pattern6 {
    public static void main(String[] args) {
        int n=4;
        int rval=1;
        for(int r=0;r<n;r++){
            int cval=rval;
            for(int col=1;col<=n;col++){
            //   num++;
            // System.out.print(num);
            System.out.print(cval);
            cval+=n;
            
               
            }
            rval+=1;
         System.out.println();   
        }
    }
}
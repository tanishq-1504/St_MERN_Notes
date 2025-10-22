
class StarPattern {
    public static void main(String[] args) {
        int n=3;
        int st1=1;
       
        int sp1=n-1;
        for(int row=0;row<n;row++)
        {
            for(int col=0;col<st1;col++)
            {
                System.out.print("*");
            }
            for(int col=0;col<sp1;col++)
            {
                System.out.print("-");
            }
            for(int col=0;col<sp1;col++)
            {
                System.out.print("-");
            }for(int col=0;col<st1;col++)
            {
            
                System.out.print("*");
            }
            st1++;
            sp1--;
            System.out.println();
            
            
        }
    }
}

class Diamond {
    public static void main(String[] args) {
        int n=5;
        int st=1;
        int sp=n-1;
        int st2=n-1;
        int sp2=1;
        //System.out.println(num);
        for(int r=0;r<n;r++){
            int num=n-1;
            for(int c=0;c<st;c++){
               System.out.print(num);
               num--;
            }
            for(int c=0;c<sp;c++){
                System.out.print(" ");
            }
            
            for(int c=0;c<sp;c++){
                System.out.print(" ");
            }
            for(int c=0;c<st;c++){
                num++;
               System.out.print(num);
            }
            st+=1;
            sp-=1;
            System.out.println();
        }
    }
}
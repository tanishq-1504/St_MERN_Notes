class Amstrong {
    static boolean armstrongNumber(int n) {
        int am=0;
        int cude=0;
        int num=n;
        while(n!=0){
            int last=n%10;
            n=n/10;
            cude=cude+last*last*last;
        }
        am+=cude;
        return am==num;
        
    }
}
class perfect{
    static boolean isPerfect(int n) {
        int div=0;
        for(int i=1;i<=Math.sqrt(n);i++){
        if(n%i==0)
        {
            div+=i;
            if (i != 1 && i != n / i) {
            div += n / i;
        }
        }
        }
        return n == div;
        
    }
};
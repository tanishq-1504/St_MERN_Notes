class divisibleEight {
    int divisibilitybyeight(String s) {
        int num=0;
        int n=3;
        long num1=0;
        String sum="";
        int len=s.length();
        if(len<=3){
            num=Integer.parseInt(s);
            if(num%8==0){
                return 1;
            }
        }
        else{
            for(int j=len-n;j<len;j++){
            sum+=s.charAt(j);
            }
            num1 = Long.parseLong(sum);
            if(num1%8==0 || num1==000){
                return 1;
            }
            else{
                return -1;
            }
            
        }
        return -1;
    }
}
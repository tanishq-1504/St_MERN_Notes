package Arrays.Collection-Frameworks;

public import java.util.ArrayList;
import java.util.Scanner;

class Question{
    
    public static void main(String[] args) {
        ArrayList<Integer> al=new ArrayList<>();
        Scanner sc=new Scanner(System.in);
        int number=sc.nextInt();
        int len=al.size();
        for(int i=0;i<len;i++){
            if( number!=-1){
                System.out.println("Enter the values: ");
            }else{
                System.out.println("Elemenst cannot be entered");
            }
        }
        }     
    }
     

import java.util.*;


class Reverse{
    public static void main(String[] args) {
        System.out.println("Enter the Book names: ");
        Scanner input=new Scanner(System.in);
        ArrayList<String> al=new ArrayList<>();
        Stack<String> stack=new Stack<>();

        while(true){
          String val=input.nextLine();
          al.add(val);
         if(val.equals("stop")){
          al.remove(al.size()-1);
          break;

         }
         
        }
        stack.addAll(al);
        
        System.out.println("Names in ArrayList"+al);
        System.out.println("Names in Reverse Order (Using Stack): "); 
        while(stack.isEmpty()!=true){
            System.out.println(stack.pop());
        }        
        }        
    }
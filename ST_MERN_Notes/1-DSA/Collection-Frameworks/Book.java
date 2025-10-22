package Collection-Frameworks;

public import java.util.*;


class Books{
    public static void main(String[] args) {
        System.out.println("Enter the Book names: ");
        Scanner input=new Scanner(System.in);
        Stack<String> stack=new Stack<>();

        while(true){
          String val=input.nextLine();
          stack.add(val);
         if(val.equals("stop")){
          stack.pop();
          break;

         }
        } 
      System.out.println("Books in stack: "+stack);
      System.out.println("Popped: "+stack.pop());// pops the first  element
      System.out.println("Popped: "+stack.pop());//pops the second element
      System.out.println("Peek: "+stack.peek());
      System.out.println("Is Stack Empty? "+stack.isEmpty());
        }        
    }

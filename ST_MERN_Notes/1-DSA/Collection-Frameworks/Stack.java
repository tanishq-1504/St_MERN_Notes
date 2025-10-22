import java.util.Stack;

class Stack{
    public static void main(String[] args) {
      Stack<Integer> st=new Stack<>(); 
      st.push(1); 
      st.push(2);
      st.push(4);
      st.push(6);
      System.out.println(st);
      System.out.println(st.pop());
      System.out.println(st);
      System.out.println(st.peek());
      System.out.println(st.isEmpty());
    }
}
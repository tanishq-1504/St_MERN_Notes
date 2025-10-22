import java.util.*;

class Student {
    int rollNo;
    String name;

    Student(int rollNo, String name) {
        this.rollNo = rollNo;
        this.name = name;
    }
}

public class StudentManagement {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        ArrayList<Student> al = new ArrayList<>();
        System.out.println("Enter the student details: ");

        while (true) {
            int rollNo = input.nextInt();
            if (rollNo == -1) {
                break;
            }
        }
    }
}
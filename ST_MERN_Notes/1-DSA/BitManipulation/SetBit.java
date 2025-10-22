public class SetBit {
    public static int setBit(int n, int idx) {
        int bitMask = 1 << idx;
            return n|bitMask;
    }
    public static void main(String[] args) {
        System.out.println(setBit(10,2));
    }
}
import java.util.*;

public class SetBitCount {
   public SetBitCount() {
   }

   public static int setbits(int var0) {
      int var1;
      for(var1 = 0; var0 > 0; var0 >>= 1) {
         if ((var0 & 1) != 0) {
            ++var1;
         }
      }

      return var1;
   }

   public static void main(String[] var0) {
      Scanner var1 = new Scanner(System.in);
      System.out.println(setbits(var1.nextInt()));
      var1.close();
   }
}
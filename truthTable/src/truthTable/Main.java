package truthTable;

/*
 * Do truth tables. AND, OR, XOR, NOR, NOT
 * Use methods and obey Don't Repeat Yourself
 */


public class Main {

	public static void main(String[] args) {
		
		String a1 = truthTest(true,true);
		String a2 = truthTest(true,false);
		String a3 = truthTest(false,true);
		String a4 = truthTest(false,false);
		
		System.out.println("|Bool1|Bool2|| AND | OR  | XOR | NOR | NOTA| NOTB| A==B| A!=B|");
		System.out.println(a1);
		System.out.println(a2);
		System.out.println(a3);
		System.out.println(a4);

	}

	public static String truthTest(boolean b1, boolean b2){
		String truthRow = "|"+String.format("%1$5s",Boolean.toString(b1))+"|"+String.format("%1$5s",Boolean.toString(b2))+"||";
		
		String truthAND;
		String truthOR;
		String truthXOR;
		String truthNOR;
		String truthNOTA;
		String truthNOTB;
		String truthAeqB;
		String truthAuqB;
		
		truthAND = String.format("%1$5s",Boolean.toString(b1 && b2));
		truthOR = String.format("%1$5s",Boolean.toString(b1 || b2));
		truthXOR = String.format("%1$5s",Boolean.toString(b1 ^ b2));
		truthNOR = String.format("%1$5s",Boolean.toString(!(b1 || b2)));
		truthNOTA = String.format("%1$5s",Boolean.toString(!b1));
		truthNOTB = String.format("%1$5s",Boolean.toString(!b2));
		truthAeqB = String.format("%1$5s",Boolean.toString(b1 == b2));
		truthAuqB = String.format("%1$5s",Boolean.toString(b1 != b2));
		
		truthRow += truthAND+"|"+truthOR+"|"+truthXOR+"|"+truthNOR+"|"+truthNOTA+"|"+truthNOTB+"|"+truthAeqB+"|"+truthAuqB+"|";
		
		
		return truthRow;
	}
}

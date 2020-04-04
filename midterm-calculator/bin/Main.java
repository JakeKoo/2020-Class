/*
 *  • Full JavaDocs Full Documentation - Class, methods, every parameter (name, data type etc,) documented
    • Good regular comments
    • Need at least one interface which is used
    • Basic HELP functionality supported (display help info)
*/

import java.util.Scanner;
/**
 * Main control script that handles input
 * @author jakek
 */
public class Main {
	static Scanner Scan = new Scanner(System.in);
	static int memorySize;
	static Equation equationStack[] = new Equation[1];
	

	/**
	 * Main
	 * 
	 * Sets up the key values and starts the interface 
	 * @param args - String Array of command line arguments
	 */
	public static void main(String[] args) {
		String action = "";
		memorySize = 0;
		Equation newEquation;
		
		//Create an endless loop with the exit commands exiting the script
		while (1 == 1){
			System.out.printf("Would you like to enter an (e)quation,\n Look up from (m)emory,\n or (q)uit?\n");
			System.out.print(">");
			action = Scan.next();
			if (action.contains("e") || action.contains("equation")){
				newEquation = getEquation();
				if(memorySize == 0)
					equationStack[0] = newEquation;
				else
					equationStack = addEqu(memorySize, equationStack, newEquation);
				memorySize += 1;
				action = "";
				System.out.println(newEquation);
			}	
			else if (action.contains("m") || action.contains("memory")){
				getMemory();
				action = "";
			}
			else if (action.contains("q") || action.contains("quit")) {
				System.out.printf("\nOk, goodbye");
				Scan.close();
				System.exit(0);
			}
			else{
				System.out.printf("Invalid answer. Try again");
				action = "";
			}
		}
	}
	/**
	 * getEquation
	 * 
	 * Takes in the values entered by the user for the calculation
	 * @return currentEquation Returns Equation object with two values and an operator
	 */
	public static Equation getEquation(){
		String firstNumber;
	    String secondNumber;
	    String operator;
	    Equation currentEquation;
	    System.out.printf("\n Please enter the first number\n");
		System.out.print(">");
	    firstNumber = Scan.next();
	    System.out.printf("\n Please choose an operation, the following are supported:\n +,-,*,/,^,(r)oot\n");
		System.out.print(">");
	    operator = Scan.next();
	    if (operator.contains("sqrt") || operator.contains("s")){
	    	currentEquation = new Equation(firstNumber, operator);
	    }
	    else{
	    	System.out.printf("\n Please enter the second number\n");
			System.out.print(">");
	    	secondNumber = Scan.next();
	    	currentEquation = new Equation(firstNumber, secondNumber, operator);
	    }

		return currentEquation;
	}

	
	/**
	 * getMemory
	 * 
	 * When called prints all memory items to screen
	 * @return System.out.println Prints the output
	 */
	public static void getMemory(){
		int memLoc = -1;
		while(memLoc > memorySize || memLoc < 1){
			System.out.printf("Currently %s in Memory\nPlease select a number:", memorySize);
			memLoc = Scan.nextInt();
		}
		System.out.println(equationStack[memLoc-1]);
		
	}
	
	/**
	 * addEqu
	 * 
	 * Adds an equation to memory
	 * @param n Current size of the Equation Array
	 * @param arr The current Equation Array
	 * @param x Equation to be added to the Array
	 * @return newarr New Array with new Equation added
	 * 
	 */
	public static Equation[] addEqu(int n, Equation arr[], Equation x) 
    { 
        int i; 
        Equation newarr[] = new Equation[n + 1]; 
        for (i = 0; i < n; i++) 
            newarr[i] = arr[i]; 
        newarr[n] = x;
        return newarr; 
    } 

}

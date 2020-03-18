import java.lang.Math;

/**
 * @author jakek
 *
 */
public class Equation {
	private double firstNumber;
	private double secondNumber;
	private String operator;
	private double answer;
	
	/**
	 * Equation
	 * 
	 * Equation object, stores two numbers and an operator
	 * @param num1 First number of the Equation
	 * @param num2 Second number of the Equation
	 * @param operator Equation operator
	 */
	public Equation(String num1, String num2, String operator){
		this.firstNumber =  numCheck(num1);
		this.secondNumber = numCheck(num2);
		this.operator = operator;
		calculate(firstNumber, secondNumber, operator);
	}
	
	/**
	 * Equation
	 * 
	 * Equation object, stores a single number and an operator
	 * Meant to be used for square root only currently
	 * @param num1 First number of the Equation
	 * @param operator Operator of the Equation
	 */
	public Equation(String num1, String operator){
		this.firstNumber =  numCheck(num1);
		this.operator = operator;
		calculate(firstNumber, operator);
	}
	
	/**
	 * calculate
	 * 
	 * Takes two numbers of an Equation object and the operator and 
	 * resolves to find the ansewr
	 * @param leftOp First number of the Equation, left side operator
	 * @param rightOp Second number of the Equation, right side operator
	 * @param operator Equation operator
	 */
	public void calculate(double leftOp, double rightOp, String operator){
		if(operator.contains("+")){
			answer = leftOp + rightOp;
		}
		else if(operator.contains("-")){
			answer = leftOp - rightOp;
		}
		else if(operator.contains("/")){
			try{answer = leftOp / rightOp;
				if (answer == Double.POSITIVE_INFINITY ||
				    answer == Double.NEGATIVE_INFINITY)
					throw new ArithmeticException();
			}
			catch(Exception ArithmeticException){
				System.out.println("Don't divide by Zero please");
				System.exit(2);
			}
			
		}
		else if(operator.contains("*")){
			answer = leftOp * rightOp;
		}
		else if(operator.contains("^")){
			answer = Math.pow(leftOp, rightOp);
		}
		else if(operator.contains("r")){
			answer = Math.pow(leftOp, 1/rightOp);
		}
	}
	
	/**
	 * calcualte
	 * 
	 * Takes a single number and applies the operator to it.
	 * Currently only square root is supported
	 * @param leftOp First number of the Equation
	 * @param operator Operator of the Equation
	 */
	public void calculate(double leftOp, String operator){
		answer = Math.sqrt(leftOp);
	}
	
	/**
	 * numCheck
	 * 
	 * Checks if a non numeric value was entered and assigns a value to it
	 * if it relates to a mathematical value if avaliable
	 * @param x Value to check against mathematical values
	 * @return num The numerical value derived from the input
	 */
	public double numCheck(String x){
		double num = 0;
		boolean found = false;
		if(x.equalsIgnoreCase("PI")){
			num = Math.PI;
			found = true;
		}
		else if(x.equalsIgnoreCase("i")){
			System.out.println("Please no Imaginary Numbers");
			System.exit(0);
		}
		else if(x.equalsIgnoreCase("e")){
			num = Math.E;
			found = true;
		}
		else{
			for(numbers n : numbers.values()){
				if(n.name().equalsIgnoreCase(x)){
					num = n.ordinal();
					found = true;
				}
			}
		}
		if(found == false){
			try{
				num = Double.parseDouble(x);	
			}
			catch(Exception e){
				System.out.println("Invald Number");
				System.exit(0);		
			}
		}
		return num;
	}

	/**
	 * getFirstNumber
	 * 
	 * Get first number of Equation
	 * @return firstNumber
	 */
	public double getFirstNumber() {
		return firstNumber;
	}
	/**
	 * setFirstNumber
	 * 
	 * Set first number of Equation
	 * @param firstNumber First number of Equation
	 */
	public void setFirstNumber(double firstNumber) {
		this.firstNumber = firstNumber;
	}
	/**
	 * getSecondNumber
	 * 
	 * Get second number of Equation
	 * @return secondNumber Second number of Equation
	 */
	public double getSecondNumber() {
		return secondNumber;
	}
	/**
	 * setSecondNumber
	 * 
	 * Set second Number of Equation
	 * @param secondNumber Second number of Equation
	 */
	public void setSecondNumber(double secondNumber) {
		this.secondNumber = secondNumber;
	}
	/**
	 * getOperator
	 * 
	 * Get operator of Equation
	 * @return operator The Operator of the Equation
	 */
	public String getOperator() {
		return operator;
	}
	/**
	 * setOperator
	 * 
	 * Set operator of the Equation
	 * @param operator Equation operator
	 */
	public void setOperator(String operator) {
		this.operator = operator;
	}
	/**
	 * getAnsewr
	 * 
	 * Get answer related to Equation
	 * @return answer Equation answer
	 */
	public double getAnswer() {
		return answer;
	}
	/**
	 * setAnswer
	 * 
	 * Sets the answer to Equation
	 * @param answer 
	 */
	public void setAnswer(double answer) {
		this.answer = answer;
	}
	

    @Override
    public String toString(){
        String temp = "";
        temp = String.valueOf(firstNumber) +" "+ operator +" "+ String.valueOf(secondNumber) +" "+ "=" +" "+ String.valueOf(answer) +"\n";
        return temp;
    }
	
}

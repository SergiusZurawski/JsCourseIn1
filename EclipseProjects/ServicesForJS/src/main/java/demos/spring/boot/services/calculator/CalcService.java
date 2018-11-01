package demos.spring.boot.services.calculator;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calc")
public class CalcService {
    @RequestMapping(value = "/{operation}", 
    					method = RequestMethod.POST,
    					consumes = "application/json",
    					produces = "application/json")
    public ResponseEntity<String> ping(@PathVariable("operation") String operation,
    									   @RequestBody CalcInput data) throws Exception {
    		int no1 = data.getNo1();
    		int no2 = data.getNo2();
    		
    		logCall(operation, no1, no2);
    		
    		if(operation.equalsIgnoreCase("divide") && no2 == 0) {
    			String jsonError = "[\"Error - cannot divide by zero\"]";
    	        return new ResponseEntity<String>(jsonError, HttpStatus.BAD_REQUEST);
    		} else {
    			sleepFor2Secs();
    			String jsonResult = String.format("[%.2f]", performOperation(operation, no1, no2));
    			return new ResponseEntity<String>(jsonResult, HttpStatus.OK);
    		}
    }

	private void logCall(String operation, int no1, int no2) {
		System.out.printf("Calculator asked to %s %d and %d\n", operation, no1, no2);
	}

	private void sleepFor2Secs() throws InterruptedException {
		Thread.sleep(2000);
	}

	private double performOperation(String operation, double no1, double no2) {
		switch(CalcOperation.valueOf(operation.toUpperCase())) {
        case ADD:
        		return no1 + no2;
		case SUBTRACT:
			return no1 - no2;
		case DIVIDE:
			return no1 / no2;
		case MULTIPLY:
			return no1 * no2;
		default:
			return 0;
		}
	}
}

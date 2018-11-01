import {PartTimeEmployee, FullTimeEmployee} from './employees';

let partTimer = new PartTimeEmployee();
let fullTimer = new FullTimeEmployee();

partTimer.makePayment(1000);
fullTimer.makePayment(500);

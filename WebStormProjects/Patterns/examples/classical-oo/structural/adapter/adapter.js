import {MathLibrary} from './math-library';
import {MathLibraryAdapter} from './math-library-adapter';


let localMathInterface = new MathLibraryAdapter(
    new MathLibrary()
);
console.log(`2 + 5 = ${localMathInterface.sum(2, 5)}`);
console.log(`12 - 8 = ${localMathInterface.difference(12, 8)}`);
console.log(`4 * 7 = ${localMathInterface.product(4, 7)}`);
console.log(`Pi = ${localMathInterface.getPi()}`);

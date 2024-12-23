import {yell} from "./dialogUtils.js";


function* corcontinuation() {
    console.log("corcontinuation1...");
    yield 1;
    console.log("corcontinuation2...");
    console.log("corcontinuation3...");
    yield 2;
    console.log("corcontinuation4...");
}



const co = corcontinuation();
console.log("first");
co.next();
console.log("second");
co.next();
console.log("third");
co.next();


let qust = document.querySelector(".qust");
let opt = document.querySelectorAll(".opt");
let btn = document.querySelector(".new");

let qustIndex;

let questions = [
    "What is JavaScript, and how is it different from Java?",
    "How do you declare a variable in JavaScript?",
    "What are the different types of data types available in JavaScript?",
    "What is the difference between let, var, and const?",
    "How do you write comments in JavaScript?",
    "What are template literals in JavaScript?",
    "How can you convert a string to a number in JavaScript?",
    "What is the difference between == and ===?",
    "What is the purpose of the typeof operator in JavaScript?",
    "What are JavaScript closures?",
    "How do you define a function in JavaScript?",
    "What is an anonymous function in JavaScript?",
    "What are arrow functions, and how are they different from regular functions?",
    "What is the purpose of the this keyword in JavaScript?",
    "How do you create objects in JavaScript?",
    "What is object destructuring in JavaScript?",
    "What is the difference between null and undefined?",
    "What is the use of the try...catch block in JavaScript?",
    "How do you create an array in JavaScript?",
    "What are higher-order functions in JavaScript?",
    "What is the difference between map, filter, and reduce in JavaScript?",
    "How does forEach() differ from map() in JavaScript?",
    "What are promises in JavaScript?",
    "How do you handle asynchronous code in JavaScript?",
    "What is the purpose of the async and await keywords?",
    "How does the JavaScript event loop work?",
    "What is a callback function in JavaScript?",
    "What is event delegation in JavaScript?",
    "How do you add an event listener to an element in JavaScript?",
    "What is the difference between preventDefault() and stopPropagation()?",
    "What is the DOM in JavaScript?",
    "How do you select elements in the DOM using JavaScript?",
    "How do you manipulate the DOM in JavaScript?",
    "What is the difference between innerHTML and textContent?",
    "How do you handle form submissions using JavaScript?",
    "What is local storage in JavaScript, and how do you use it?",
    "What is the difference between local storage and session storage?",
    "How do you make an HTTP request using JavaScript?",
    "What is the Fetch API in JavaScript?",
    "How do you use setTimeout and setInterval in JavaScript?",
    "What are modules in JavaScript, and how do you export and import them?",
    "What is hoisting in JavaScript?",
    "What is the purpose of the new keyword in JavaScript?",
    "What is the difference between function expressions and function declarations?",
    "What is a prototype in JavaScript?",
    "How do you implement inheritance in JavaScript?",
    "What are the different types of loops available in JavaScript?",
    "How do you handle errors in JavaScript?",
    "What is the difference between synchronous and asynchronous code?",
    "What is a promise chain in JavaScript?"
];

let answere = [
    "Scripting",
    "var/let/const",
    "Primitive",
    "Scope",
    "Comments",
    "Backticks",
    "Number()",
    "Strict",
    "Type",
    "Closure",
    "Function",
    "Callback",
    "Arrow",
    "Context",
    "Literal",
    "Destructuring",
    "Value",
    "Error-handling",
    "Array",
    "Functions",
    "Iteration",
    "Side-effects",
    "Promise",
    "Async",
    "Await",
    "Loop",
    "Callback",
    "Delegation",
    "addEventListener()",
    "Prevent/Stop",
    "DOM",
    "Selectors",
    "Manipulation",
    "Content",
    "Submission",
    "Storage",
    "Duration",
    "AJAX",
    "Fetch",
    "Timer",
    "Modules",
    "Hoisting",
    "Constructor",
    "Expression",
    "Prototype",
    "Inheritance",
    "Loops",
    "Catch",
    "Sync/Async",
    "Chain"
];

let rn_num = (max) => {
    let num = Math.floor(Math.random() * max)
    return num;
}

let checkOpt = (optText1, optText0, i) => {
    if (optText1 === optText0) {
        opt[i].innerText = answere[rn_num(49)];
    }
}

let realAns = (qustIndex) => {
    opt[rn_num(3)].innerText = answere[qustIndex];
    console.log(answere[qustIndex]);

}

let bgColor = () => {
    for (option of opt) {
        option.style.backgroundColor = "black";
    }
}

let checkAns = (optIndex) => {
    if (optIndex.innerText === answere[qustIndex]) {
        optIndex.style.backgroundColor = "green";
    } else {
        optIndex.style.backgroundColor = "red";
    }
};

let pik_qust = () => {
    qustIndex = rn_num(49);
    qust.innerText = questions[qustIndex];
    for (let i = 0; i < opt.length; i++) {
        opt[i].innerText = answere[rn_num(49)];

        if (i >= 1) {
            checkOpt(opt[i].innerText, opt[i - 1].innerText, i);
        }
    }

    bgColor();
    realAns(qustIndex);
}

btn.addEventListener("click", pik_qust);
opt[0].addEventListener("click", function () { checkAns(opt[0]); });
opt[1].addEventListener("click", function () { checkAns(opt[1]); });
opt[2].addEventListener("click", function () { checkAns(opt[2]); });
opt[3].addEventListener("click", function () { checkAns(opt[3]); });

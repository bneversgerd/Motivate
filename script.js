console.log("javascript file is connected");

const quotes = ["Start your day with your favorite cup of coffee!",
"Put on your shoes and get out there!",
"Do something you love everyday!"]

function motivate() {
let numberQuotes = quotes.length;
let randomDecimal = Math.random();
let randomnumberwithdecimal = randomDecimal * numberQuotes;
let randomInteger = Math.floor(randomnumberwithdecimal);
document.getElementById('displayText').innerHTML = quotes[randomInteger];
console.log("button is working");
}

//document.getElementById('displaytext').innerHTML = quotes[2];

//console.log(math.random());

//console.log(math.random()* quotes.length);

//console("you have"+ quotes.length + "quotes");

//console.log(math.random()* quotes.length);

//console.log(math.floor(math.random() * quotes.length);


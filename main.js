function calculateChange(amountReceived, amountDue) { 
    var amountDue = document.getElementById("amount-due").value;
    var amountReceived = document.getElementById("amount-received").value;
    var change = amountReceived - amountDue;
    var roundedChange = change.toFixed(2);
        var message = document.getElementById("output");
        message.innerHTML= "you are due " + "$" + roundedChange + " in change!";
        //`You are due ${roundedChange} in change!`;

//calculate number of dollars due
var dollars = Math.floor(roundedChange / 1);
remainder = roundedChange - dollars * 1;
document.getElementById("dollars-output").innerHTML = dollars;

//calculate number of quarters due
var quarters = Math.floor(remainder / .25);
remainder = remainder - quarters * .25;
document.getElementById("quarters-output").innerHTML = quarters;

// //calculate number of dimes due 
var dimes = Math.floor(remainder / .10);
remainder = remainder - dimes * .10;
document.getElementById("dimes-output").innerHTML = dimes;

// //calculate number of nickels due 
var nickels = Math.floor(remainder / .05);
remainder = (remainder - nickels * .05).toFixed(2);
console.log("line 34", remainder);
document.getElementById("nickels-output").innerHTML = nickels;

// //calculate number of pennies due 
var pennies = Math.floor(remainder / .01);
document.getElementById("pennies-output").innerHTML = pennies;
console.log()
}

function handleClickEvent(e) {

document.getElementById("calculate-change").addEventListener("click", () => handleClickEvent())

}

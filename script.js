var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var buttonCheck = document.querySelector("#btn-check");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes")

var listOfNotes=[2000, 500, 100, 20, 10, 5, 1]

buttonCheck.addEventListener("click",function validateBillandCashGiven(){
    hideMessage();
    if(isNaN(Number(billAmount.value))){
        errormessage("Input only number please")
    } else if(Number(billAmount.value)===Number(cashGiven.value)){errormessage("Everything looks fine, we don't have to retrun anything");}
    else{
    if (Number(billAmount.value) > 0){
        if(Number(cashGiven.value) > Number(billAmount.value)){
            var amountToBeReturn=Number(cashGiven.value)-Number(billAmount.value);
            calculateChange(amountToBeReturn) 
        }else{
           errormessage("Customer should pay more");
        }
    } else {
        errormessage("Bill amount can't be negative");
    }
} } 
)


function calculateChange(amountToBeReturn){
    for (let i=0;i < listOfNotes.length; i++){
        const numberofNotes = Math.trunc(amountToBeReturn/listOfNotes[i]);        
        amountToBeReturn %= listOfNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }
}
function hideMessage(){
    message.style.display="none";
}
function errormessage(msg){
    message.style.display="block";
    message.innerText = msg;
}

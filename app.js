let button = document.getElementById("enter");
let result = document.getElementById("result");
let number = document.getElementById("number");
let tryAgain = document.getElementById("yeniOyun");
let count = document.getElementById("feed_area");



let randomNum = Math.floor((Math.random()*99)+1);
console.log(randomNum);

let lowTip = 0;
let highTip = 100;

button.addEventListener("click", () =>{

    if (number.value < 1 || number.value > 100) {
        result.innerHTML = "Please enter a number between 1 to 100"
        //console.log(result.innerHTML);
        
    }
    else if (number.value > randomNum) {
        //console.log(number.value);
        result.innerHTML = `Please enter a number between ${lowTip} to ${number.value} `
        highTip = number.value
        number.value = ""
        count.innerHTML = (count.textContent)-1
        
    }
    else if (number.value < randomNum) {
        //console.log(number.value);
        result.innerHTML = `Please enter a number between  ${number.value} to ${highTip} `
        lowTip = number.value
        number.value = ""
        count.innerHTML = (count.textContent)-1
        
    }
    else {
        (number.value == randomNum)
        count.innerHTML = (count.textContent)-1
        result.innerHTML ="Congrats!!! The number is" +" "+ randomNum
        number.value = ""
        tryAgain.style.display = "block"
        button.style.display = "none"
    }
    if (count.textContent == 0){;
        result.innerHTML="Sorry You Lost <br> The number is " +""+ randomNum
        tryAgain.style.display = "block"
        button.disabled = true;
    }

    
})
   
    
tryAgain.addEventListener("click", () => {
   
        window.location.reload()
    })







// Define variable 
let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low +1)) + low;
let chances = 3;

// for loop 
for (let i = 0; i < 3; i++){
    let user_guess = parseInt(prompt(`Enter a number between ${low} ans ${high}:`));

    // condition 
    if(user_guess < correct_ans){
        alert("Correct answer is greater!");
    }else if(user_guess > correct_ans){
        alert("Correct answer is smaller!");
    }else{
        alert("You Win!");
        break;
    }

    chances--;
}

if (chances === 0){
    alert(`You loos! The correct answer was ${correct_ans}.`);
}
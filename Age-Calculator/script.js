const calculate = document.querySelector("#btn");
const age = document.querySelector("#age");
const emoji = "🗿";
const reset = document.querySelector("#reset")

calculate.addEventListener("click", function(){
    const input = document.querySelector("input").value;

    const birthDate = new Date(input);
    const today = new Date();

    let calculated_age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
        calculated_age--;
    }
    age.textContent = `You are ${calculated_age} years old ${emoji}`;
})

reset.addEventListener("click", function(){
    let input = document.querySelector("input");
    input.value = "";
    age.textContent = `...`;
});
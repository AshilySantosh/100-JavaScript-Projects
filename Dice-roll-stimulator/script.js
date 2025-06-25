const rollBtn = document.querySelector("#roll-btn");
const dice = document.querySelector("#dice");
const diceHistory = document.querySelector("#dice-history");
const resetBtn = document.querySelector("#reset")

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

rollBtn.addEventListener("click", function(){
    let rollCount = 0;
    const roll = setInterval(() => {
        const random = Math.floor(Math.random()*6);
        dice.textContent = diceFaces[random];
        rollCount++;

        if(rollCount>=10){
            clearInterval(roll);

            const final = Math.floor(Math.random()*6);
            const finalDiceFace = diceFaces[final];
            dice.textContent = finalDiceFace;

            const div = document.createElement("div");
            div.textContent = `Roll ${diceHistory.children.length + 1}: ${finalDiceFace}`;
            diceHistory.prepend(div);
        }
    }, 100);
});

resetBtn.addEventListener("click", function(){
    diceHistory.textContent = "";
    dice.textContent = "🎲";
})


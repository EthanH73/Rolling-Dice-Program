function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1; //1-6
    const die2 = Math.floor(Math.random() * 6) + 1; //1-6
    const total = die1 + die2; //2-12

    const die1Text = document.createElement("p"); 
    die1Text.textContent = "Die 1: " + die1; //Text for Die 1 with value
    const die2Text = document.createElement("p");
    die2Text.textContent = "Die 2: " + die2; //Text for Die 2 with value
    const totalText = document.createElement("p");
    totalText.textContent = "Total: " + total; //Text for Total with value
    
    document.body.appendChild(die1Text); //adds die1text to document
    document.body.appendChild(die2Text); //adds die2text to document
    document.body.appendChild(totalText); //adds totaltext to document
}

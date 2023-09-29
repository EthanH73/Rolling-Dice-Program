function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1; 
    const die2 = Math.floor(Math.random() * 6) + 1;
    const total = die1 + die2;

    const die1Text = document.createElement("p");
    die1Text.textContent = "Die 1: " + die1;
    const die2Text = document.createElement("p");
    die2Text.textContent = "Die 2: " + die2;
    const totalText = document.createElement("p");
    totalText.textContent = "Total: " + total;
    document.body.appendChild(die1Text);
    document.body.appendChild(die2Text);
    document.body.appendChild(totalText);
}
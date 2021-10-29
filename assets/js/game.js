// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at ones like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Alert players that they are starting the round
        window.alert("Welcome to Robot Gladiators!");

        // Subtract the value of `playerAttack` from the value of `enemyHealth and update the value in the `enemyHealth` variable.
        enemyHealth -= playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);
        
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died!`);
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left.`);
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth and update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`)
        
        // Check player's health
        if (playerHealth <= 0) {
            window.alert(`${playerName} has died!`);
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`);
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // Ask player to confirm they want to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // If yes (true), leave fight
        if (confirmSkip) {
            // Subtract money from the playerMoney for skipping
            playerMoney -= 2;
            window.alert(`${playerName} has chosen to skip the fight!`);
        // If no (false), ask question again by running fight() again
        } else {
            fight();
        }
        
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
    
    
};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

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
var enemyHealth = 10;
var enemyAttack = 12;

var fight = function (enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        // If player choses to fight, then fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Ask player to confirm they want to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave fight
            if (confirmSkip) {
                // Subtract money from the playerMoney for skipping
                playerMoney -= 10;
                console.log(`playerMoney: ${playerMoney}`)
                window.alert(`${playerName} has chosen to skip the fight!`);
                break;
            // If no (false), ask question again by running fight() again
            } else {
                fight();
           } 
        } else if (promptFight === "fight" || promptFight === "FIGHT") {
            // Alert players that they are starting the round
            // window.alert("Welcome to Robot Gladiators!");

            // Subtract the value of `playerAttack` from the value of `enemyHealth and update the value in the `enemyHealth` variable.
            enemyHealth -= playerAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);
            
            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(`${enemyName} has died!`);
                break;
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
                break;
            } else {
                window.alert(`${playerName} still has ${playerHealth} health left.`);
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
    
    
    
};

var startGame = function () {
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert(`Welcome to the Robot Gladiators! Round ${i + 1}`);
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 10;
            fight(pickedEnemyName);
            
            // if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length -1) {
                var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            }

        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }  
    }
    
    // play again
    endGame();
};

var endGame = function () {
    // If player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert(`Great job, you've survived the game! You no have a high score of ${playerMoney}.`)
    } else {
        window.alert("You've lost your robot in battle.");
    }
    // window.alert("This game has now ended. Let's see how you did!");

    // Ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Wouldy you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? PLease enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refiller player's health by 20 for 7 dollars.");
                playerHealth += 20;
                playerMoney -= 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":    
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack += 6;
                playerMoney -= 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

// Start the game when the page loads
startGame();
// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function (enemy) {

    while(playerInfo.health > 0 && enemy.health > 0) {
        
        if(fightOrSkip()) {
            break;
        }
        
        var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(`${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining.`);
        
        // Check enemy's health
        if (enemy.health <= 0) {
            window.alert(`${enemy.name} has died!`);
            break;
        } else {
            window.alert(`${enemy.name} still has ${enemy.health} health left.`);
        }

        // Subtract the value of `enemy.attack` from the value of `playerInfo.health and update the value in the `playerInfo.health` variable.
        var damage = randomNumber(enemy.attack -3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(`${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health remaining.`)
        
        // Check player's health
        if (playerInfo.health <= 0) {
            window.alert(`${playerInfo.name} has died!`);
            break;
        } else {
            window.alert(`${playerInfo.name} still has ${playerInfo.health} health left.`);
        }
    }
};

var fightOrSkip =  function() {
    // Ask player if they'd like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.").toLowerCase();

    if (!promptFight) {
        window.alert("You need to provide a valid answer!  Please try again.");
        return fightOrSkip();
    }

    if (promptFight === "skip" || promptFight === "SKIP") {
        // Ask player to confirm they want to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            // Subtract money from the playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            window.alert(`${playerInfo.name} has chosen to skip the fight!`);
            return true;
        }
    }
    return false;
};

var startGame = function () {
    // Reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert(`Welcome to the Robot Gladiators! Round ${i + 1}`);
            debugger;
            var pickedEnemyObject = enemyInfo[i];
            pickedEnemyObject.health = randomNumber(40, 60);
            fight(pickedEnemyObject);
            
            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
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
    if (playerInfo.health > 0) {
        window.alert(`Great job, you've survived the game! You no have a high score of ${playerInfo.money}.`)
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
    var shopOptionPrompt = parseInt(window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? PLease enter one: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."));

    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};

var getPlayerName = function() {
    var name = "";
    while(name === "") {
        name = prompt("What is your robot's name?");
    }
    return name;
};

var playerInfo = {
    name : getPlayerName(),
    health : 100,
    attack: 10,
    money: 10,
    reset : function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth : function() {
        if (this.money >= 7) {
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
};

var enemyInfo = [
    {
        name : "Roborto",
        attack : randomNumber(10, 14),
    },
    {
        name : "Amy Android",
        attack : randomNumber(10, 14),
    },
    {
        name : "Robo Trumble",
        attack : randomNumber(10, 14),
    },
]

// Start the game when the page loads
startGame();
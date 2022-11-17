alert("Welcome to Event Horizon: The Game! Click OK to continue.");
alert("You and your crew have been assigned by NASA to obtain a soil sample on Planet Alpha-9873."); 
alert("This sample would prove to be revolutionary in the aeronautic field due to its combustible nature. If obtained successfully, you and your crew will receive an income of 2.7 billion dollars.");
alert("This has been proven risky by many previous, unsuccessful voyagers...be careful and good luck! ");

var wormhole_or_plaid = prompt("Will you and your crew travel through (1) a wormhole, or (2) travel at plaid speed?");

if(wormhole_or_plaid == 1){
    var refuel_or_continue = prompt("Traveling through the wormhole causes you to deplete 90% of your fuel supply, do you (1) stop at Planet Beta-8763 to refuel, or (2) do you disregard the status and continue on your voyage?");
    if(refuel_or_continue == 1){
        alert("You decide to refuel and land at Planet Beta-8763. You end up being ambushed by foreign inhabitants on the planet...GAME OVER!");
    } else {
        alert("Your decision to continue on the voyage costs you and your team. You suddenly burn through all of oyur fuel and are now stranded in the endless vaccum of space...GAME OVER!");
    }
} else {
    alert("You realize that there might be a chance that your current spaceship may not be adequate for the harsh elements of space.");
    
    var keep_or_change = prompt("Do you (3) continue with your current ship, or (4) do you exchange your ship for a more compatible one?");
    if(keep_or_change == 3){
        alert("Your spacecraft is not able to withstand the extreme temperatures and forces of the harsh elements in space; therefore, your ship incinerates...GAME OVER! ");
    } else {
        alert("You and your crew safely make it to your destination and are able to obtain samples off of the planet. You and your crew are welcomed home and successfull complete the mission. Congrtualations Space Cadet...YOU WIN!");
    }
} 

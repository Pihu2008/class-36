class Game{
    constructor(){}
    getState(){
        var gsreference = database.ref('gameState');
        gsreference.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
database.ref('/').update({
    gameState: state
});
    }
     async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
            form  = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        fill("yellow");
        text("game start",120,100);
        Player.getPlayerInfo();
        if(allPlayers !==undefined){
        var ypos = 130;
        for(var plr in allPlayers){
            if(plr === "player" + player.index)
                fill("red");
            else
                fill("black");
            
            ypos+= 20;
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,ypos);
        }}
        if(keyIsDown(UP_ARROW)&& player.index !== null){
           player.distance +=50;
           player.update();
        }
    }
}
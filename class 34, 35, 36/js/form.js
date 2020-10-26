class Form{
    constructor(){
        this.input = createInput("name");
        this.greeting = createElement('h3');
        this.button = createButton('start');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide(); 
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400,150);

this.input.position(425,250);

this.button.position(450,350);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount += 1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("hello "+player.name);
    this.greeting.position(400,250);
});

    }
}
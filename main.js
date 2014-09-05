// width, height, how to render the game, html div
var game = new Phaser.Game(500, 500, Phaser.AUTO, 'game_div');

// state
var main_state = {
  preload: function() {
    game.load.image('hello', 'assets/hello.png');
  },

  create: function() {
    this.hello_sprite1 = game.add.sprite(250, 250, 'hello');
    this.hello_sprite2 = game.add.sprite(250, 250, 'hello');
    this.hello_sprite3 = game.add.sprite(250, 250, 'hello');
  },

  update: function(){
    this.hello_sprite1.angle += 360/(12*3600*60); //hours hand
    this.hello_sprite2.angle += 360/(60*3600); //min hand
    this.hello_sprite3.angle += 360/3600; // sec hand
  }
};

game.state.add('main', main_state);
game.state.start('main');

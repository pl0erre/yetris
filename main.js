
document.addEventListener("DOMContentLoaded", function(event) {

  var game = new Game();
  var pauseMessage = "\nGame Paused\nPress `SPACE` to continue";
  var gameMusic = new Audio("sounds/game.mp3")
  
  // ===== MUSIC =====
  gameMusic.load();
  gameMusic.loop = true;
  gameMusic.oncanplaythrough = function(){  
    gameMusic.play();
  }
  // =================

  // ===== BUTTONS =====
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: // left
          game.propagate([-1,0]);
          game.draw();
            break;
        case 38: // up
          game.rotate();
          game.draw();
            break;
        case 39: // right
          game.propagate([1,0]);
          game.draw();
          break;
        case 40: // down
          game.propagate([0,1]);
          game.draw();
          break;
        case 32: //Space
          alert(pauseMessage)
        default:
          break;
    }
  }
  // =====================
});


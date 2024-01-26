
window.addEventListener('load', function() {
	var game = new Phaser.Game({
    "title": "Game2",
    "width": 450,
    "height": 900,
    "type": Phaser.AUTO,
    "backgroundColor": "#88F",
    "parent": "game-container",
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_VERTICALLY
    },
    
	});
	game.scene.add("Boot", Boot, true);
	
	
	
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.pack("pack", "assets/pack.json");
	}

	create() {
		this.scene.start("Scene1");
	}

}


// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var button = this.add.image(49.146942, 859.10034, "textures", "button");
		button.setScale(0.11168245, 0.0915727);
		
		var chicken1 = this.add.image(58.65155, 688.86066, "textures", "chicken1");
		chicken1.setScale(0.61040604, 0.51885104);
		
		this.player = chicken1;
		
	}
	
	/* START-USER-CODE */
	preload() {
		var loc = window.location.pathname;
		var dir = loc.substring(0, loc.lastIndexOf('/'));
		console.log(dir);
		var stroka =  `.${dir}/../design/backgrond.png`;
		console.log(stroka);
		this.load.image('background', `./backgrond.png`);
	}
	create() {
		this._create();
		this.input.keyboard.createCursorKeys();
		let bg = this.add.image(0,0,'background');
		Aling.scaleToGasmeW(bg, 1);
		Aling.center(bg);
	}
		
	update() {
		this.player.x += 1;
	}	


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

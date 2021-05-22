class Scene1 extends Phaser.Scene {
    constructor() {
        super('inicio');
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
        this.load.image('sky2', 'assets/sky2.png');
        this.load.image('ground', 'assets/platnew.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('star2', 'assets/star_red.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });

        //carga audio
        this.load.audio('recolestrella', 'sounds/recolestrella.mp3');
        this.load.audio('gameover', 'sounds/gameover1.mp3');

    }

    create() {

        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        var logo = this.add.image(400, 300, 'logo').setScale(0.26)
        logo.setInteractive()
        logo.on('pointerdown', () => this.scene.start('juego'));

    }
}
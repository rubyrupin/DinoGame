class MyGameArea {
	constructor(){
		this.width = 480;
		this.height = 270;
		this.canvas = document.getElementById('canvas')
		this.context = this.canvas.getContext("2d");
		this.mine= new Character(100,100,"red",100,100);
	}

	drawWorld(){
		this.context.clearRect(0,0, 800, 800)
		this.mine.drawCharacter(this.context) 
		this.frames+=1
		window.onkeydown=function(event){
			event.preventDefault()
			console.log(event.keyCode)
			if(event.keyCode==40){
				this.mine.y+=10
			}
			if(event.keyCode==38){
				this.mine.y-=10
			}
			if(event.keyCode==37){
				this.mine.x-=10
			}
			if(event.keyCode==39){
				this.mine.x+=10
			}
			if(event.keyCode==32){//TODO:space to make it jump
				this.mine.y-=80
			 }
		}.bind(this)
	}


}


var gameArea = new MyGameArea()
gameArea.drawWorld()


setInterval(gameArea.drawWorld.bind(gameArea),50)




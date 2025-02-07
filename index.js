class Circle{
    constructor({x, y, radius, speed, ctx, counter}){
        this.x = x
        this.y = y
        this.radius = radius
        this.speed = speed
        this.ctx = ctx
        this.strokeColor = "red"
        this.counter = counter
    }

    drawFigure(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = this.strokeColor
        this.ctx.stroke();
    }

    updatePosition(){
        this.y += this.speed
        if(this.y - this.radius >= this.ctx.canvas.height){
            this.y = - this.radius
        } 
    }

    checkClick(clickCoords, audioEffect){
        const destination = Math.sqrt((this.x - clickCoords.x) ** 2 + (this.y - clickCoords.y) ** 2)
        if(destination <= this.radius){
            audioEffect.currentTime = 0
            audioEffect.play()
            this.counter.incCount()
            this.y = - this.radius
        }
    }
    
}

class CounteManager{
    constructor(count = 0, ctx){
        this.count = count
        this.ctx = ctx
    }

    getCount(){
        this.count
    }

    setCount(count){
        if(count >=0){
            this.count = count
        }
    }

    incCount(point = 10){
        this.count += point
        console.log(this.count);
        
    }

    drawScore(){
        this.ctx.font = "24px serif";
        this.ctx.fillStyle = "white"
        this.ctx.fillText(this.count, 10, 30)
    }
}

document.addEventListener("DOMContentLoaded", e => {

    const cnv = document.querySelector("#canvas")
    const ctx = cnv.getContext("2d")
    
    const fadeAwaySound = new Audio("./poof.mp3")

    cnv.width = 800
    cnv.height = 300

    const counter = new CounteManager(0, ctx)
    const circles = []

    for(let i = 0; i < 20; i++){
        let circleProps = {
            x: Math.round(Math.random() * (canvas.width - 50) + 25),
            y: 0,
            radius: Math.round(Math.random() * 10 + 15),
            speed: Math.random() * 2 + 0.5,
        }
        circles.push(new Circle({...circleProps, ctx, counter}))
    }    

    let coordsOnCanvas = {x: 0, y: 0}
    cnv.addEventListener("click", e => {
        
        const {x, y} = cnv.getBoundingClientRect()
        coordsOnCanvas = {x: e.clientX - x - cnv.clientLeft, y: e.clientY - y - cnv.clientTop}
        
        circles.forEach(circle => {
            circle.checkClick(coordsOnCanvas, fadeAwaySound)
        })

    })

    const gameLoop = () => {
        
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        circles.forEach(circle => {
            circle.drawFigure()
            circle.updatePosition()
        })

        counter.drawScore()

        requestAnimationFrame(gameLoop)
    }

    gameLoop()


})
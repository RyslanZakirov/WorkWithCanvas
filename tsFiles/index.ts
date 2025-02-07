import { Circle } from "./classes/Circle"
import { CircleEventHandler } from "./classes/CircleEventHandler"
import { ClickObserver } from "./ClickObserver"

document.addEventListener("DOMContentLoaded", e => {
    
    const canvas : HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement
    const ctx : CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D

    canvas.width = 800
    canvas.height = 600

    const clickObserver = new ClickObserver(canvas)
    const sample = new Circle(23, 100, 100, 20, ctx)
    clickObserver.addNewNode(sample.getHandlerEventt() as CircleEventHandler)


    const gameLoop = () => {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)    
        sample.updatePosition()
        sample.getRenderObject()?.draw()

        requestAnimationFrame(gameLoop)
    }

    gameLoop()

})
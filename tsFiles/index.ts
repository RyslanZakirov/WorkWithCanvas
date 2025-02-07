import { Circle } from "./classes/Circle"
import { CircleEventHandler } from "./classes/CircleEventHandler"
import { ClickObserver } from "./ClickObserver"

import { create20Circle } from "./testActions/create20Circle" /// Тестовое создание 20-и окружностей

document.addEventListener("DOMContentLoaded", e => {
    
    const canvas : HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement
    const ctx : CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D

    canvas.width = 800
    canvas.height = 600

    const clickObserver = new ClickObserver(canvas)
    const circleArr = create20Circle()
    
    circleArr.forEach(circle => {
        clickObserver.addNewNode(circle.getHandlerEvent() as CircleEventHandler)
    })



    const gameLoop = () => {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)    
        circleArr.forEach(circle => {
            circle.updatePosition()
            circle.getRenderObject()?.draw()
        })

        requestAnimationFrame(gameLoop)
    }

    gameLoop()

})
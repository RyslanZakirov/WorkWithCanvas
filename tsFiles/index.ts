import { Button } from "./classes/Button"
import { CircleEventHandler } from "./classes/CircleEventHandler"
import { ClickObserver } from "./ClickObserver"

import { create20Circle } from "./testActions/create20Circle" /// Тестовое создание 20-и окружностей

document.addEventListener("DOMContentLoaded", e => {
    
    const canvas : HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement
    const ctx : CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D

    canvas.width = 800
    canvas.height = 600

    const btn : Button = new Button(100, 100, 100, 200, 80, ctx, "Test button")

    const clickObserver = new ClickObserver(canvas)
    let circleArr = create20Circle()
    
    circleArr.forEach(circle => {
        clickObserver.addNewNode(circle.getHandlerEvent() as CircleEventHandler)
    })

    clickObserver.addNewNode(btn.getEventHandler())

    const gameLoop = () => {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)    
        circleArr.forEach(circle => {
            circle.updatePosition()
            circle.render()
        })

        btn.render()

        requestAnimationFrame(gameLoop)
    }

    gameLoop()

})
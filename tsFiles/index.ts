import { Button } from "./classes/Button"
import { StartMenuScene } from "./classes/StartMenuScene"
import { Label } from "./classes/Label"
import { CircleEventHandler } from "./classes/CircleEventHandler"
import { ClickObserver } from "./ClickObserver"

import { create20Circle } from "./testActions/create20Circle" /// Тестовое создание 20-и окружностей

document.addEventListener("DOMContentLoaded", e => {
    
    const canvas : HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement
    const ctx : CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D

    canvas.width = 800
    canvas.height = 600

    const btn : Button = new Button(100, 100, 100, 200, 80, ctx, "Test button")
    const startMenu : StartMenuScene = new StartMenuScene(412, ctx)
    const label : Label = new Label(412, 100, 400, 200, 100, ctx, "Test Label")

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
        // startMenu.render()
        label.render()

        requestAnimationFrame(gameLoop)
    }

    gameLoop()

})
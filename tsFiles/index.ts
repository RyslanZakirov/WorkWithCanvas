import { GameCircle } from "./classes/GameCircle"
import { CircleEventHandler } from "./classes/CircleEventHandler"
import { ClickObserver } from "./ClickObserver"

import { create20Circle } from "./testActions/create20Circle" /// Тестовое создание 20-и окружностей
import { stopGame } from "./testActions/stopGame" /// Тестирование сохранения состояния игры и повторного воспроизведения

document.addEventListener("DOMContentLoaded", e => {
    
    const canvas : HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement
    const ctx : CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D

    canvas.width = 800
    canvas.height = 600

    const clickObserver = new ClickObserver(canvas)
    let circleArr = create20Circle()
    
    circleArr.forEach(circle => {
        clickObserver.addNewNode(circle.getHandlerEvent() as CircleEventHandler)
    })

    /// Сохранение состояния при определенных действиях
    document.addEventListener("dblclick", e => {
        const { loadData } = stopGame(circleArr, ctx)
        circleArr = []
        clickObserver.clearNodeList()
        
        canvas.addEventListener("mouseleave", e => {
            circleArr = loadData()
            circleArr.forEach(circle => {
                clickObserver.addNewNode(circle.getHandlerEvent() as CircleEventHandler)
            })
        })
    })

    ///

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
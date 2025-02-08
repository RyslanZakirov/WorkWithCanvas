import { GameCircle } from "../classes/GameCircle";
export function create20Circle(){
    
    const canvas : HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas")
    const ctx : CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D
    const circleArr: GameCircle[] = [] 
    
    for(let i = 0; i < 20; i++){
        circleArr.push(new GameCircle(
            i,
            Math.round(Math.random() * (canvas.width - 50) + 25),
            -30,
            Math.round(Math.random() * 10 + 15),
            ctx)
        )
    }
    
    return circleArr
}
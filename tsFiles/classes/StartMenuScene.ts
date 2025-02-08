import { Scene } from "../anstractClasses/Scene";
import { Button } from "./Button";
import { SceneRenderObject } from "./SceneRenderObject";
export class StartMenuScene extends Scene{
    
    private renderObject : SceneRenderObject; 
    private startButton : Button; 

    constructor(
        public id: number,
        public ctx: CanvasRenderingContext2D,
    ){
        super(id, ctx)
        this.renderObject = new SceneRenderObject(this)
        this.startButton = new Button(
            123,
            ctx.canvas.width / 2 - 100,
            ctx.canvas.height / 2 - 30,
            200,
            60,
            ctx,
            "Начать игру"
        )
    }

    render() : void {
        this.renderObject.render()
        this.startButton.render()
    }
}
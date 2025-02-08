import { Circle } from "../anstractClasses/Circle";
import { GameCircleRenderObject } from "./GameCircleRenderObject"
import { CircleEventHandler } from "./CircleEventHandler"

export class GameCircle extends Circle{
    
    private renderObject: GameCircleRenderObject | null = null
    private handlerEvent: CircleEventHandler | null = null
    
    constructor(
        public id: number,
        public x: number,
        public y: number,
        public radius: number,
        public ctx: CanvasRenderingContext2D)
    {
        super(id, x, y, radius, ctx)
        this.renderObject = new GameCircleRenderObject(this)
        this.handlerEvent = new CircleEventHandler(this)
    }

    updatePosition(): void {
        this.y += 2;
        if(this.y >= this.ctx.canvas.height + this.radius){
            this.y = - this.radius
        }
    }

    render(): void{
        if(this.renderObject){
            this.renderObject.draw()
        }
    }

    getRenderObject(): GameCircleRenderObject | null{
        return this.renderObject
    }
    getHandlerEvent(): CircleEventHandler | null{
        return this.handlerEvent
    }
    
}
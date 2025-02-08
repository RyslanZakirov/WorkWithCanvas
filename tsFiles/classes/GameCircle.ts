import { Circle } from "../anstractClasses/Circle";
import { CircleRenderObject } from "./CircleRenderObject"
import { CircleEventHandler } from "./CircleEventHandler"

export class GameCircle extends Circle{
    
    private renderObject: CircleRenderObject | null = null
    private handlerEvent: CircleEventHandler | null = null
    
    constructor(
        public id: number,
        public x: number,
        public y: number,
        public radius: number,
        public ctx: CanvasRenderingContext2D)
    {
        super(id, x, y, radius, ctx)
        this.renderObject = new CircleRenderObject(this)
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

    getRenderObject(): CircleRenderObject | null{
        return this.renderObject
    }
    getHandlerEvent(): CircleEventHandler | null{
        return this.handlerEvent
    }
    
}
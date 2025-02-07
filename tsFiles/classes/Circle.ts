import { RenderObject } from "../anstractClasses/RenderObject";
import { INode } from "../interfaces/INode";
import { CircleRenderObject } from "./CircleRenderObject"
import { CircleEventHandler } from "./CircleEventHandler"

export class Circle implements INode{
    
    private renderObject: CircleRenderObject | null = null
    private handlerEvent: CircleEventHandler | null = null
    
    constructor(
        public id: number,
        public x: number,
        public y: number,
        public radius: number,
        public ctx: CanvasRenderingContext2D)
    {
        this.renderObject = new CircleRenderObject(this)
        this.handlerEvent = new CircleEventHandler(this)
    }

    updatePosition(): void {
        this.y += 2;
        if(this.y >= this.ctx.canvas.height + this.radius){
            this.y = - this.radius
        }
    }

    getRenderObject(): CircleRenderObject | null{
        return this.renderObject
    }
    getHandlerEventt(): CircleEventHandler | null{
        return this.handlerEvent
    }
    
}
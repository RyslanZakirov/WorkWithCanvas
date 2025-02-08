import { ButtonRenderObject } from "./ButtonRenderObject";
import { Rectangle } from "../anstractClasses/Rectangle";
import { RectEventHandler } from "./RectEventHandler";

export class Button extends Rectangle{
    
    private renderObject: ButtonRenderObject;
    private handlerEvent: RectEventHandler;
    
    constructor(
        public id: number,
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public ctx: CanvasRenderingContext2D,
        public text?: string
    )
    {
        super(id, x, y, width, height, ctx, text)
        this.renderObject = new ButtonRenderObject(this, text)
        this.handlerEvent = new RectEventHandler(this)
    }

    render(): void {
        this.renderObject.draw()
    }
    
    getEventHandler(): RectEventHandler {
        return this.handlerEvent
    }

}
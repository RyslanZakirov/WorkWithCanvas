import { RectRenderObject } from "./RectRenderObject";
import { Rectangle } from "../anstractClasses/Rectangle";

export class Button extends Rectangle{
    
    private renderObject: RectRenderObject;
    // private handlerEvent: 
    
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
        this.renderObject = new RectRenderObject(this, text)
    }

    render(): void {
        this.renderObject.draw()
    }
    
}
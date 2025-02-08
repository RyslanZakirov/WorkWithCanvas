import { Rectangle } from "../anstractClasses/Rectangle";
import { LabelRenderObject } from "./LabelRenderObject";

export class Label extends Rectangle{
    
    private renderObject: LabelRenderObject;
    
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
        this.renderObject = new LabelRenderObject(this, text)
    }

    render(): void {
        this.renderObject.render()
    }
}
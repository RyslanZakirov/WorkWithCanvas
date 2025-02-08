import { RenderObject } from "../anstractClasses/RenderObject";
import { Label } from "./Label";

export class LabelRenderObject extends RenderObject{
    constructor(public node: Label, public text){
        super(node)
    }

    render(): void {
        this.node.ctx.fillStyle = "red"
        this.node.ctx.font = "22px sans"
        this.node.ctx.textAlign = "center"
        this.node.ctx.fillText(this.text, this.node.x + this.node.width / 2, this.node.y + this.node.height / 2)
    }
}
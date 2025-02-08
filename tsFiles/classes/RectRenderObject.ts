import { RenderObject } from "../anstractClasses/RenderObject";
import { INode } from "../interfaces/INode";

export class RectRenderObject extends RenderObject{
    constructor(public node: INode, public title?: string){
        super(node, title)
    }

    draw(){
        // this.node.ctx.rect(0, 0, this.node.width, this.node.height)
    }
}
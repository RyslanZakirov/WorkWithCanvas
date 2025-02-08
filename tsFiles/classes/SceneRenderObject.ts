import { RenderObject } from "../anstractClasses/RenderObject";
import { Scene } from "../anstractClasses/Scene";

export class SceneRenderObject extends RenderObject{
    constructor(public node: Scene){
        super(node)
    }

    draw(): void {
        const canvas = this.node.ctx.canvas
        this.node.ctx.fillStyle = "yellow"
        this.node.ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}
import { Circle } from "./Circle";
import { RenderObject } from "../anstractClasses/RenderObject";

export class CircleRenderObject extends RenderObject{
    constructor(public node: Circle){
        super(node)
    }

    draw(): void {
        this.node.ctx.beginPath();
        this.node.ctx.arc(this.node.x, this.node.y, this.node.radius, 0, 2 * Math.PI);
        this.node.ctx.strokeStyle = "red" // Временное решение
        this.node.ctx.stroke();
    }
}
import { EventHandler } from "../anstractClasses/EventHandler";
import { Circle } from "./Circle";
import { Vector2D } from "../types/Vector2D";

export class CircleEventHandler extends EventHandler{
    constructor(public node: Circle){
        super(node)
    }

    handleClick(coords: Vector2D): void {
        const destination = Math.sqrt((this.node.x - coords.x) ** 2 + (this.node.y - coords.y) ** 2)
        if(destination <= this.node.radius){
            console.log(`Circle number: ${this.node.id} get click.`);
        }
    }

    handleMouseEnter(): void {
        
    }

    handleMouseHover(): void {
        
    }

    handleMouseLeave(): void {
        
    }
    
}
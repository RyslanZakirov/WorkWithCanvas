import { EventHandler } from "../anstractClasses/EventHandler";
import { Rectangle } from "../anstractClasses/Rectangle";
import { Vector2D } from "../types/Vector2D";

export class RectEventHandler extends EventHandler{
    constructor(public node: Rectangle){
        super(node)
    }

    handleClick(coords: Vector2D): void {
        const {x, y} = coords
        if(x >= this.node.x && x <= this.node.x + this.node.width && y >= this.node.y &&  y <= this.node.y + this.node.height){
            console.log("Вы нажали на кнопку");
        }
    }

    handleMouseEnter(coords: Vector2D): void {
        
    }

    handleMouseHover(coords: Vector2D): void {
        
    }

    handleMouseLeave(coords: Vector2D): void {
        
    }
}
import { INode } from "../interfaces/INode"
import { Vector2D } from "../types/Vector2D"
export abstract class EventHandler{
    
    constructor(public node: INode){}
    
    abstract handleClick(coords: Vector2D): void
    abstract handleMouseHover(coords: Vector2D): void
    abstract handleMouseEnter(coords: Vector2D): void
    abstract handleMouseLeave(coords: Vector2D): void
}
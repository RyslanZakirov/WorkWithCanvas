import { INode } from "../interfaces/INode";
import { Rectangle } from "./Rectangle";

export abstract class Scene implements INode{
        
    constructor(
        public id: number,
        public ctx: CanvasRenderingContext2D,
    ){
    }

}
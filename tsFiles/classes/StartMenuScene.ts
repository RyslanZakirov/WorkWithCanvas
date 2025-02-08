import { Scene } from "../interfaces/Scene";

export class StartMenuScene implements Scene{
    
    // private renderObject : 
    
    constructor(
        public id: number,
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public ctx: CanvasRenderingContext2D)
    {

    }
}
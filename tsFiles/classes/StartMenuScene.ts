import { Scene } from "../anstractClasses/Scene";
import { SceneRenderObject } from "./SceneRenderObject";
export class StartMenuScene extends Scene{
    
    private renderObject : SceneRenderObject; 
    
    constructor(
        public id: number,
        public ctx: CanvasRenderingContext2D,
    ){
        super(id, ctx)
        this.renderObject = new SceneRenderObject(this)
    }

    render() : void {
        this.renderObject.draw()
    }
}
import { RenderObject } from "../anstractClasses/RenderObject";
import { Rectangle } from "../anstractClasses/Rectangle"

export class ButtonRenderObject extends RenderObject{
    constructor(public node: Rectangle, public text?: string){
        super(node, text)
    }

    draw(){
        this.node.ctx.fillStyle = "orange" // Тестовый код для проверки работоспособности
        this.node.ctx.fillRect(this.node.x, this.node.y, this.node.width, this.node.height)
        // console.log(this.text);
        
        if(this.text){
            const {x, y, width, height} = this.node

            this.node.ctx.fillStyle = "white" // Тестовый код для проверки работоспособности
            this.node.ctx.textAlign = "center"
            this.node.ctx.font = "20px sans"
            this.node.ctx.fillText(this.text, x + width / 2 , y + height / 2 + 5)
        }
    }
}
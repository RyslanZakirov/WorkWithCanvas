import { EventHandler } from "./anstractClasses/EventHandler"
import { Vector2D } from "./types/Vector2D"
export class ClickObserver{

    private nodeList: EventHandler[] = []

    constructor(private canvas: HTMLCanvasElement){
        this.handleClick = this.handleClick.bind(this)
        this.canvas.addEventListener("click", this.handleClick)
    }

    handleClick(e: MouseEvent): void {
        const {x: canvasX, y: canvasY} : {x: number, y: number} = this.canvas.getBoundingClientRect()
        const {x, y} = {
            x: e.pageX - this.canvas.clientLeft - canvasX,
            y: e.pageY - this.canvas.clientTop - canvasY
        }

        if(x >= 0 && x <= this.canvas.width && y >= 0 && y <= this.canvas.height){
            this.notifyNodes({x, y})
        }

        console.log("Click");
        

    }

    addNewNode(node: EventHandler): void {
        this.nodeList.push(node)
    }

    removeNode(nodeId: number): void {
        this.nodeList = this.nodeList.filter(eventHandler => eventHandler.node.id != nodeId)
    }

    notifyNodes(coords: Vector2D): void {
        this.nodeList.forEach(node => node.handleClick(coords))
    }

    clearNodeList(): void {
        this.nodeList = []
    }

}
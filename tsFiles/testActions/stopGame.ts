import { Circle } from "../classes/Circle"


export interface ILoadData{
    id: number,
    x: number,
    y: number,
    radius: number
}
export function stopGame(gameObjects: Circle[], ctx: CanvasRenderingContext2D){
    
    const savedData : ILoadData[] = []
    gameObjects.forEach((node: Circle) => {
        savedData.push({
            x: node.x,
            y: node.y,
            id: node.id,
            radius: node.radius
        })
    })

    gameObjects = []

    localStorage.setItem("gameObjects", JSON.stringify(savedData))

    function loadData(): Circle[] {
        
        const data : string | null = localStorage.getItem("gameObjects")
        if(data){
            const tempArray : ILoadData[] = JSON.parse(data)
            const circleList : Circle[] = []
            
            tempArray.forEach(object => {
                circleList.push(new Circle(object.id, object.x, object.y, object.radius, ctx))
            })
            return circleList
        }else{
            return []
        }

    }

    return {
        loadData
    }

}
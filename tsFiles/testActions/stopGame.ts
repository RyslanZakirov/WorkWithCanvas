import { GameCircle } from "../classes/GameCircle"


export interface ILoadData{
    id: number,
    x: number,
    y: number,
    radius: number
}
export function stopGame(gameObjects: GameCircle[], ctx: CanvasRenderingContext2D){
    
    const savedData : ILoadData[] = []
    gameObjects.forEach((node: GameCircle) => {
        savedData.push({
            x: node.x,
            y: node.y,
            id: node.id,
            radius: node.radius
        })
    })

    gameObjects = []

    localStorage.setItem("gameObjects", JSON.stringify(savedData))

    function loadData(): GameCircle[] {
        
        const data : string | null = localStorage.getItem("gameObjects")
        if(data){
            const tempArray : ILoadData[] = JSON.parse(data)
            const circleList : GameCircle[] = []
            
            tempArray.forEach(object => {
                circleList.push(new GameCircle(object.id, object.x, object.y, object.radius, ctx))
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
export interface INode{
    id: number,
    x: number,
    y: number,
    height?: number,
    width?: number,
    radius?: number,
    ctx?: CanvasRenderingContext2D
}
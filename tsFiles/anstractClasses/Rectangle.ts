import { INode } from "../interfaces/INode";

export abstract class Rectangle implements INode{
    constructor(
        public id: number,
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public ctx: CanvasRenderingContext2D,
        public text?: string
    )
    {}
}
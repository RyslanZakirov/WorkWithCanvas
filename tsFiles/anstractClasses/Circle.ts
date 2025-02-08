import { INode } from "../interfaces/INode";

export abstract class Circle implements INode{
    constructor(
        public id: number,
        public x: number,
        public y: number,
        public radius: number,
        public ctx: CanvasRenderingContext2D)
    {}
}
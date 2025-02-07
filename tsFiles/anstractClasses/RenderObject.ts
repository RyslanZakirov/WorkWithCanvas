import { INode } from "../interfaces/INode";
export abstract class RenderObject{
    constructor(public node: INode){}

    abstract draw(): void
}
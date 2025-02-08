import { INode } from "../interfaces/INode";
export abstract class RenderObject{
    constructor(public node: INode, public text?: string){}

    abstract draw(): void
}
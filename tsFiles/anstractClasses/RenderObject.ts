import { INode } from "../interfaces/INode";
export abstract class RenderObject{
    constructor(public node: INode, public title?: string){}

    abstract draw(): void
}
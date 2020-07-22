import { Node } from "typescript";
import { VisitorConfig } from "./visitor-config";

export type VisitorTransformer = (node: Node, config: VisitorConfig) => void;

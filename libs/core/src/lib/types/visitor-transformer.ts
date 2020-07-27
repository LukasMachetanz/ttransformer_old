import { Node, VisitResult } from "typescript";
import { TransformerConfig } from "./transformer-config";

export type VisitorTransformer = (node: Node, config: TransformerConfig) => VisitResult<Node>;

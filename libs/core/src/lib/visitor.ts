import { Node, VisitResult, Visitor, visitEachChild } from "typescript";
import { VisitorConfig } from "./types/visitor-config";
import { VisitorTransformer } from "./types/visitor-transformer";

export function getVisitor(transformer: VisitorTransformer, config: VisitorConfig): Visitor {
  const visitor: Visitor = (node: Node): VisitResult<Node> => {
    transformer(node, config);
    return visitEachChild(node, visitor, config.context);
  };

  return visitor;
}

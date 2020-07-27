import { Node, VisitResult, Visitor, visitEachChild } from "typescript";
import { TransformerConfig } from "./types/transformer-config";
import { VisitorTransformer } from "./types/visitor-transformer";

export function getVisitor(visitorTransformer: VisitorTransformer, transformerConfig: TransformerConfig): Visitor {
  const visitor: Visitor = (node: Node): VisitResult<Node> => {
    visitorTransformer(node, transformerConfig);
    return visitEachChild(node, visitor, transformerConfig.context);
  };

  return visitor;
}

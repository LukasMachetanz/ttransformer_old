import { Node, VisitResult, Visitor, visitEachChild } from "typescript";
import { TtransformerVisitorConfig } from "@ttransformer/shared";
import { ttransformerVisitorTransformation } from "@ttransformer/angular";

export function getVisitor(config: TtransformerVisitorConfig): Visitor {
  const visitor: Visitor = (node: Node): VisitResult<Node> => {
    // =========================
    // === START - Transform ===

    if (config.programConfig.framework === "angular") {
      ttransformerVisitorTransformation(node, config);
    }

    // === END - Transform ===
    // =======================
    return visitEachChild(node, visitor, config.context);
  };

  return visitor;
}

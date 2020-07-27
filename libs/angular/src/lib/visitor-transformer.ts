import { VisitorTransformer } from "@ttransformer/core";
import { isTtransformTarget } from "@ttransformer/core";
import { createDecorator, createCall, updateClassDeclaration, VisitResult, Node } from "typescript";
import { createTestDoubleDecoratorPropertyAccessExpression } from "./decorators/test-double.utils";

export const visitorTransformer: VisitorTransformer = (node, { sourceFile, context, ttransformInformation }): VisitResult<Node> => {

  /*
  if (isTtransformTarget(node, ttransformInformation)) {

    const testDoubleDecorator = createDecorator(
      createCall(createTestDoubleDecoratorPropertyAccessExpression(sourceFile, context), undefined, []),
    );

    return updateClassDeclaration(
      node,
      [testDoubleDecorator, ...node.decorators],
      node.modifiers,
      node.name,
      node.typeParameters,
      node.heritageClauses,
      node.members,
    );
  }
   */

  return undefined;
};

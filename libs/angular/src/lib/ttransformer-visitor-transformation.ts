import * as ts from "typescript";
import { TtransformerVisitorTransformation } from "@ttransformer/shared";

export const ttransformerVisitorTransformation: TtransformerVisitorTransformation = (node, _ ) => {
  if (ts.isClassDeclaration(node)) {
    console.log("isClassDeclaration");
  }
};

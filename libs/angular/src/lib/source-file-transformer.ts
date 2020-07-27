import { updateSourceFileNode } from "typescript";
import { containsTtransformTarget, SourceFileTransformer } from "@ttransformer/core";
import { createImportDeclaration, createImportSpecifier } from "@ttransformer/transformer-support";
import { TEST_DOUBLE_DECORATOR_NAME } from "./decorators/test-double.config";

export const sourceFileTransformer: SourceFileTransformer = ({ sourceFile, ttransformInformation }) => {
  if (containsTtransformTarget(sourceFile, ttransformInformation)) {
    const importDeclaration = createImportDeclaration("@ttransformer/angular", [
      createImportSpecifier(TEST_DOUBLE_DECORATOR_NAME),
    ]);

    sourceFile = updateSourceFileNode(sourceFile, [importDeclaration, ...sourceFile.statements]);
  }

  return sourceFile;
};

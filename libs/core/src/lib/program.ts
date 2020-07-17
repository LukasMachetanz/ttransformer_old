import * as ts from "typescript";
import { getVisitor } from "./visitor";
import { defaultProgramConfig, ProgramConfig } from "@ttransformer/shared";

export const program = (program: ts.Program, config: ProgramConfig): ts.TransformerFactory<ts.SourceFile> => {
  const programConfig = { ...defaultProgramConfig, ...config };
  return (context: ts.TransformationContext): ((sourceFile: ts.SourceFile) => ts.SourceFile) => {
    return (sourceFile: ts.SourceFile): ts.SourceFile => {
      return ts.visitNode(sourceFile, getVisitor({ program, sourceFile, context, programConfig }));
    };
  };
};

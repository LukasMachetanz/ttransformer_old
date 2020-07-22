import { Program, TransformationContext, SourceFile, TransformerFactory, visitNode } from "typescript";
import { defaultProgramConfig, ProgramConfig } from "./types/program-config";
import { getVisitor } from "./visitor";
import { VisitorTransformer } from "./types/visitor-transformer";

export function getProgram(transformer: VisitorTransformer) {
  return (program: Program, config: ProgramConfig): TransformerFactory<SourceFile> => {
    const programConfig = { ...defaultProgramConfig, ...config };

    return (context: TransformationContext): ((sourceFile: SourceFile) => SourceFile) => {
      return (sourceFile: SourceFile): SourceFile => {
        return visitNode(sourceFile, getVisitor(transformer, { program, sourceFile, context, programConfig }));
      };
    };
  };
}

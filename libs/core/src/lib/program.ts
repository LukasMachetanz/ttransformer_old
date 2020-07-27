import { Program, TransformationContext, SourceFile, TransformerFactory, visitNode } from "typescript";
import { defaultProgramConfig, ProgramConfig } from "./types/program-config";
import { getVisitor } from "./visitor";
import { VisitorTransformer } from "./types/visitor-transformer";
import { getTtransformInformation } from "./ttransform-information/ttransform-information";
import { TransformerConfig } from "./types/transformer-config";
import { SourceFileTransformer } from "./types/source-file-transformer";

export function getProgram(visitorTransformer: VisitorTransformer, sourceFileTransformer?: SourceFileTransformer) {
  console.log("\n\n=== TTRANSFORMER ===\n\n");

  return (program: Program, config: ProgramConfig): TransformerFactory<SourceFile> => {
    const ttransformInformation = getTtransformInformation(program);
    const programConfig = { ...defaultProgramConfig, ...config };

    return (context: TransformationContext): ((sourceFile: SourceFile) => SourceFile) => {
      return (sourceFile: SourceFile): SourceFile => {
        const transformerConfig: TransformerConfig = { program, sourceFile, context, programConfig, ttransformInformation };
        sourceFile = visitNode(sourceFile, getVisitor(visitorTransformer, transformerConfig));

        if (sourceFileTransformer) {
          sourceFile = sourceFileTransformer(transformerConfig);
        }

        return sourceFile;
      };
    };
  };
}

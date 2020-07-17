import { Program, SourceFile, TransformationContext } from "typescript";
import { ProgramConfig } from "./program-config";

export interface TtransformerVisitorConfig {
  program: Program;
  sourceFile: SourceFile;
  context: TransformationContext;
  programConfig: ProgramConfig;
}

import { Program, SourceFile, TransformationContext } from "typescript";
import { ProgramConfig } from "./program-config";
import { TtransformInformation } from "../ttransform-information/ttransform-information";

export interface TransformerConfig {
  program: Program;
  sourceFile: SourceFile;
  context: TransformationContext;
  programConfig: ProgramConfig;
  ttransformInformation: TtransformInformation;
}

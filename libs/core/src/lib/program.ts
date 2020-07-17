import * as ts from "typescript";
import { defaultProgramConfig, ProgramConfig } from "./types/program-config";

export const program = (program: ts.Program, programConfig: ProgramConfig): ts.TransformerFactory<ts.SourceFile> => {
  const config = { ...defaultProgramConfig, ...programConfig };

  return (context: ts.TransformationContext): ((sourceFile: ts.SourceFile) => ts.SourceFile) => {
    return (sourceFile: ts.SourceFile): ts.SourceFile => {

      return sourceFile;
    };
  };
};

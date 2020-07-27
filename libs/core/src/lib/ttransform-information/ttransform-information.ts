import { Symbol as TsSymbol, Program, isCallExpression } from "typescript";
import { isAliasSymbol, traverseSourceFileAndChildren } from "@ttransformer/transformer-support";
import { TTRANSFORM_FN_NAME } from "../ttransform/ttransform.config";

/**
 * Corresponds with the function defined in ttransform.ts
 *
 * targets: param passed to "ttransform"
 * sourceFileNames: source file names containing call to "ttransform"
 */
export interface TtransformInformation {
  targets: TsSymbol[];
  targetsSourceFileNames: string[];
  usageSourceFileNames: string[];
}

export function getTtransformInformation(program: Program): TtransformInformation {
  const ttransformInformation: TtransformInformation = {
    targets: [],
    targetsSourceFileNames: [],
    usageSourceFileNames: [],
  };

  const typeChecker = program.getTypeChecker();
  const rootFileNames = program.getRootFileNames();

  rootFileNames.forEach((rootFileName) => {
    const sourceFile = program.getSourceFile(rootFileName);

    if (sourceFile) {
      traverseSourceFileAndChildren(sourceFile, (nodeAndChildNode) => {
        if (isCallExpression(nodeAndChildNode)) {
          const expressionSymbol = typeChecker.getSymbolAtLocation(nodeAndChildNode.expression);
          const expressionName = expressionSymbol ? expressionSymbol.name : "";

          if (expressionName === TTRANSFORM_FN_NAME) {
            ttransformInformation.usageSourceFileNames.push(sourceFile.fileName);
            const argumentSymbol = typeChecker.getSymbolAtLocation(nodeAndChildNode.arguments[0]);

            if (argumentSymbol) {
              let classSymbol = argumentSymbol;

              if (isAliasSymbol(argumentSymbol)) {
                classSymbol = typeChecker.getAliasedSymbol(argumentSymbol);
              }

              if (!ttransformInformation.targets.includes(classSymbol)) {
                ttransformInformation.targets.push(classSymbol);
                ttransformInformation.targetsSourceFileNames.push(classSymbol.declarations[0]?.getSourceFile()?.fileName);
              }
            }
          }
        }
      });
    }
  });

  return ttransformInformation;
}

import { Symbol as TsSymbol, Node, isClassDeclaration, ClassDeclaration } from "typescript";
import { TtransformInformation } from "../ttransform-information/ttransform-information";

export function isTtransformTarget(node: Node, { targets }: TtransformInformation): node is ClassDeclaration {
  /**
   * Note
   * Unfortunately typeChecker.getSymbolAtLocation(node) returns null
   * Therefore (node as any).symbol as current workaround
   */
  const symbol: TsSymbol | undefined = (node as any).symbol;
  const originalSymbol: TsSymbol | undefined = (node as any).original ? (node as any).original.symbol : undefined;
  const symbolToCompare = symbol || originalSymbol;

  return !!(isClassDeclaration(node) && symbolToCompare && targets.includes(symbolToCompare));
}

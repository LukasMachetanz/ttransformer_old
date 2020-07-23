/**
 * This file contains functions dealing with Symbols.
 */

import { Symbol as TsSymbol } from "typescript";

export function isAliasSymbol(symbol: TsSymbol): boolean {
  return symbol.getFlags() === 2097152;
}

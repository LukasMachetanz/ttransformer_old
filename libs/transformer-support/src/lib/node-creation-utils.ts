import { ImportSpecifier, createImportSpecifier as tsCreateImportSpecifier, createIdentifier, createImportDeclaration as tsCreateImportDeclaration, createImportClause, createStringLiteral, ImportDeclaration, createNamedImports } from "typescript";

export function createImportSpecifier(identifierName: string): ImportSpecifier {
  return tsCreateImportSpecifier(undefined, createIdentifier(identifierName));
}

export function createImportDeclaration(importPath: string, importSpecifiers: ImportSpecifier[] = []): ImportDeclaration {
  return tsCreateImportDeclaration(
    undefined,
    undefined,
    createImportClause(undefined, createNamedImports(importSpecifiers), false),
    createStringLiteral(importPath),
  );
}

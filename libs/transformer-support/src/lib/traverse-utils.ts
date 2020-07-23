/**
 * This file contains functions dealing with traversing.
 */

import { SourceFile, Node } from "typescript";

export function traverseSourceFileAndChildren(sourceFile: SourceFile, callback: (node: Node) => void): void {
  sourceFile.forEachChild((rootLevelNode) => {
    (function traverse(node: Node): void {
      callback(node);

      node.forEachChild((childNode) => {
        traverse(childNode);
      });
    })(rootLevelNode);
  });
}

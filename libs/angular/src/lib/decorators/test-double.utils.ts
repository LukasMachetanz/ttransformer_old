import { createPropertyAccess, createIdentifier, ModuleKind, SourceFile, TransformationContext, Expression } from "typescript";
import { TEST_DOUBLE_DECORATOR_COMMON_JS_IMPORT_1, TEST_DOUBLE_DECORATOR_NAME } from "./test-double.config";

/**
 * Note
 * Unfortunately this "hack" has to be done due to CommonJS compiling problems
 * https://github.com/madou/typescript-transformer-handbook/issues/13
 */
export function createTestDoubleDecoratorPropertyAccessExpression(sourceFile: SourceFile, context: TransformationContext): Expression {
  if (context.getCompilerOptions().module === ModuleKind.CommonJS) {
    return createPropertyAccess(createIdentifier(TEST_DOUBLE_DECORATOR_COMMON_JS_IMPORT_1), createIdentifier(TEST_DOUBLE_DECORATOR_NAME));
  } else {
    return createIdentifier(TEST_DOUBLE_DECORATOR_NAME);
  }
}

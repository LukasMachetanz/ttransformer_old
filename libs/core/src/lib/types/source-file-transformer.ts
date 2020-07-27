import { SourceFile } from "typescript";
import { TransformerConfig } from "@ttransformer/core";

export type SourceFileTransformer = (config: TransformerConfig) => SourceFile;

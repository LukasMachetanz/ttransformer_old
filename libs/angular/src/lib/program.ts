import { getProgram } from "@ttransformer/core";
import { visitorTransformer } from "./visitor-transformer";
import { sourceFileTransformer } from "./source-file-transformer";

export const program = getProgram(visitorTransformer, sourceFileTransformer);




import { Node } from "typescript";
import { TtransformerVisitorConfig } from "./ttransformer-visitor-config";

export type TtransformerVisitorTransformation = (node: Node, config: TtransformerVisitorConfig) => void;

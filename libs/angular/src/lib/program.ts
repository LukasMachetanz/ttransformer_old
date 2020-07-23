import { getProgram, VisitorTransformer } from "@ttransformer/core";
import { isTtransformTarget } from "@ttransformer/core";

const visitorTransformer: VisitorTransformer = (node, { ttransformInformation }) => {
  if (isTtransformTarget(node, ttransformInformation)) {
    console.log("isTtransformTarget");
  }
};

export const program = getProgram(visitorTransformer);

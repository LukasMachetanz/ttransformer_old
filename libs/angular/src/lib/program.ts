import { getProgram, VisitorTransformer } from "@ttransformer/core";

const visitorTransformer: VisitorTransformer = (node, config) => {
  console.log("visitorTransformer");
};

export const program = getProgram(visitorTransformer);

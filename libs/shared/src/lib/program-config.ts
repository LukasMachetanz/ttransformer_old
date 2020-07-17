export interface ProgramConfig {
  framework: "angular"
  unitTestFramework: "jasmine" | "jest"
}

export const defaultProgramConfig: ProgramConfig = {
  framework: "angular",
  unitTestFramework: "jasmine"
};

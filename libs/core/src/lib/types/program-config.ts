export interface ProgramConfig {
  unitTestFramework: "jasmine" | "jest"
}

export const defaultProgramConfig: ProgramConfig = {
  unitTestFramework: "jasmine"
};

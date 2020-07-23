export type TtransformedClass<T> = {
  [K in keyof T]: T[K] extends Function ? jasmine.Spy : T[K];
};

export type ClassType = any;
export type ClassInstance = any;

export class Ttransformer {
  private static _registry = new Map<ClassType, ClassInstance>();
  private static _isInTransformContext = false;

  public static register<T>(classType: ClassType, classInstance: ClassInstance): void {
    const classInstances = Ttransformer.getInstances<T>(classType);
    Ttransformer._registry.set(classType, [...classInstances, classInstance]);
  }

  public static unregister<T>(classType: ClassType, classInstance: ClassInstance): void {
    const classInstances = Ttransformer.getInstances<T>(classType);
    const index = classInstances.indexOf(classInstance);

    if (index !== -1) {
      classInstances.splice(index);
    }

    Ttransformer._registry.set(classType, classInstances);
  }

  public static getFirstInstance<T>(classType: ClassType): TtransformedClass<T> | undefined {
    const classInstances = Ttransformer.getInstances<T>(classType);
    return classInstances[0];
  }

  public static getLastInstance<T>(classType: ClassType): TtransformedClass<T> | undefined {
    const classInstances = Ttransformer.getInstances<T>(classType);
    return classInstances[classInstances.length - 1];
  }

  public static getInstance<T>(classType: ClassType, index = 0): TtransformedClass<T> | undefined {
    const classInstances = Ttransformer.getInstances<T>(classType);
    return classInstances[index];
  }

  public static getInstances<T>(classType: ClassType): TtransformedClass<T>[] {
    const classInstances = Ttransformer._registry.get(classType);
    return classInstances ? [...classInstances] : [];
  }

  public static isInTransformContext(): boolean {
    return Ttransformer._isInTransformContext;
  }

  public static enterTransformContext(): void {
    Ttransformer._isInTransformContext = true;
  }

  public static exitTransformContext(): void {
    Ttransformer._isInTransformContext = false;
  }
}

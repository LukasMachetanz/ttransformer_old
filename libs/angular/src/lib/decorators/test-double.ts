/*
import { ɵComponentDef } from '@angular/core';
import { Ttransformer } from "@ttransformer/core";

type Writeable<T> = { -readonly [P in keyof T]: T[P] };
 */

export function TestDouble() {
  console.log("=== TestDouble Decorator ===");
  return (OriginalComponent) => {

    /*
    const propertyNames = Object.getOwnPropertyNames(OriginalComponent.prototype).filter((propertyName) => propertyName !== 'constructor');

    if (!propertyNames.includes('ngOnDestroy')) {
      propertyNames.push('ngOnDestroy');
    }

    const spyObj = jasmine.createSpyObj(OriginalComponent.name, propertyNames);

    Object.defineProperty(OriginalComponent, 'ɵfac', {
      get(): any {
        return () => {
          if (Ttransformer.isInTransformContext()) {
            Ttransformer.register(OriginalComponent, spyObj);
            return spyObj;
          } else {
            return OriginalComponent(); // TODO: What is with dependencies? Call original factory function ?!
          }
        };
      },
      set(_: any) {}
    });

    const originalComponentDefinition = { ... OriginalComponent.ɵcmp };
    const testDoubleComponentDefinition: Writeable<ɵComponentDef<any>> = { ...OriginalComponent.ɵcmp };
    testDoubleComponentDefinition.onDestroy = () => {
      Ttransformer.unregister(OriginalComponent, spyObj)
    };
    testDoubleComponentDefinition.template = (rf, ctx) => {
      if (Ttransformer.isInTransformContext()) {
        if (rf & 1) {}
      } else {
        originalComponentDefinition.template(rf, ctx);
      }
    },

    Object.defineProperty(OriginalComponent, 'ɵcmp', {
      get(): any {
        return testDoubleComponentDefinition; // TODO: return original component definition if not in transform context
      },
      set(_: any) {}
    });
     */

    return OriginalComponent;
  };
}

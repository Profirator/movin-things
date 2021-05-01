/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
  interface MovinThings {
    api: string;
    config: string;
    forcedlocale: string;
  }
}
declare global {
  interface HTMLMovinThingsElement
    extends Components.MovinThings,
      HTMLStencilElement {}
  var HTMLMovinThingsElement: {
    prototype: HTMLMovinThingsElement;
    new (): HTMLMovinThingsElement;
  };
  interface HTMLElementTagNameMap {
    "movin-things": HTMLMovinThingsElement;
  }
}
declare namespace LocalJSX {
  interface MovinThings {
    api?: string;
    config?: string;
    forcedlocale?: string;
  }
  interface IntrinsicElements {
    "movin-things": MovinThings;
  }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      "movin-things": LocalJSX.MovinThings &
        JSXBase.HTMLAttributes<HTMLMovinThingsElement>;
    }
  }
}
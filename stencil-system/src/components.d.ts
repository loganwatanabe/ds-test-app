/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonComponent {
        "disabled": boolean;
        "link": string;
        "loading": boolean;
        "onClick": void;
        "variant": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
        "disabled"?: boolean;
        "link"?: string;
        "loading"?: boolean;
        "onClick"?: void;
        "variant"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}

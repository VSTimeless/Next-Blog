import * as React from 'react';

declare global {
  namespace React {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      [key: string]: any;
    }
    interface CSSProperties {
      [key: string]: any;
    }
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface Element extends React.ReactElement<any, any> {}
    interface ElementClass extends React.Component<any, any> {}
    interface ElementAttributesProperty {
      props: any;
    }
    interface ElementChildrenAttribute {
      children: any;
    }
  }
} 
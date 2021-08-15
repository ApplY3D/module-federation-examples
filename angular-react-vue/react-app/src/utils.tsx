import React, { ComponentProps, JSXElementConstructor } from 'react';
import ReactDOM from 'react-dom';

export const renderReactElement = <T extends JSXElementConstructor<any>>({
  ReactElement,
  selector,
  props,
}: {
  ReactElement: T;
  selector: string;
  props: ComponentProps<T>;
}) => {
  ReactDOM.render(
    React.createElement(ReactElement, props),
    document.querySelector(selector)
  );
};

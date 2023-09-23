import React, { ReactElement, ReactNode } from "react";

interface IRenderList<T> {
  list: T[];
  render(item: T, key: number): JSX.Element;
}

const RenderList = <T,>({ list, render }: IRenderList<T>): JSX.Element => {
  return <React.Fragment>{list.map(render)}</React.Fragment>;
};

export default RenderList;

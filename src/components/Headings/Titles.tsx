import React, { PropsWithChildren } from "react";

interface ITitles {
  heading: string;
  children: string;
}

const Titles = ({ heading, children }: ITitles) => {
  const commonStyle = { textTransform: "capitalize" };
  switch (heading) {
    case "h1": {
      return <h1 className="text-2xl font-medium">{children}</h1>;
    }
    case "h2": {
      return <h2 className="text-xl font-semibold">{children}</h2>;
    }
    case "h3": {
      return <h3 className="text-lg font-normal">{children}</h3>;
    }
    default: {
      return <h4 className="text-base font-normal">{children}</h4>;
    }
  }
};

export default Titles;

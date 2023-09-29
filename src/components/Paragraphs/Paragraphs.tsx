import React, { PropsWithChildren } from "react";
import { CSSProperties } from "react";

interface IParagraphs extends PropsWithChildren {
  level: string;
  style?: CSSProperties;
}

export default function Paragraphs({ level, style, children }: IParagraphs) {
  switch (level) {
    case "p1": {
      return <p className="text-lg font-medium">{children}</p>;
    }
    case "p2": {
      return <p className="text-lg font-medium">{children}</p>;
    }
    case "p3": {
      return <p className="text-lg font-medium">{children}</p>;
    }
    case "p4": {
      return <p className="text-lg font-medium">{children}</p>;
    }
    case "p5": {
      return <p className="text-lg font-medium">{children}</p>;
    }
    default: {
      return <p className="text-lg font-medium">{children}</p>;
    }
  }
}

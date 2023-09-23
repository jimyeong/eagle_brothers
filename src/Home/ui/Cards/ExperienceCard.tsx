import React from "react";
import { scripts, IScript } from "scripts";
import RenderList from "components/Lists/RenderList";
import styled from "styled-components";

interface IExperienceCard {
  story: IScript;
  children?: React.PropsWithChildren;
}
type renderWords = React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;

const UICardBlock = styled.li`
  padding: 16px 8px;
  width: 33%;
  .inner__card {
  }
`;

export default function ExperienceCard({ story, children }: IExperienceCard) {
  const renderWords = (item: string, key: number): renderWords => (
    <li key={key}>{item}</li>
  );
  return (
    <UICardBlock className="card">
      <div className="inner__card">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14b2d262790427.5a9c10e77c722.gif"
          alt=""
        />
        <p className="desc">{story.description}</p>
        <ul>
          <RenderList list={story.words} render={renderWords} />
        </ul>
      </div>
    </UICardBlock>
  );
}

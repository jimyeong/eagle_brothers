import React from "react";
import { scripts, IScript } from "scripts";
import RenderList from "components/Lists/RenderList";
import styled from "styled-components";
import { Titles } from "components";

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
  float: left;
  .inner__card {
    padding: 8px 16px;
    background-color: #fff;
    border-radius: 6px;
  }
  .desc {
    margin-top: 8px;
    line-height: 1.5;
  }
`;

export default function ExperienceCard({ story, children }: IExperienceCard) {
  // checks
  const renderWords = (item: string, key: number): renderWords => (
    <li key={key}>{item}</li>
  );
  return (
    <UICardBlock className="card">
      <div className="inner__card">
        <Titles heading="h2">{story.title}</Titles>
        <p className="desc">{story.description}</p>
        <ul>
          <RenderList list={story.words} render={renderWords} />
        </ul>
        <div className="card__bottom">
          <span className="font-semibold">Memorised :</span>
          <div className="memorised">
            <span>V</span>
          </div>
          <div className="good_job_sticker">
            <img
              style={{ width: "80px" }}
              src="https://media.istockphoto.com/id/1267740854/vector/good-job-work-comic-text-sound-effects-pop-art-style-vector-speech-bubble-word-and-short.jpg?s=2048x2048&w=is&k=20&c=Fu9NvRCt38HW65DgGwZwKMFSASGQrG-uj3CwrhzFqG8="
              alt=""
            />
            <span>2023.08.04</span>
          </div>
        </div>
      </div>
    </UICardBlock>
  );
}

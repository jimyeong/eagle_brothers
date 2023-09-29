import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import RenderList from "components/Lists/RenderList";
import ExperienceCard from "Home/ui/Cards/ExperienceCard";
import { scripts, IScript } from "scripts";

interface IEnglishStudyPage extends PropsWithChildren {}

const UIEnglishStudyBlock = styled.div``;

export default function EnglishStudyPage({ children }: IEnglishStudyPage) {
  return (
    <UIEnglishStudyBlock>
      <div className="experience_cards">
        <ul className="card__list clearfix">
          <RenderList
            list={scripts}
            render={(item: IScript, key: number) => {
              return <ExperienceCard key={key} story={item} />;
            }}
          />
        </ul>
      </div>
    </UIEnglishStudyBlock>
  );
}

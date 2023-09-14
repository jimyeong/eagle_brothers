import React from "react";
import styled from "styled-components";
import { Forms } from "components";
import RectangleButton from "components/Buttons/RectangleButton/RectangleButton";
import { UIConfig } from "configs";
import { Buttons } from "components";

const UIAddItemBlock = styled.div``;

interface IAddItem {
  taskId: string;
  taskValue: string;
}

export default function AddItem({ taskId, taskValue }: IAddItem) {
  return (
    <UIAddItemBlock>
      <div className="flex flex-row">
        <Forms.TextInput
          className="form-input px-4 py-3 rounded-full"
          type="text"
          name={taskId}
          value={taskValue}
        />
        <button
          style={{ backgroundColor: "#4700cc", color: "#fff", width: "70px" }}
          className="rounded-lg px-3 py-2"
        >
          Add
        </button>
      </div>
    </UIAddItemBlock>
  );
}

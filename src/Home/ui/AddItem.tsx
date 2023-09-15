import React, { useContext } from "react";
import styled from "styled-components";
import { Forms } from "components";
import RectangleButton from "components/Buttons/RectangleButton/RectangleButton";
import { UIConfig } from "configs";
import { Buttons } from "components";
import useTextInput from "hooks/useTextInput";
import { useHomeContext } from "Home/HomePage";

const UIAddItemBlock = styled.div``;

interface IAddItem {}

export default function AddItem() {
  const homeContext = useHomeContext();
  const { onReset, onChange, values } = useTextInput({
    newTodo: "",
    nameKey: "newTodo",
  });
  const onClickButton = () => {
    homeContext.addTodoItem({
      done: false,
      active: false,
      title: values.newTodo,
    });
    onReset();
  };
  return (
    <UIAddItemBlock>
      <div className="flex flex-row">
        <Forms.TextInput
          className="form-input px-4 py-3 rounded-full"
          type="text"
          name={values.nameKey}
          value={values.newTodo}
          onChange={onChange}
        />
        <button
          onClick={onClickButton}
          style={{ backgroundColor: "#4700cc", color: "#fff", width: "70px" }}
          className="rounded-lg px-3 py-2"
        >
          Add
        </button>
      </div>
    </UIAddItemBlock>
  );
}

import React, { useContext, KeyboardEvent } from "react";
import styled from "styled-components";
import { Forms } from "components";
import RectangleButton from "components/Buttons/RectangleButton/RectangleButton";
import { UIConfig } from "configs";
import { Buttons } from "components";
import useTextInput from "hooks/useTextInput";
import { useHomeContext } from "Home/HomePage";

const UIAddItemBlock = styled.div`
  .btn-submit {
    background: #fbf13f;
    width: 110px;
    margin-left: 16px;
    color: #0a1744;
    font-weight: 500;
  }
`;

interface IAddItem {}

export default function AddItem() {
  const homeContext = useHomeContext();
  const { onReset, onChange, values } = useTextInput({
    newTodo: "",
    nameKey: "newTodo",
  });
  const onClickButton = () => {
    if (values.newTodo == "") return;

    homeContext.addTodoItem({
      done: false,
      active: false,
      title: values.newTodo,
    });
    onReset();
  };
  const onKeyPressEnter = (event: KeyboardEvent) => {
    if (event.key == "Enter") {
      event.preventDefault();
      onClickButton();
    }
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
          onKeyDown={onKeyPressEnter}
        />
        <Buttons.RippleButton
          onClick={onClickButton}
          className="rounded-lg px-3 py-2 btn-submit"
        >
          Add
        </Buttons.RippleButton>
      </div>
    </UIAddItemBlock>
  );
}

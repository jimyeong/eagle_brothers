import React, {
  useContext,
  createContext,
  ContextType,
  PropsWithChildren,
} from "react";
import { NavigateFunction, NavigateProps, useNavigate } from "react-router-dom";

interface IGlobalState {
  updateGlobalState: () => {};
}
// const initialContext: IGlobalState = {};
// const globalAppContext = createContext<IGlobalState | null>(null);
const globalAppContext = createContext<IGlobalState>({} as IGlobalState);

export const useGlobalAppContext = () => {
  const contextValue = useContext(globalAppContext);
  if (!contextValue) {
    throw Error("this context is supposed to be used within Global Context ");
  }
  return contextValue;
};

export default function GlobalAppContextProvider(props: PropsWithChildren) {
  const updateGlobalState = () => {
    return "hi";
  };
  return <globalAppContext.Provider value={{ updateGlobalState }} {...props} />;
}

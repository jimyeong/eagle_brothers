import React from "react";
import GlobalAppContextProvider from "./contexts/GlobalAppContext";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "Home/HomePage";
import { Layout } from "components";
import styled from "styled-components";
import { UIConfig } from "configs";

const UIAppBlock = styled.div`
  height: 100%;
  #wrapper {
    position: relative;
    min-height: 100%;
    padding-top: ${UIConfig.layouts.header.height}px;
    padding-bottom: ${UIConfig.layouts.footer.height}px;
  }

  #body-contents {
    padding: 0 16px;
    padding-top: 16px;
    position: absolute;
    width: calc(100% - 320px);
    right: 0;
  }
  .container {
  }
`;

function App({ children }: React.PropsWithChildren) {
  return (
    <GlobalAppContextProvider>
      <UIAppBlock>
        <Layout.Header />
        <div id="wrapper">
          <div id="body-contents">
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>
          <Layout.Footer />
        </div>
      </UIAppBlock>
    </GlobalAppContextProvider>
  );
}

export default App;

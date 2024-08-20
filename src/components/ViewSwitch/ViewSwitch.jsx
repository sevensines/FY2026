import styled from "styled-components";
import { useState } from "react";
import ViewButton from "./ViewButton";
import Viewport from "../Viewport/Viewport";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TabControls = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ViewSwitch() {
  const [selectedTopic, setSelectedTopic] = useState("Desktop");
  const handleSelect = (newValue) => {
    setSelectedTopic(newValue);
  };
  return (
    <>
      <TabWrapper id='test'>
        <TabControls>
          <ViewButton
            isSelected={selectedTopic == "Desktop"}
            onClick={() => handleSelect("Desktop")}
          >
            Desktop
          </ViewButton>
          <ViewButton
            isSelected={selectedTopic == "Tablet"}
            onClick={() => handleSelect("Tablet")}
          >
            Tablet
          </ViewButton>
          <ViewButton
            isSelected={selectedTopic == "Mobile"}
            onClick={() => handleSelect("Mobile")}
          >
            Mobile
          </ViewButton>
        </TabControls>
      </TabWrapper>
      <Viewport viewSelected={`${selectedTopic}`} />
    </>
  );
}

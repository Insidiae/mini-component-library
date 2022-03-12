import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <NativeSelect>{children}</NativeSelect>
      <PresentationalBit>
        <VisuallyHidden>{label}</VisuallyHidden>
        <DisplayedValue>{displayedValue}</DisplayedValue>
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const PresentationalBit = styled.div`
  padding: 12px 16px;
  /* Add more padding to the right to accommodate the icon */
  padding-right: 52px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const DisplayedValue = styled.span`
  display: inline-block;
`;

const IconWrapper = styled.div`
  /* 
    We *can* center the icon via something like Flexbox,
    but since it's in a later module here's an alternative
    trick to center the icon via absolute positioning:
  */
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 0;
  bottom: 0;
  margin: auto;

  /* Add just a bit more padding to the right */
  right: 10px;

  /* Prevent the icon from capturing clicks meant for the native select */
  pointer-events: none;
`;

export default Select;

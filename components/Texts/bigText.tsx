import styled from "styled-components/native";

import { colors } from "../color";

const StyledText = styled.Text`
  font-size: 37px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

import { TextProps } from "./types";
const BigText: React.FC<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;

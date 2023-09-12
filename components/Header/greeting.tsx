import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import RegularText from "../Texts/regularText";
import { colors } from "../color";
import SmallText from "../Texts/smallText";

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const Greeting: React.FC<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          { color: colors.secondary, fontSize: 22 },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText textStyles={[{ color: colors.graydark }, props.subTextStyles]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;

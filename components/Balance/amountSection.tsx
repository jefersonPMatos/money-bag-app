import styled from "styled-components/native";
import { AmountProps } from "./types";
import SmallText from "../Texts/smallText";
import { colors } from "../color";
import RegularText from "../Texts/regularText";

const AmountSectionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  align-items: center;
  flex: 1;
`;

const AmountSection: React.FC<AmountProps> = (props) => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>
        Total Balance
      </SmallText>

      <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
        $ {props.balance}
      </RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;

import styled from "styled-components/native";
import { colors } from "../color";
import { BalanceCardProps } from "./types";

import bgCard from "../../assets/bgs/background_transparent.png";
import { View } from "react-native";
import RegularText from "../Texts/regularText";
import SmallText from "../Texts/smallText";

const CardBackground = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  height: 100%;
  width: 100%;
  background-color: ${colors.primary};
  border-radius: 15px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 80%;
  flex: 1;
`;

const BalanceCard: React.FC<BalanceCardProps> = (props) => {
  return (
    <CardBackground source={bgCard}>
      <CardTouchable underlayColor={colors.tertiary}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={{ color: colors.white }}>
              ****** {props?.accountNo?.slice(6, 10)}
            </RegularText>
          </CardRow>

          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{ color: colors.graylight, marginBottom: 5 }}
              >
                Total balance
              </SmallText>
              <RegularText textStyles={{ color: colors.white }}>
                ${props.balance}
              </RegularText>
            </View>
            <Logo source={props?.logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  );
};

export default BalanceCard;

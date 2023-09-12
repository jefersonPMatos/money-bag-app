import { StatusBar } from "expo-status-bar";

import { Container } from "../components/shared";
import { colors } from "../components/color";
import styled from "styled-components/native";
import BigText from "../components/Texts/bigText";
import SmallText from "../components/Texts/smallText";
import RegularButton from "../components/Buttons/regularButton";

import { RootStackParamList } from "../navigators/rootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

import bg from "../assets/bgs/background_v1.png";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 100%;
  height: 100%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const Welcome: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={bg} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </BigText>

          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment method, connects your money to your friends and family.
          </SmallText>

          <RegularButton onPress={() => navigation.navigate("Home")}>
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/color";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/rootStack";
import AmountSection from "../components/Balance/amountSection";
import BalanceCardSection from "../components/Balance/balanceCardSection";
import ButtonSection from "../components/Balance/buttonSection";

type Props = StackScreenProps<RootStackParamList, "Balance">;

const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const Balance: React.FC<Props> = ({ route }) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  );
};

export default Balance;

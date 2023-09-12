import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/color";
import { StatusBar } from "expo-status-bar";

import masterLogo from "../assets/cards/mc.png";
import visaLogo from "../assets/cards/visa_white.png";

import avatar1 from "../assets/portraits/1.jpg";
import avatar2 from "../assets/portraits/2.jpg";
import avatar3 from "../assets/portraits/3.jpg";

import CardSection from "../components/Cards/cardSection";
import TransactionSection from "../components/Transactions/transationSection";
import SendMoneySection from "../components/SendMoney/sendMoneySection";

import { RootStackParamList } from "../navigators/rootStack";
import { StackScreenProps } from "@react-navigation/stack";

export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: React.FC<Props> = ({ navigation }) => {
  const cardsData = [
    {
      id: 1,
      accountNo: "3845757744",
      balance: 20000.15,
      alias: "Work Debit",
      logo: visaLogo,
    },
    {
      id: 2,
      accountNo: "3845757745",
      balance: 15000.75,
      alias: "Personal Debit",
      logo: masterLogo,
    },
    {
      id: 3,
      accountNo: "3845757746",
      balance: 10000.35,
      alias: "Savings",
      logo: masterLogo,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-$20,00",
      date: "9 Sep 2023",
      title: "Taxi",
      subTitle: "Uber",
      art: {
        icon: "car",
        background: colors.primary,
      },
    },
    {
      id: 2,
      amount: "-$286,38",
      date: "9 Sep 2023",
      title: "Shopping",
      subTitle: "Amazon",
      art: {
        icon: "cart",
        background: colors.tertiary,
      },
    },
    {
      id: 3,
      amount: "-$59,90",
      date: "9 Sep 2023",
      title: "Food",
      subTitle: "Ifood",
      art: {
        icon: "fast-food",
        background: colors.accent,
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      name: "Coby Andoh",
      amount: "2450.56",
      background: colors.tertiary,
      img: avatar1,
    },
    {
      id: 2,
      name: "Harleen Scot",
      amount: "4450.56",
      background: colors.primary,
      img: avatar2,
    },
    {
      id: 3,
      name: "James Corbyn",
      amount: "6253.56",
      background: colors.accent,
      img: avatar3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="light" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;

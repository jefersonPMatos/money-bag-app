import styled from "styled-components/native";
import { TransactionsProps } from "./types";
import TransactionAvi from "./transactionAvi";
import { View } from "react-native";
import RegularText from "../Texts/regularText";
import { colors } from "../color";
import SmallText from "../Texts/smallText";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: React.FC<TransactionsProps> = (props) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 10 }}>
          <RegularText
            textStyles={{
              color: colors.secondary,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            {props.title}
          </RegularText>
          <SmallText
            textStyles={{
              color: colors.graydark,
              textAlign: "left",
            }}
          >
            {props.subTitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          textStyles={{
            color: colors.secondary,
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          {props.amount}
        </RegularText>
        <SmallText
          textStyles={{
            color: colors.graydark,
            textAlign: "right",
          }}
        >
          {props.date}
        </SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;

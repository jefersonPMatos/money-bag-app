import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { TransactionSectionProps } from "./types";

import { colors } from "../color";
import RegularText from "../Texts/regularText";
import SmallText from "../Texts/smallText";
import TransactionItem from "./transactionItem";

const TransactionSectionBg = styled.View`
  width: 100%;
  flex: 2;
  padding: 5px 30px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionSection: React.FC<TransactionSectionProps> = (props) => {
  return (
    <TransactionSectionBg>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
          Transaction
        </RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>
          Recent
          <Ionicons name="caret-down" size={13} color={colors.graydark} />
        </SmallText>
      </TransactionRow>

      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator
        contentContainerStyle={{ paddingBottom: 25 }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBg>
  );
};

export default TransactionSection;

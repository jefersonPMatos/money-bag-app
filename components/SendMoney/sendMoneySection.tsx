import { useRef } from "react";
import styled from "styled-components/native";
import BottomSheet from "@gorhom/bottom-sheet";

import { SendMoneySectionProps } from "./types";

import { colors } from "../color";

import RegularText from "../Texts/regularText";
import SmallText from "../Texts/smallText";

import SendMoneyItem from "./sendMoneyItem";

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
  margin-bottom: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding: 0 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: React.FC<SendMoneySectionProps> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet ref={sheetRef} snapPoints={["12%", "35%"]} index={1}>
      <SendMoneySectionBackground>
        <SendMoneyRow>
          <RegularText textStyles={{ color: colors.secondary, fontSize: 19 }}>
            Send money to
          </RegularText>
          <TextButton onPress={() => alert("Add")}>
            <SmallText
              textStyles={{
                color: colors.tertiary,
                fontWeight: "bold",
              }}
            >
              +Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>

        <SendMoneyList
          data={props.data}
          contentContainerStyle={{ alignItems: "flex-start" }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <SendMoneyItem {...item} />}
        />
      </SendMoneySectionBackground>
    </BottomSheet>
  );
};

export default SendMoneySection;

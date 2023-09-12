import styled from "styled-components/native";
import BalanceCard from "./balanceCard";
import { BalanceCardProps } from "./types";

const BalanceCardSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  margin-bottom: 50px;
`;

const BalanceCardSection: React.FC<BalanceCardProps> = (props) => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  );
};

export default BalanceCardSection;

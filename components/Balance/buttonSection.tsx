import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import RegularButton from "../Buttons/regularButton";
import { colors } from "../color";

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection: React.FC = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{ width: "50%" }} onPress={() => {}}>
        Cancel <Ionicons name="card" size={17} color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;

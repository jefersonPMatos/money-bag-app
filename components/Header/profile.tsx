import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import styled from "styled-components/native";

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 50px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
      <StyledImage source={props.img} style={props.imgStyle} />
    </StyledView>
  );
};

export default Profile;

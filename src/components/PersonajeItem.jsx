import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";
import { Link } from "react-router-native";

const PersonajesItemHeader = ({ id, image, name, status, species, gender }) => (
  <View style={{ flexDirection: "row", paddingBottom: 2, flex: 1 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold">{name}</StyledText>
      <StyledText color="secondary" fontSize="subheading">
        {status}
      </StyledText>
      <StyledText color="primary">{species}</StyledText>
      <StyledText color="primary">{gender}</StyledText>
    </View>
    <Link to={`/${id}`} component={Pressable}>
      <View>
        <Text style={styles.botton}>Ver</Text>
      </View>
    </Link>
  </View>
);

const PersonajeItem = (props) => (
  <View key={props.id} style={styles.container}>
    <PersonajesItemHeader {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  botton: {
    width: 50,
    height: 35,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-end",
    textAlign: "center",
    textAlignVertical: "center",
    verticalAlign: "middle",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
});

export default PersonajeItem;

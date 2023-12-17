import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getPersonajeById } from "../helpers/getPersonajeById";
import { Navigate, useNavigate, useParams } from "react-router-native";
import theme from "../theme";
import StyledText from "./StyledText";

const Vista = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}) => (
  <View style={{ flex: 1 }}>
    <View>
      <Text style={styles.title}>
        {id} - {name}
      </Text>
    </View>
    <View style={{ paddingVertical: 10 }}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
    <View style={{ alignSelf: "center", flexDirection: "row" }}>
      <StyledText item="subtitle">Status: </StyledText>
      <StyledText style={{ color: "gray" }} item="itemtext">
        {status}
      </StyledText>
    </View>
    <Item {...{ subtitulo: "Species", text: species }} />
    <Item {...{ subtitulo: "Type", text: type == "" ? species : type }} />
    <Item {...{ subtitulo: "Gender", text: gender }} />
    <Item {...{ subtitulo: "Origin", text: origin.name }} />
    <Item {...{ subtitulo: "Last Location", text: location.name }} />
    <Item {...{ subtitulo: "Appearances episodes", text: episode.length }} />
    <View
      style={{
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingHorizontal: 100,
        paddingBottom: 10,
      }}
    >
      <StyledText item="subtitle">List of Episodes: </StyledText>
      <StyledText item="itemtext">
        {String(
          episode.map((epi) => epi.split("/")[5]).map((epi) => " " + epi)
        )}
      </StyledText>
    </View>

    <Item {...{ subtitulo: "Created", text: created }} />
  </View>
);

const Item = ({ subtitulo, text }) => (
  <View style={{ alignSelf: "center", flexDirection: "row" }}>
    <StyledText item="subtitle">{subtitulo}: </StyledText>
    <StyledText item="itemtext">{text}</StyledText>
  </View>
);

const MasInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const personaje = getPersonajeById(parseInt(id))[0];

  if (!personaje) {
    return <Navigate to="/" />;
  }

  const episodes = personaje.episode
    .map((epi) => epi.split("/")[5])
    .map((epi) => " " + epi);

  return (
    <View>
      <ScrollView>
        <Vista {...personaje} />
        <Pressable style={{ paddingTop: 10 }} onPress={() => navigate("/")}>
          <Text style={styles.botton}>Go Home</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  botton: {
    width: 100,
    height: 40,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    verticalAlign: "middle",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 4,
    alignSelf: "center",
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    color: "blue",
  },
});

export default MasInfo;

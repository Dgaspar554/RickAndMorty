import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../theme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreviousPersonajes, getPersonajes } from "../store/slices";
import PersonajeItem from "./PersonajeItem";
import Search from "./AddPersonaje";

const PressablesButton = ({ personaje, dispatch, page, next }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
    {page != 1 && (
      <Pressable
        onPress={() => dispatch(PreviousPersonajes(personaje, page, next))}
      >
        <Text style={styles.botton}>Previous</Text>
      </Pressable>
    )}
    {next != null && (
      <Pressable onPress={() => dispatch(getPersonajes(personaje, page, next))}>
        <Text style={styles.botton}>Next</Text>
      </Pressable>
    )}
  </View>
);

export const RickAndMorty = () => {
  const dispatch = useDispatch();
  const { personajes, page, next, maxPage, error } = useSelector(
    (state) => state.RickAndMorty
  );
  const [personaje, setPersonaje] = useState("");

  useEffect(() => {
    dispatch(getPersonajes());
  }, []);

  const onAddPersonaje = (newPersonaje) => {
    setPersonaje(newPersonaje);
    dispatch(getPersonajes(newPersonaje));
  };

  return (
    <View style={{ flex: 1 }}>
      <Search onNewPersonaje={(event) => onAddPersonaje(event)} />
      {error == null ? (
        <Text>
          {" "}
          Pagina {page} de {maxPage}
        </Text>
      ) : (
        <Text>{error}</Text>
      )}
      <FlatList
        data={personajes}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: perso }) => <PersonajeItem {...perso} />}
      />
      <PressablesButton {...{ personaje, dispatch, page, next }} />
    </View>
  );
};

const styles = StyleSheet.create({
  botton: {
    width: 150,
    height: 40,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    textAlign: "center",
    textAlignVertical: "center",
    verticalAlign: "middle",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "visible",
  },
});

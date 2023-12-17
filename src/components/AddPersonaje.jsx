import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import theme from "../theme";
import { useState } from "react";

const Search = ({ onNewPersonaje }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // if (inputValue.trim().length < 1) return;
    // setInputValue("");
    onNewPersonaje(inputValue.trim());
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"gray"}
        onChangeText={(inputValue) => onInputChange(inputValue)}
        value={inputValue}
      />
      <Pressable onPress={onSubmit}>
        <Text style={styles.botton}>Search</Text>
      </Pressable>
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
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 4,
    paddingHorizontal: 10,
  },
});

export default Search;

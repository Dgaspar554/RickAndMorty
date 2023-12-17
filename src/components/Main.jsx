import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Constants from "expo-constants";
import { RickAndMorty } from "./RickAndMorty";
import { Route, Routes } from "react-router-native";
import MasInfo from "./MasInfo";

const Main = () => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight + 10 }}>
      <Routes>
        <Route path="/" element={<RickAndMorty />} />
        <Route path="/:id" element={<MasInfo />} />
      </Routes>
    </View>
  );
};

export default Main;

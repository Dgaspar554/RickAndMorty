import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.textprimary,
  },
  colorSecondary: {
    color: theme.colors.textsecondary,
  },
  bold: {
    fontSize: theme.fontSizes.bold,
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  subtitle: {
    fontSize: theme.fontSizes.subtitle,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.subtitle,
  },
  itemtext: {
    fontSize: theme.fontSizes.subtitle,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyledText({
  item,
  align,
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    align == "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontWeight === "bold" && styles.bold,
    fontSize === "subheading" && styles.subheading,
    item === "subtitle" && styles.subtitle,
    item === "itemtext" && styles.itemtext,
    fontSize === "item" && styles.subtitle,
    style,
  ];
  return <Text style={textStyles}>{children}</Text>;
}

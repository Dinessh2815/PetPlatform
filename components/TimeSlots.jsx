import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TimeSlots = ({
  aM,
  property1Variant2Position,
  property1Variant2BackgroundColor,
  property1Variant2Width,
  property1Variant2Height,
  property1Variant2MarginLeft,
  aMColor,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Variant2Position),
      ...getStyleValue("backgroundColor", property1Variant2BackgroundColor),
      ...getStyleValue("width", property1Variant2Width),
      ...getStyleValue("height", property1Variant2Height),
      ...getStyleValue("marginLeft", property1Variant2MarginLeft),
    };
  }, [
    property1Variant2Position,
    property1Variant2BackgroundColor,
    property1Variant2Width,
    property1Variant2Height,
    property1Variant2MarginLeft,
  ]);

  const aMStyle = useMemo(() => {
    return {
      ...getStyleValue("color", aMColor),
    };
  }, [aMColor]);

  return (
    <View style={[styles.property1variant2, property1Variant2Style]}>
      <Text style={[styles.am, aMStyle]}>{aM}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  am: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",

  },
  property1variant2: {
    borderRadius: Border.br_167xl,
    backgroundColor: Color.colorRoyalblue_300,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_300,
    borderWidth: 2,
    width: 122,
    height: 40,
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: Padding.p_3xs,
    margin:3
  },
});

export default TimeSlots;

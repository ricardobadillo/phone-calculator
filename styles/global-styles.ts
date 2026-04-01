import { StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    fontWeight: "400",
    textAlign: "right",
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    fontWeight: "300",
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    height: 80,
    justifyContent: "center",
    marginHorizontal: 10,
    width: 80,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontSize: 30,
    fontFamily: "SpaceMono",
    fontWeight: 300,
    padding: 10,
    textAlign: "center",
  },
});

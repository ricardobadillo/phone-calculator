import { Pressable, Text } from "react-native";

import { selectionAsync } from "expo-haptics";

import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";

interface Props {
  blackText?: boolean;
  color?: string;
  doubleSize?: boolean;
  label: string;
  onPress: () => void;
}

export default function CalculatorButton({
  blackText = false,
  color = Colors.darkGray,
  doubleSize = false,
  label,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => {
        selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "#000000" : "#FFFFFF",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

import { Text, TextProps } from "react-native";

import { globalStyles } from "@/styles/global-styles";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

export default function ThemeText({ children, variant, ...props }: Props) {
  return (
    <Text
      style={[
        { color: "#FFFFFF", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  );
}

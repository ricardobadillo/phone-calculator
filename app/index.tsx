import { View } from "react-native";

import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";

import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";

export default function CalculatorApp() {
  const {
    formula,
    prevNumber,
    addOperation,
    buildNumber,
    calculateResult,
    clean,
    deleteLast,
    divideOperation,
    multiplyOperation,
    substractOperation,
    toggleSign,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingBottom: 20, paddingHorizontal: 30 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"></ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          blackText
          color={Colors.lightGray}
          label="C"
          onPress={clean}
        />

        <CalculatorButton
          blackText
          color={Colors.lightGray}
          label="+/-"
          onPress={toggleSign}
        />

        <CalculatorButton
          blackText
          color={Colors.lightGray}
          label="del"
          onPress={deleteLast}
        />

        <CalculatorButton
          label="/"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          color={Colors.darkGray}
          label="7"
          onPress={() => buildNumber("7")}
        />

        <CalculatorButton
          color={Colors.darkGray}
          label="8"
          onPress={() => buildNumber("8")}
        />

        <CalculatorButton
          color={Colors.darkGray}
          label="9"
          onPress={() => buildNumber("9")}
        />

        <CalculatorButton
          label="*"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          color={Colors.darkGray}
          label="4"
          onPress={() => buildNumber("4")}
        />

        <CalculatorButton
          color={Colors.darkGray}
          label="5"
          onPress={() => buildNumber("5")}
        />

        <CalculatorButton
          color={Colors.darkGray}
          label="6"
          onPress={() => buildNumber("6")}
        />

        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={substractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          color={Colors.darkGray}
          label="1"
          onPress={() => buildNumber("1")}
        />

        <CalculatorButton
          color={Colors.darkGray}
          label="2"
          onPress={() => buildNumber("2")}
        />

        <CalculatorButton
          color={Colors.darkGray}
          label="3"
          onPress={() => buildNumber("3")}
        />

        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          doubleSize
          color={Colors.darkGray}
          label="0"
          onPress={() => buildNumber("0")}
        />

        <CalculatorButton
          color={Colors.darkGray}
          label="."
          onPress={() => buildNumber(".")}
        />

        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
}

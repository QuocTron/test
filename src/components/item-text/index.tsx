import { View, Text } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./styles";
import { COLORS } from "../../config";
export type Props = {
  text: string;
  dark?: boolean;
};

const ItemText: React.FC<Props> = ({ text, dark }) => {
  return (
    <View style={[styles.instructionItem]}>
      <AntDesign
        name="checkcircleo"
        size={19}
        color={dark ? COLORS.white : COLORS.button}
      />
      <Text
        style={[
          styles.instructionItemText,
          dark && styles.instructionItemTextDark,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};
export default React.memo(ItemText);

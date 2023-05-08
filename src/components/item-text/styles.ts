import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
  instructionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  instructionItemTextDark: {
    color: COLORS.white,
  },
  instructionItemText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default styles;

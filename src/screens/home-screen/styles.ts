import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  layout: {},
  button: {
    backgroundColor: COLORS.button,
    paddingHorizontal: 7,
    paddingVertical: 16,
    marginHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {},
  text: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;

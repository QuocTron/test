import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  header: {
    width: "100%",
  },
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  infoAccount: {
    width: "100%",
  },
  bodyInfoAccount: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
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

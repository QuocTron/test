import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.background,
  },
  header: {},
  containerDarkMode: {
    backgroundColor: COLORS.backgroundDark,
  },

  iconClose: {},
  iconCloseDark: {},
  darkMode: {},
  content: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  notify: {
    marginTop: 15,
    justifyContent: "center",
  },
  notifyText: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: "700",
  },
  notifyTextDarkMode: {
    color: COLORS.white,
  },
  instruction: {
    marginTop: 24,
  },
  instructionText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 8,
  },
  instructionListItems: {
    gap: 10,
  },

  footer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: COLORS.button,
    marginHorizontal: 16,
    marginBottom: 42,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  iconReLoad: {
    fontWeight: "600",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 14,
  },
});

export default styles;

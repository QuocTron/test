import { COLORS } from "@config/theme";
import { getSize } from "@hooks/useResponsive";
import { StyleSheet } from "react-native";
console.log(getSize(56));

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: getSize(56),
    backgroundColor: COLORS.white,
    maxHeight: getSize(56),
    alignItems: "center",
  },
  iconHeader: {
    width: 20,
  },
  contentHeader: {},
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },
  iconClose: {},
  iconCloseDark: {},
  darkMode: {},
});

export default styles;

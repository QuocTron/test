import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const styles = StyleSheet.create({
  wrapperWifi: {
    overflow: "hidden",
    borderColor: COLORS.icon,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  wrapperParent: {
    width: 192,
    height: 192,
    borderRadius: 192 / 2,
  },
  wrapperChild: {
    width: 128,
    height: 128,
    borderRadius: 192 / 2,
  },
  iconWifi: {
    backgroundColor: COLORS.icon,
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
  },
});

export default styles;

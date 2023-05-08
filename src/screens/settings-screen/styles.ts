import { StyleSheet } from "react-native";
import { COLORS } from "../../config";
import { getSize } from "@hooks/useResponsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    width: "100%",
  },
  body: {
    flex: 1,
    width: "100%",
  },
  category: {
    fontSize: getSize(14),
    fontWeight: "400",
    color: COLORS.descInfoAcc,
    paddingLeft: getSize(16),
    marginTop: getSize(24),
  },
  infoAccount: {
    width: "100%",
  },
  bodyInfoAccount: {
    flex: 1,
    width: "100%",
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

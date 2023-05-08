import { COLORS } from "@config/theme";
import { getSize } from "@hooks/useResponsive";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: getSize(16),
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    gap: getSize(10),
  },
  left: {
    flexDirection: "row",
    gap: getSize(10),
    alignItems: "center",
  },

  icon: {},
  content: {},
  text: {
    fontSize: getSize(16),
    fontWeight: "400",
  },
  desc: {
    fontSize: getSize(12),
    marginTop: getSize(6),
    fontWeight: "400",
    color: COLORS.descInfoAcc,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    paddingRight: getSize(25),
    paddingVertical: getSize(16),
  },
  moreIcon: {},
});

export default styles;

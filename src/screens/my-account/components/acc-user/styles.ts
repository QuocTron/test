import { COLORS } from "@config/theme";
import { getSize } from "@hooks/useResponsive";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: getSize(72),
    paddingVertical: getSize(12),
    paddingHorizontal: getSize(16),
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  infoUser: {
    flexDirection: "row",
    gap: getSize(12),
    alignItems: "center",
  },
  avatar: {
    width: getSize(48),
    height: getSize(48),
  },
  infoDetail: {
    gap: getSize(2),
  },
  name: {
    color: COLORS.text,
    fontWeight: "900",
    fontSize: getSize(20),
  },
  job: {
    color: COLORS.border,
    fontSize: getSize(14),
  },

  avatarImg: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});

export default styles;

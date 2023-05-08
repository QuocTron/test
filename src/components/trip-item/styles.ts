import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

import { getSize } from "@hooks/useResponsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: getSize(12),
    padding: getSize(12),
    backgroundColor: COLORS.backgroundItem,
    borderWidth: getSize(2),
    borderColor: COLORS.border,
    marginBottom: getSize(16),
    marginHorizontal: getSize(16),
  },
  containerTop: {
    borderBottomColor: COLORS.border,
    borderBottomWidth: getSize(2),
    padding: getSize(12),
  },
  title: {},
  titleText: {
    color: COLORS.text,
    fontSize: getSize(16),
    fontWeight: "700",
  },
  containerBody: {},
  content: {},
  contentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: getSize(12),
  },
  contentItemKey: {
    flexDirection: "row",
    gap: getSize(8),
    alignItems: "center",
  },
  contentItemText: {},
  contentItemValue: {},
  contentItemValueText: {
    color: COLORS.text,
    fontSize: getSize(16),
    fontWeight: "400",
  },
});

export default styles;

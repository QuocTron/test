import { StyleSheet } from "react-native";
import { COLORS } from "../../config";
import { getSize } from "../../hooks";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerList: {
    borderLeftColor: COLORS.colorTextHeader,
    borderLeftWidth: 5,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    paddingLeft: 10,
    marginVertical: 17,
  },
  headerListText: {
    fontSize: getSize(24),
    fontWeight: "700",
    color: COLORS.colorTextHeader,
  },
});

export default styles;

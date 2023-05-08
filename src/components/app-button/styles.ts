import { getSize } from "@hooks/useResponsive";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#0074E2",
    height: getSize(6),

    marginHorizontal: 16,
    marginBottom: 42,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  icon: {
    fontWeight: "600",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: getSize(2),
  },
});

export default styles;

import { COLORS } from "@config/theme";
import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SwitchButton } from "..";
import styles from "./styles";

interface Props {
  headerTile?: React.ReactNode;
  useDarkMode?: boolean;
  navigation?: any;
}

const Header: React.FC<Props> = ({
  headerTile,
  useDarkMode = false,
  navigation,
}) => {
  const renderHeader = useMemo(() => {
    switch (typeof headerTile) {
      case "string":
        return <Text style={styles.headerText}>{headerTile}</Text>;
      case "object":
        return headerTile;
      default:
        return <Text style={styles.headerText}>{headerTile}</Text>;
    }
  }, [headerTile]);
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[styles.iconClose]}
        onPress={() => navigation.goBack()}
      >
        <AntDesign
          name="closecircleo"
          size={19}
          color={!true ? COLORS.text : COLORS.text}
        />
      </TouchableOpacity>
      {headerTile && <View style={styles.contentHeader}>{renderHeader}</View>}
      <View style={styles.darkMode}>
        {useDarkMode && <SwitchButton isChecked={false} />}
      </View>
    </View>
  );
};

export default Header;

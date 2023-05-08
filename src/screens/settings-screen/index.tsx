import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { AppText, ItemInfoAccount } from "@components/index";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getSize } from "@hooks/useResponsive";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodyInfoAccount}>
          <AppText style={styles.category} children="Notification" />
          <ItemInfoAccount content="Trip" useSwitch moreMenu={false} />
          <ItemInfoAccount content="Message" useSwitch moreMenu={false} />
          <AppText style={styles.category} children="Appearance" />
          <ItemInfoAccount content="Font Size" description="Default" />
          <ItemInfoAccount content="Theme" description="Use system setting" />
        </View>
      </View>
    </View>
  );
};

export default Settings;

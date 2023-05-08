import { View } from "react-native";
import React, { useCallback } from "react";

import styles from "./styles";

import Header from "@components/header";
import AccUser from "./components/acc-user";
import { ItemInfoAccount } from "../../components";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getSize } from "@hooks/useResponsive";

const MyAccount = ({ navigation }: { navigation: any }) => {
  const handleChangeScreen = useCallback((nameScreen = "TripHistory") => {
    navigation.navigate(nameScreen);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header headerTile={"My Account"} navigation={navigation} />
      </View>
      <View style={styles.body}>
        <View style={styles.infoAccount}>
          <AccUser />
        </View>
        <View style={styles.bodyInfoAccount}>
          <ItemInfoAccount
            icon={<AntDesign name="clockcircleo" size={getSize(19)} />}
            content="Trip History"
            onPress={() => handleChangeScreen("TripHistory")}
          />
          <ItemInfoAccount
            icon={<AntDesign name="setting" size={getSize(19)} />}
            content="Settings"
            onPress={() => handleChangeScreen("Settings")}
          />
          <ItemInfoAccount
            icon={<AntDesign name="info" size={getSize(19)} />}
            content="About"
          />
          <ItemInfoAccount
            icon={<MaterialIcons name="logout" size={getSize(19)} />}
            content="Logout"
            moreMenu={false}
          />
        </View>
      </View>
    </View>
  );
};

export default MyAccount;

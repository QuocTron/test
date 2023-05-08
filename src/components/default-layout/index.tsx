import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

import styles from "./styles";
import DisconnectedWifiScreen from "@screens/disconnected-wifi-screen";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  const [isDisconnectedWifi, setIsDisconnected] = useState(false);
  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsDisconnected(state.isConnected || true);
    });

    // Unsubscribe
    return () => unsubscribe();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        {isDisconnectedWifi ? (
          children
        ) : (
          <DisconnectedWifiScreen
            isDisconnected={isDisconnectedWifi}
            setIsDisconnected={() => setIsDisconnected}
          />
        )}
      </View>
    </View>
  );
};

export default React.memo(DefaultLayout);

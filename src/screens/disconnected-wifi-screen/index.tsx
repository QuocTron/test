import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./styles";

import {
  Button,
  DisconnectedWifi,
  ItemText,
  SwitchButton,
} from "@components/index";
import { COLORS } from "../../config";
import { useAppDispatch } from "../../hooks";
import { toggleDarkMode } from "../../redux/slices/dark-mode-slices";

interface Props {
  isDisconnected: boolean;
  setIsDisconnected: () => void;
}

const DisconnectedWifiScreen: React.FC<Props> = ({
  isDisconnected,
  setIsDisconnected,
}) => {
  const dispatch = useAppDispatch();
  const dark = true;
  const handleChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <SafeAreaView style={[styles.container, dark && styles.containerDarkMode]}>
      <View style={styles.header}>
        <View style={[styles.iconClose]}>
          <AntDesign
            name="closecircleo"
            size={19}
            color={!dark ? COLORS.iconClose : COLORS.white}
          />
        </View>
        <View style={styles.darkMode}>
          <SwitchButton isChecked={dark} onValueChange={handleChangeDarkMode} />
        </View>
      </View>
      <View style={styles.content}>
        <DisconnectedWifi />
        <View style={styles.notify}>
          <Text style={[styles.notifyText, dark && styles.notifyTextDarkMode]}>
            No internet connection!
          </Text>
        </View>
        <View style={styles.instruction}>
          <Text
            style={[styles.instructionText, dark && styles.notifyTextDarkMode]}
          >
            Please follow the instructions bellow:
          </Text>
          <View style={styles.instructionListItems}>
            <ItemText text="Check your model and router" dark={dark} />
            <ItemText text="Tap on Retry button" dark={dark} />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          leftIcon={
            <AntDesign name={"reload1"} size={24} color={COLORS.white} />
          }
          title="Retry"
        />
      </View>
    </SafeAreaView>
  );
};

export default DisconnectedWifiScreen;

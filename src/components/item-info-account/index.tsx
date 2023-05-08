import { View, Text, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import AppText from "@components/app-text";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getSize } from "@hooks/useResponsive";
import { COLORS } from "@config/theme";

interface Props {
  icon?: React.ReactNode;
  content: string;
  moreMenu?: boolean;
  description?: string;
  onPress?: () => void;
  onChangeSwitch?: () => void;
  useSwitch?: boolean;
  initialValueSwitch?: boolean;
}
const ItemInfoAccount: React.FC<Props> = ({
  icon,
  content,
  moreMenu = true,
  useSwitch = false,
  description,
  initialValueSwitch = false,
  onPress = () => {},
  onChangeSwitch = () => {},
}) => {
  const [isEnabled, setIsEnabled] = useState(initialValueSwitch);
  const handleChangeSwitch = () => {
    setIsEnabled(!isEnabled);
    onChangeSwitch();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && (
        <View style={styles.left}>
          <View style={styles.icon}>{icon}</View>
        </View>
      )}

      <View style={styles.right}>
        <View style={styles.content}>
          <AppText style={styles.text}>{content}</AppText>
          {description && (
            <AppText style={styles.desc} children={description} />
          )}
        </View>
        {moreMenu && (
          <View style={styles.moreIcon}>
            <AntDesign name="right" size={getSize(14)} color={COLORS.text} />
          </View>
        )}
        {useSwitch && (
          <Switch
            onValueChange={handleChangeSwitch}
            trackColor={{
              true: COLORS.colorSwitchEnabled,
              false: COLORS.colorSwitchDisenabled,
            }}
            thumbColor={isEnabled ? COLORS.white : COLORS.white}
            value={isEnabled}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ItemInfoAccount);

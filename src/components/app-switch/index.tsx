import React from "react";
import { Switch } from "react-native";
import { COLORS } from "../../config";

type Props = {
  stylesProps?: [];
  onValueChange?: () => void;
  isChecked: boolean;
};
const SwitchButton: React.FC<Props> = ({
  stylesProps = [],
  onValueChange = () => {},
  isChecked,
}) => {
  return (
    <Switch
      trackColor={{ false: COLORS.backgroundDark, true: COLORS.white }}
      thumbColor={isChecked ? COLORS.icon : COLORS.background}
      ios_backgroundColor={COLORS.iosBackgroundSwitch}
      onValueChange={onValueChange}
      value={isChecked}
      style={[...stylesProps]}
    />
  );
};

export default React.memo(SwitchButton);

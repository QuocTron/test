import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import HomeStackScreen from "./home-navigation";
import MyAccountStackScreen from "./my-account-navigation";
import { COLORS } from "@config/theme";
import { getSize } from "@hooks/useResponsive";

const Stack = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home";
              break;
            case "MyAccount":
              iconName = focused ? "user" : "user";
              break;

            default:
              iconName = "";
              break;
          }
          return <Icon name={iconName} />;
        },
        tabBarActiveTintColor: COLORS.button,
        tabBarInactiveTintColor: COLORS.button,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          height: getSize(65),
          paddingBottom: getSize(10),
        },
        tabBarLabelStyle: {
          fontSize: getSize(13),
        },
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={HomeStackScreen} />
      <Stack.Screen name="MyAccount" component={MyAccountStackScreen} />
    </Stack.Navigator>
  );
};

export default MyTabs;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccount from "@screens/my-account";
import { Settings } from "@screens/index";
import TripHistory from "@screens/trip-history-screen";

const MyAccountStack = createNativeStackNavigator();

const MyAccountStackScreen = () => {
  return (
    <MyAccountStack.Navigator initialRouteName="MyAccountScreen">
      <MyAccountStack.Screen
        name="MyAccountScreen"
        component={MyAccount}
        options={{ headerShown: false }}
      />
      <MyAccountStack.Screen name="TripHistory" component={TripHistory} />
      <MyAccountStack.Screen name="Settings" component={Settings} />
    </MyAccountStack.Navigator>
  );
};

export default MyAccountStackScreen;

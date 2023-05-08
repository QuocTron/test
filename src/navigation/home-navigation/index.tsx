import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccount from "@screens/my-account";
import { Home, TripHistory } from "../../screens";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={Home} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;

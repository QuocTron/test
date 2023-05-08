import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";

import MyTabs from "./navigation";
import store from "./redux/store";
import DefaultLayout from "./components";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <DefaultLayout>
          <MyTabs />
        </DefaultLayout>
      </Provider>
    </NavigationContainer>
  );
}

export default App;

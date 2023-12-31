import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import * as firebase from "firebase"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/Register"
import {createStackNavigator} from "@react-navigation/stack";
import { firebaseConfig } from "./config";

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}else{
  firebase.app()
}

const Stack=createStackNavigator()
const StackNav=()=>{
  return(
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown:false,gestureEnabled:false,
    }}>
<Stack.Screen name="LoginScreen" component={"LoginScreen"}>

</Stack.Screen>
<Stack.Screen name="RegisterScreen" component={"RegisterScreen"}>

</Stack.Screen>
<Stack.Screen name="Dashboard" component={"DrawerNavigator"}>
  
</Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
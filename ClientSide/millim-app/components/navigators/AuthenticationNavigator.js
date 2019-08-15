import {createSwitchNavigator} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";



export const AuthNavigator =  createSwitchNavigator({
    Login: LoginScreen
},{
    initialRouteName: 'Login',
    backBehavior: 'none'
});
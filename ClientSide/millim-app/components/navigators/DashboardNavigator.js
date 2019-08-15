import {createStackNavigator} from "react-navigation";
import DashboardMainScreen from "../screens/DashboardMainScreen";



export const DashboardNavigator =  createStackNavigator({
    Main: DashboardMainScreen
},{
    initialRouteName: 'Main'
});
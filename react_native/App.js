import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { ArticleScreen } from './screens/ArticleScreen';
import { ClipScreen } from './screens/ClipScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FrontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { store } from './store'
import { Provider } from 'react-redux'
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const screenOption = ({ route }) => ({
  tabBarIcon: ({color, size }) => {
    let iconName;

    if (route.name === 'HomeTab') {
      return <Ionicons name="home" size={size} color={color}/>
    } else if (route.name === 'ClipTab') {
      return <Ionicons name="bookmark" size={size} color={color}/>
    }
  },
})

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
}
const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clpe" component={ClipScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false,title: "Home" }}/>
        <Tab.Screen name="ClipTab" component={ClipStack} options={{ headerShown: false,title: "Clip" }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}


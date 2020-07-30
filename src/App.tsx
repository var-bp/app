import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DrawerActions} from '@react-navigation/native'; // https://github.com/react-navigation/react-navigation/issues/6790
import {createStackNavigator} from '@react-navigation/stack';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';
import {authFetched, resetState} from './store/auth/slice';
import {State} from './store/types';
// import {IS_DEVELOPMENT} from '../env.json';
import ContactsScreen from './screens/Contacts';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import SettingsScreen from './screens/Settings';
import FeedScreen from './screens/Feed';
import DetailsScreen from './screens/Details';
import ProfileScreen from './screens/Profile';
import ForgotPasswordScreen from './screens/ForgotPassword';
import NotificationsScreen from './screens/Notifications';
import FavoritesScreen from './screens/Favorites';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Feed = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={FeedScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const Profile = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
  </Stack.Navigator>
);

const Favorites = () => (
  <Stack.Navigator>
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const Home = () => (
  <Tab.Navigator tabBarOptions={{tabStyle: {justifyContent: 'center'}}}>
    <Tab.Screen name="Home" component={Feed} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const App = () => {
  const isSignedIn = useSelector((state: State) => state.auth.data);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authFetched());
  // }, [dispatch]);

  const handleSignOut = ({navigation}: DrawerContentComponentProps) => () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    dispatch(resetState());
  };

  const drawerContent = (props: DrawerContentComponentProps) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Sign out" onPress={handleSignOut(props)} />
      </DrawerContentScrollView>
    );
  };

  // FIXME: storybook for android
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        {isSignedIn ? (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={drawerContent}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Contacts" component={ContactsScreen} />
            {/* {IS_DEVELOPMENT && (
              <Drawer.Screen
                name="Storybook"
                component={require('../storybook').default}
              />
            )} */}
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

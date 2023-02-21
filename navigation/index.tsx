/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  Alert,
  ColorSchemeName,
  Pressable,
  ToastAndroid,
  View,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import WritePost from "../screens/WritePost";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import PublishScreen from "../screens/PublishScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Post" component={WritePost} />
        <Stack.Screen
          name="Publish Settings"
          component={PublishScreen}
          options={{
            headerRight: () => (
              <Pressable
                onPress={() =>
                  ToastAndroid.show("Sending Post...", ToastAndroid.SHORT)
                }
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Ionicons
                  name="send"
                  size={25}
                  color="white"
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "My Feed",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={() => navigation.navigate("Post")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <EvilIcons
                  name="pencil"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  ToastAndroid.show("Feed Refreshed", ToastAndroid.SHORT);
                }}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Feather
                  name="refresh-cw"
                  size={20}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "../screens/Auth";
import { PostDetails, Posts } from "../screens/Home";
import { useAuthStore } from "../store";

const Stack = createNativeStackNavigator()


const Navigation = () => {
    const { token } = useAuthStore()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    token ?
                        <>
                            <Stack.Screen name="Posts" component={Posts} />
                            <Stack.Screen name="PostDetails" component={PostDetails} />
                        </> :
                        <Stack.Screen name="Login" component={Login} />
                }


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

const styles = StyleSheet.create({});

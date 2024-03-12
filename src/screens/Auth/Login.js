import { ActivityIndicator, Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useLoginMutation } from "../../hooks/auth";

const Login = () => {
    const { isPending, mutate } = useLoginMutation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handelOnLoginPress = () => {
        mutate({ email, password })
    }


    return (
        <View style={styles.container} >
            <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email" />
            <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="Password" secureTextEntry />
            {isPending ?
                <ActivityIndicator /> :
                <Button title="Login" onPress={handelOnLoginPress} />
            }
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        alignContent: 'center',
        backgroundColor: 'white'
    },
    input: {
        alignSelf: 'center',
        width: '90%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        marginVertical: 20

    }
});

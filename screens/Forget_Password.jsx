import {router} from "expo-router";
import React, {useState} from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    Pressable,
    StyleSheet, Alert,
} from "react-native";
import {reset} from "../firebase/auth";

const Forget_Password = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handlePress = async () => {
        try {
            await reset(email);
            console.log('Password reset');
            Alert.alert('Email for resetting password sent');
        } catch (error) {
            console.log('error', JSON.stringify(error));
            setError(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
            />
            <Button title="Reset" onPress={handlePress}/>
            <Pressable onPress={() => router.navigate('/account/login')}><Text>Login</Text></Pressable>
            <Pressable onPress={() => router.navigate('/account/login')}><Text>Register</Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 15,
    },
});

export default Forget_Password;
import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3 style={styles.header}>Sign up for Tracker</Text>
            </Spacer>
            <Spacer/>
            <Spacer>
                <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
            </Spacer>
            <Spacer>
                <Input label="Password" value={password} onChangeText={setPassword}
                       autoCapitalize="none" autoCorrect={false} secureTextEntry/>
            </Spacer>
            <Spacer>
                <Button title="Sign up"/>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 50
    },
    header: {
        alignSelf: "center",
    }
});

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SignupScreen

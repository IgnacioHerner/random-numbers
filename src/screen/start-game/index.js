import React, {useState}from "react";
import { styles } from "./styles";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Card, Input } from "../../components";
import colors from "../../constants/colors";

const StartGame = () => {

    const [number, setNumber] = useState('')

    const onHandleChange = () => {
        setNumber(value.replace(/[^0-9]/g, ''))
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Let's Start</Text>
                <Card style={styles.inputContainer}>
                        <Text style={styles.label}>Select a number</Text>
                        <Input 
                            placeholder="0" 
                            style={styles.input}
                            maxLength={2}
                            keyboardType="number-pad"
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={onHandleChange}
                            value={number}
                        />
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Reset"
                            onPress={() => null}
                            color={colors.secondary}
                        />
                        <Button 
                            title="Confirm"
                            onPress={() => null}
                            color={colors.primary}
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;
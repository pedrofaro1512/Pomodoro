import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const options = ["Pomodoro", "Short Break", "Long Break"];

const Header = (props) => {
    const { currenTime, setCurrentTime, setTime } = props;

    function handlePress(index) {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60)
    }

  return (
    <View style={{ flexDirection: "row" }}>
        {options.map((item, index) => (
            <TouchableOpacity 
                key={index}
                onPress={() => handlePress(index)}
                style={styles.itemStyle}
            >
                <Text style={{ fontWeight: "bold" }}>{item}</Text>
            </TouchableOpacity>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    itemStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
        alignItems: "center",
        borderRadius: 3,
        borderColor: "white",
        marginVertical: 20,
    }
})

export default Header;
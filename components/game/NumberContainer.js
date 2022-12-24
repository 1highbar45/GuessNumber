import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const devideWidth = Dimensions.get('window').width;

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: devideWidth < 380 ? 12 : 24,
        margin:  devideWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize:  devideWidth < 380 ? 28 : 36,
        // fontWeight: 'bold',
        fontFamily: 'open-sans-bold'
    },
});
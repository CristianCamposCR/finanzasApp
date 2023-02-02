import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Image, Button } from '@rneui/base'

export default function UserGuest(props) {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.mx}
                centerContent={true}>
                <Image
                    //source={{uri:''}} para poner una img directo de internet
                    source={require("../../../../assets/presupuesto.png")}
                    resizeMode="contain"
                    style={styles.img}
                />
                <Text style={styles.title}>Bienvenido a MiCochino</Text>
                <Text style={styles.description}>¿Te gustaria ahorrar dinero? Nosotros te ayudamos, crea o inicia sesin en nuestra app
                    y descubre la mejor manera de ahorrar tu dinero.
                </Text>
                <View style={styles.viewBtnContainer}>
                    <Button
                        title='Iniciar sesión'
                        icon={{
                            name: 'login',
                            type: 'material-community',
                            size: 15,
                            color: 'white'
                        }}
                        buttonStyle={styles.btn}
                        containerStyle={styles.btnContainer}
                        onPress={()=> navigation.navigate('profileStack')}
                    />
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%',
    },
    mx: {
        marginLeft: 32,
        marginRight: 32
    },
    img: {
        width: "100%",
        height: 150,
        marginTop: 150
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 16,
    },
    description:{
        textAlign: 'center',
        marginBottom: 16
    },
    viewBtnContainer: {
        flex: 1,
        alignItems: 'center',

    },
    btn: {
        backgroundColor: 'tomato',
        color: '#fff'
    },
    btnContainer: {
        width:"70%"        
    }
})
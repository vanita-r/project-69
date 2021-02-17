import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions'; 
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
    getCameraPermission()
    handleBarCodeScanner()
    render(){
        const hasCameraPermission=this.state.hasCameraPermission
        const buttonState=this.state.buttonState
        const scanned=this.state.scanned
        if (buttonState==='clicked') {
            return(
                <BarCodeScanner onBarCodeScanned={scanned? undefined:this.handleBarcodeScan}
                    style={StyleSheet.absoluteFillObject}
                />
            )
        }
        return(
            <View style={styles.container}>
            <View>            
                <Image source={require('../assets/camera.jpg')} style={{width: 200, height: 200}}/>
            </View>
            <View>
                <TouchableOpacity onPress={this.getCameraPermission} style={styles.scanButton} title = "Bar Code Scanner">
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
            </View>
        )


    }


}

const styles = StyleSheet.create({ 
    container:{ flex:1, justifyContent:'center', alignItems:'center' }, 
    scanButton:{ backgroundColor:'aqua', padding:10, margin:10 },
    buttonText:{ backgroundColor:'blue', padding:10, margin:10 }, 

})
import React, {Component} from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    DeviceInfo
} from 'react-native';

import{
    Container,
    Content,
    View,
    Text,

} from 'native-base'

import Colors from '../styles/colors'
import { fontStyle } from '../styles/fonts/FontStyle'
import { Actions } from 'react-native-router-flux';

import moment from 'moment';
import 'moment/min/moment-with-locales';

let idLocale = require('moment/locale/id');

export default class UserItem extends Component{

    componentDidMount(){
        // const deviceLocale = DeviceInfo.getDeviceLocale()
        // moment.locale([deviceLocale, 'id'])
        moment.locale('id', idLocale);
    }

    render(){
        
        
        let { nama , kegiatan} = this.props;
        // let hari = moment(kegiatan[0].date).format('dddd');
        // let tanggal = moment(kegiatan[0].date).format('LL');

        return(
        
            <View>

                <TouchableOpacity
                    style = {styles.content}
                    onPress = {() => Actions.push('list_kegiatan', {data: this.props})}
                >
                    <Text style={fontStyle.standard}>
                        {nama}
                    </Text>
                </TouchableOpacity>
            </View>
                
        )
    }
}

const styles = StyleSheet.create({

    content:{
        borderBottomColor: Colors.darkBlue,
        borderBottomWidth: 0.5,
        padding: 10,
        marginTop: 10
    }
})
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
    Card,
    CardItem,
    Icon,
    Body,
    Right
} from 'native-base'

import Colors from '../styles/colors'
import { fontStyle } from '../styles/fonts/FontStyle'
import { Actions } from 'react-native-router-flux';

import moment from 'moment';
import 'moment/min/moment-with-locales';

let idLocale = require('moment/locale/id');

export default class KegiatanItem extends Component{

    componentDidMount(){
        // const deviceLocale = DeviceInfo.getDeviceLocale()
        // moment.locale([deviceLocale, 'id'])
        moment.locale('id', idLocale);
        // alert(this.props.endDate)
    }

    render(){
        
        
        let { nama_kegiatan , date, endDate} = this.props;
        let jam_mulai = moment(date).format('h:mm');
        let jam_berakhir = (endDate != null)?moment(endDate).format('h:mm'):null;


        return(
        
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            {nama_kegiatan}
                        </Text>
                    </Body>
                    <Right>
                        
                        <Text style={[fontStyle.size10, {color: Colors.gray}]}>
                            <Icon name='md-time' style={{color:Colors.darkBlue, fontSize:10}}/>
                            {jam_mulai}{(jam_berakhir != null)? ' - '+jam_berakhir:null}
                        </Text>
                    </Right>
                </CardItem>
        
            </Card>
                
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
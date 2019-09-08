import React, {Component} from 'react';

import {
    FlatList,
    StyleSheet,
    Modal,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import{
    Container,
    Content,
    View,
    Text,
    Fab,
    Icon,
    Input,
} from 'native-base'

import KegiatanItem from '../components/KegiatanItem';
import { fontStyle } from '../styles/fonts/FontStyle';
import Colors from '../styles/colors';

import { inject, observer } from 'mobx-react/native';

import moment from 'moment';
import 'moment/min/moment-with-locales';

let idLocale = require('moment/locale/id');

export default class KegiatanScreen extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        moment.locale('id', idLocale);
    }

    render(){
        let { data } = this.props;

        let hari = moment(data.kegiatan[0].date).format('dddd');
        let tanggal = moment(data.kegiatan[0].date).format('LL');

        return(
            <Container style={styles.container}>
                <Text style={[fontStyle.title, {color: Colors.black}]}>
                    Daftar Kegiatan - {data.nama}
                </Text>
                <Text style={fontStyle.standard}>
                    {hari}, {tanggal}
                </Text>

                <Content style={styles.content}>
                    <FlatList
                        // data = {this.state.users}
                        data = {data.kegiatan}
                        extraData = {this.state}
                        renderItem = {({item, index}) => (
                            <KegiatanItem 
                                {...item}
                                // index = {index}
                                endDate = {(data.kegiatan[index+1] != null)?data.kegiatan[index+1].date:null}
                            />
                            // <Text>{index} {item.name}</Text>
                        )}

                        keyExtractor = {(item, index) => index.toString()}
                    />
                </Content>

          
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        padding: 20
    },
    content:{
        marginTop: 10
    }
})
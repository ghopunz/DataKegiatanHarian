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
    Item,
} from 'native-base'

import UserItem from '../components/UserItem';
import { fontStyle } from '../styles/fonts/FontStyle';
import Colors from '../styles/colors';

import { inject, observer } from 'mobx-react/native';

const heightDevice = Dimensions.get('window').height;
const widthDevice = Dimensions.get('window').width;


@inject('store')

@observer
export default class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            namaPeserta: '',
            kegiatanPeserta: '',
            // users:[
            //     {nama:'Shaka', kegiatan: 'bertapa'},
            //     {nama:'Aiolos', kegiatan: 'berpetualangan'},
            //     {nama:'Athena', kegiatan: 'menjaga kuil'},
            // ]

        }
    }

    setModalVisible(visible) {
		this.setState({modalVisible: visible});
    }

    renderModalAddUser(){
		let { store } = this.props;

		return(
			<Modal
				animationType="slide"
				transparent={true}
				visible={this.state.modalVisible}
				onRequestClose={() => {
					// Alert.alert('Modal has been closed.');
				}}>
				<View style={{height: heightDevice, width: widthDevice, backgroundColor:'#0006', justifyContent:'center'}}>
					<View style={{height: heightDevice * 0.4 + 33, width: widthDevice * 0.8, backgroundColor: Colors.white,  alignSelf:'center', borderRadius: 15}}>
						<Text style={[fontStyle.header, {color: Colors.darkBlue, textAlign:'center', paddingTop:10}]}>Tambah Kegiatan</Text>
						
						<View style={{left: - 20, top: -40, backgroundColor: Colors.white, justifyContent:'center', alignItems:'center', borderRadius:20, width: 40, height: 40,}}>


							<TouchableOpacity
								onPress={() => {
								    this.setModalVisible(!this.state.modalVisible);
								}}
								
							>
								<Icon name='md-close-circle' style={{color: Colors.darkBlue}}/>
							</TouchableOpacity>
						</View>

                        <Text style={[fontStyle.standard, {left: 10}]} >
                            Nama Peserta
                        </Text>
                        <Item rounded style={styles.textInput}>
                        
                            <Input 
                                returnKeyType='next'
                                autoCapitalize='none'
                                keyboardType='email-address' 
                                onSubmitEditing={() => this.refs.kegiatanInput._root.focus()} 
                                placeholder='Nama Peserta'
                                // style={{color: Colors.white}}
                                onChangeText={(text) => 
                                    {
                                        this.setState({namaPeserta:text})
                                        
                                    }
                                }
                            />
                        </Item>
						
						<Text style={[fontStyle.standard, {left: 10}]} >
                            Kegiatan
                        </Text>
                        <Item rounded style={styles.textInput}>
                            <Input 
                                ref='kegiatanInput'
                                returnKeyType='next'
                                autoCapitalize='none'
                                // keyboardType='email-address' 
                                placeholder='Kegiatan'
                                // style={{color: Colors.white}}
                                onChangeText={(text) => 
                                    {
                                        this.setState({kegiatanPeserta:text})
                                        
                                    }
                                }
                                // style = {styles.textInput}
                            />
                        </Item>
                        

                        <TouchableOpacity 
                        
                            onPress={() => this.addUser(this.state.namaPeserta, this.state.kegiatanPeserta, new Date())}
                            style={{height: '20%', backgroundColor: Colors.darkBlue, justifyContent:'center', alignItems:'center', borderBottomLeftRadius:15, borderBottomRightRadius:15, width: widthDevice * 0.8, marginTop: 20}}
                        >

                            <Text style={[fontStyle.header, {color: Colors.white}]}>Simpan</Text>
                        </TouchableOpacity>
						
					</View>
				</View>
			</Modal>
		)
	}
    
    addUser(nama, kegiatan, date){

        let { store } = this.props;

        store.userStore.addUser(nama, kegiatan, date);

        // this.state.users.push({nama:nama, kegiatan: kegiatan})
        this.setModalVisible(false);

        // alert(JSON.stringify(store.userStore.users))

    }

    render(){
        let { store } = this.props;


        return(
            <Container>
                <Text style={[fontStyle.title, {color: Colors.black, padding: 20}]}>
                    Daftar Peserta
                </Text>

                {this.renderModalAddUser()}
                <Content>
                    <FlatList
                        // data = {this.state.users}
                        data = {store.userStore.users}
                        extraData = {this.state}
                        renderItem = {({item, index}) => (
                            <UserItem 
                                {...item}
                                // index = {index}
                            />
                            // <Text>{index} {item.name}</Text>
                        )}

                        keyExtractor = {(item, index) => index.toString()}
                    />
                </Content>

                <Fab
                    
                    style={{ backgroundColor: Colors.darkBlue }}
                    position="bottomRight"
                    onPress={() => this.setModalVisible(true)}>
                    <Icon name="add" />
                    
                </Fab>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    content:{
        padding: 20
    },

    textInput:{
        backgroundColor: Colors.ligthGray,
        borderRadius:4,
        // marginTop:'5%',
        // marginTop:hp('2%'),
        borderColor:'transparent',
        height: 40,
        width: '90%',
        marginLeft: 10,
        marginTop:10,
    },
})
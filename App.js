/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  
  StatusBar,
} from 'react-native';

import { Provider as MobXProvider} from 'mobx-react';
import  * as Store from './src/stores';

import { Root, View, Toast } from 'native-base';

import Routers from './src/libs/Routers';

export default class App extends Component{

  constructor(props) {

    super(props);
  }

  render(){
    return(
      <Root>
        <StatusBar
						// backgroundColor='#2F418D'
          hidden
        />
        <MobXProvider store={Store}>
          <Routers />
        </MobXProvider>
      </Root>
    )
  }

}

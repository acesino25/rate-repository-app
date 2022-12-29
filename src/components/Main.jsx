import React from 'react'
import {Text, View} from 'react-native'
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Navigate, Route, Routes, matchRoutes } from 'react-router-native';
import StyledText from './StyledText';
import Login from '../pages/Login';

const Main = () => {
    return(
        <View style={{flexGrow:1, flex:1}}>
            <AppBar/>
            <Routes>
                <Route path='/' element={<RepositoryList />}>  
                </Route>
                <Route path='/signin' element={<Login/>}>
                    
                </Route>
                <Route path='/' element={<Navigate to ="/" />}/>
            </Routes>
            
        </View>
    )
}

export default Main
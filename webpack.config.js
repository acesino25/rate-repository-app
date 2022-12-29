// SUPUESTAMENTE SIN ESTO NO SE COMPILA EN WEB
const { create } = require('domain');
const path = require('path');
const createExpoWebPackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv){
    
    // AÑADIR UNA REGLA MÁS A EXPO
    const config = await createExpoWebPackConfigAsync(env, argv)

    // COMO WEB PACK POR DEFECTO EN EXPO NO COMPILA EL REACT
    // ROUTER NATIVE VAMOS A FORZAR A QUE LO COMPILE
    config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        include:[
            path.join(__dirname,'node_modules/react-router-native')
        ]
    })

    return config;
}
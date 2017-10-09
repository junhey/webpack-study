var path = require('path');
var baseConfig = {
    entry:{
        main:'./src/index.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve('./bulid')
    },
    devServer:{
        contentBase:'./src',
        histotyApiFallBack:true,
        inline:true
    },
    modules:{
        rules:[{
            test:'',
            use:[{loader:'style-loader'},{loader:'css-loader'},{loader:'less-loader'}],
            extends:/node_modules/
        },{

        }]
    }
}
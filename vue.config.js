module.exports = {
    //webpack配置
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints:false
        },
 
        //或者
 
        //警告 webpack 的性能提示
        performance: {
            hints:'warning',
            //入口起点的最大体积
            maxEntrypointSize: 5000000000,
            //生成文件的最大体积
            maxAssetSize: 3000000000,
            
            hints: 'error', 
            maxAssetSize: 500000000, // 整数类型（以字节为单位）
            maxEntrypointSize: 5000000000, // 整数类型（以字节为单位）
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    }
}
// —g.csdn.net/weixin_44001195/article/details/105944133

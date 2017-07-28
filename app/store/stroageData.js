import storageConfig from './AppStroageConfig'

global.storage = {
    //添加
    set: (key, data) => {
        // 使用key保存数据
        storageConfig.save({
            key: key,
            data: data,
            // 设为null,则不过期,这里会覆盖初始化的时效
            // expires: 1000 * 3600
        });
    },

    // 查询
    get: (key, callback) => {
        storageConfig.load({
            key: key,

            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            // autoSync: true,

            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
            syncInBackground: true,

            // 你还可以给sync方法传递额外的参数
            // syncParams: {
            //     extraFetchOptions: {
            //         // 各种参数
            //     },
            //     someFlag: true,
            // },
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            // 你只能在then这个方法内继续处理ret数据
            // 而不能在then以外处理
            // 也没有办法“变成”同步返回
            // 你也可以使用“看似”同步的async/await语法

            callback && callback(ret)

        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            console.warn(err.message);
            // switch (err.name) {
            //     case 'NotFoundError':
            //         // 更新
            //         this.setState({
            //             data:'数据为空'
            //         });
                    
            //         break;
            //     case 'ExpiredError':
            //         // TODO
            //         break;
            // }
        })
    },

    // 更新
    up: (key, data) => {
        // 重新存储即可
        storage.save({
            key: key,
            rawData: data,

            // 设为null,则不过期,这里会覆盖初始化的时效
            // expires: 1000 * 3600
        });
    },

    // 删除
    remove: (key) => {
        // 删除单个数据
        storage.remove({
            key: key
        });
    }
}

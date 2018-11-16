import axios from 'axios'

const ajax = (options) => {
    return new Promise((resolve, rejected) => {
        axios(options)
            .then(res => {
                resolve(res.data.data)          
            })
            .catch(err => {
                rejected(err)
                console.log('数据请求失败')
            })
    })
}

export default ajax
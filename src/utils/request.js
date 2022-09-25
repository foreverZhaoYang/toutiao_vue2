//封装带有请求根地址的axios对象
import axios from 'axios'
const request=axios.create({
    baseURL:'https://www.escook.cn'
})
export default request



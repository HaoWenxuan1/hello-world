import ajax from './ajax'
 
const BASE_URL = 'https://localhost:8080';
 
//请求方法
export const getHomeCasual = ()=>ajax(BASE_URL+ '/static/mock/mock.json');
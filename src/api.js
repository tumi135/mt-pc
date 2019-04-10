import axios from '@/axios'

var api = {
  recommendList(params) {
    return axios.get('/api/meituan/list/recommend.json',params)
  },
  menu() {
    return axios.get('/api/meituan/index/nav.json')
  },
  getResultProducts() {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProvinceList() {
    return axios.get('/api/meituan/city/province.json')
  },
  getPosition() {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  login(params) {
    return axios.get('/api/meituan/login',params)
  },
  register(params) {
    return axios.get('/api/meituan/register',params)
  },
  getDetail() {
    return axios.get('/api/meituan/product/detail.json')
  }
}

export default api

import { axios } from 'hooks/worker'

const url = `https://cors-anywhere.herokuapp.com/apis.data.go.kr/B551182/diseaseInfoService/getDissNameCodeList?_type=json&sickType=2&medTp=1&ServiceKey=${process.env.REACT_APP_API_KEY}`

interface Params {
  // pageNo: number
  searchText: string
}

interface DiseaseApi {
  response: {
    body: {
      items: {
        item: {
          sickCd: string
          sickNm: string
        }[]
      }
    }
  }
}

export const getDiseaseAPi = (params: Params) => {
  return axios.get<DiseaseApi>(`${url}`, { params })
}

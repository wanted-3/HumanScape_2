import { axios } from 'hooks/worker'

const url = `/B551182/diseaseInfoService/getDissNameCodeList?_type=json&sickType=1&medTp=2&numOfRows=10&ServiceKey=${process.env.REACT_APP_API_KEY}`

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
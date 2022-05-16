import { axios } from 'hooks/worker'

const url = `/B551182/diseaseInfoService/getDissNameCodeList?_type=json&sickType=1&medTp=2&ServiceKey=${process.env.REACT_APP_API_KEY}`

interface Params {
  // pageNo: number
  searchText: string
}

interface DeseaseApi {
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

export const getDeseaseAPi = (params: Params) => {
  return axios.get<DeseaseApi>(`${url}`, { params })
}

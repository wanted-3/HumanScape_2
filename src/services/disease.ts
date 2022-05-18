import { axios } from 'hooks/worker'

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'

const url = `${PROXY}/B551182/diseaseInfoService/getDissNameCodeList?_type=json&sickType=1&medTp=2&numOfRows=10&ServiceKey=${process.env.REACT_APP_API_KEY}`

interface Params {
  searchText: string
}

export interface IDiseaseItem {
  sickCd: string
  sickNm: string
}

interface DiseaseApi {
  response: {
    body: {
      items: {
        item: IDiseaseItem[]
      }
    }
  }
}

export const getDiseaseAPi = (params: Params) => {
  return axios.get<DiseaseApi>(`${url}`, { params })
}

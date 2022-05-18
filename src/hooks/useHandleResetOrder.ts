import { IDiseaseItem } from '../services/disease'
import { useEffect, Dispatch, SetStateAction } from 'react'

const useHandleResetOrder = (
  setFocusItemIndex: Dispatch<SetStateAction<number>>,
  diseaseSearchResult: IDiseaseItem[] | undefined
) => {
  useEffect(() => {
    setFocusItemIndex(-1)
  }, [setFocusItemIndex, diseaseSearchResult])
}

export default useHandleResetOrder

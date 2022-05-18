import { KeyboardEvent, RefObject, Dispatch, SetStateAction } from 'react'
import { IDiseaseItem } from '../../services/disease'

const handleKeyboardFunc = (
  diseaseSearchResult: IDiseaseItem[] | undefined,
  focusedItemIndex: number,
  selectedUlRef: RefObject<HTMLUListElement>,
  setFocusItemIndex: Dispatch<SetStateAction<number>>,
  e: KeyboardEvent<HTMLFormElement>
) => {
  if (diseaseSearchResult) {
    switch (e.key) {
      case 'ArrowDown':
        if (selectedUlRef.current?.childElementCount === focusedItemIndex + 1) {
          setFocusItemIndex(0)
          break
        }

        setFocusItemIndex(focusedItemIndex + 1)
        break

      case 'ArrowUp':
        if (selectedUlRef.current && focusedItemIndex === -1) {
          setFocusItemIndex(selectedUlRef.current.childElementCount)
          break
        }

        if (focusedItemIndex < 0) {
          setFocusItemIndex(-1)
          break
        }

        setFocusItemIndex(focusedItemIndex - 1)
        break

      case 'Escape':
        setFocusItemIndex(-1)
        break
    }
  }
}

export default handleKeyboardFunc

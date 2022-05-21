interface INoSearch {
  isView: () => boolean | undefined
}

const NoSearch = ({ isView }: INoSearch) => {
  if (!isView()) return null

  return <div>검색어 없음</div>
}

export default NoSearch

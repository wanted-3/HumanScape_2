const NoSearch = ({ isView }: any) => {
  return <div>{isView && isView.length === 0 && <div>검색어 없음</div>}</div>
}

export default NoSearch

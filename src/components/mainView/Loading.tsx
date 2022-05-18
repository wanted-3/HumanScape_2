interface ILoading {
  isView: boolean
}

const Loading = ({ isView }: ILoading) => {
  return <div>{isView && <>Loading...</>}</div>
}

export default Loading

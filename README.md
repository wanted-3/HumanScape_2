#  ✨ 휴먼스케이프 그룹 과제 ✨

# 🗣 팀 구성(4명)
- <span style="color:#a6c1ee">김소형</span>, <span style="color:#fda085">이주형</span>, <span style="color:#868e96">이종길</span>, <span style="color:#84fab0">제준영</span>

# 🔧 기술 스택

- Typescript
- React
- Redux toolkit
- Axios
- React query
- SCSS

# 💡 구현 내용

## 1. API 호출 최적화

> ### 캐싱

react-query를 사용하여 한번 검색된 데이터를 캐싱하여, 불필요한 api요청 횟수를 줄였습니다.

> ### 디바운스

useQueryDebounce 훅을 만들어 디바운스를 구현했습니다. useEffect에서 setTimeout과 clearTimeout으로 딜레이와 불필요한 API 호출을 막았습니다. 딜레이 시간의 경우 300ms로 설정하였습니다.

## 2. 키보드로 검색어 이동

- 검색 form 에서 KeyDown 이벤트 발생 시, 화살표 위/아래 키를 통해 추천 검색어를 이동할 수 있게 구현했습니다.

- 검색창에서 위쪽 화살표 키를 입력하면 추천 검색어 리스트의 끝에서 순회할 수 있습니다.

- 추천 검색어 리스트의 끝에서 아래쪽 화살표 키를 입력하면 다시 검색창으로 이동할 수 있습니다.

## 3. 볼드 처리

- API로 호출해 받아온 데이터를 검색어만 bold처리가 되도록 했습니다.

- BoldText 컴포넌트에서 검색어 기준으로 각각의 데이터를 split하고 검색어 문자열만 bold가 있는 스타일을 적용시켰습니다.

# 📌 실행 방법
```
git clone https://github.com/wanted-3/HumanScape_2.git
```
```
yarn install && yarn start
```
```
.env 파일에 REACT_APP_API_KEY 를 입력
```
[API KEY 받는 곳](https://www.data.go.kr/data/15001675/openapi.do)

1. [hs-search-app.netlify.app/](https://hs-search-app.netlify.app/) 에 접속하여, 원하는 검색어를 검색창에 입력합니다.

2. 검색창 밑으로 해당 검색어가 굵은 글씨 처리된 추천 검색어 목록이 나타납니다.

# 📸 구현 결과

|뷰|검색어 기능|키보드 이동 기능|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/62868465/169066625-8f7654f6-7672-4e61-9d8f-1ada1a31cfab.gif" width="180"/>|<img src="https://user-images.githubusercontent.com/62868465/169066590-cf38273d-a361-41fe-8f8f-491138f3c4bd.gif" width="180"/>|<img src="https://user-images.githubusercontent.com/62868465/169066399-6c348e41-b15c-4587-a451-74975fa8ca76.gif" width="180"/>|

# 📝 진행 과정

1일) 과제 스펙확인, 레이아웃 구성, 사용 라이브러리 학습

2일) 기본 스펙 구현, 리팩토링, 문서화

3일) 도전 과제 구현, 배포, 리팩토링, README 작성

#  ✏️ 어려웠던 점

## 1. 공공데이터 API 활용

API 키를 발급받는 것에서부터 API를 받아오는 과정까지 많은 시행착오를 겪었습니다. 문서에서의 명세를 살펴보고 값을 받아보면서 REST API가 어떻게 요청을 보내고 응답하는지 확인할 수 있었습니다.

## 2. 배포시 cors 이슈 해결문제

heroku url 을 통해 CORS 문제를 해결했을 때, 데이터 로드 속도가 6-8s 로 측정됐으나, proxy 를 통해 해결함으로써 최대 3.5s 정도로 속도가 개선되었습니다.

# 🚀 배포

[hs-search-app.netlify.app/](https://hs-search-app.netlify.app/)

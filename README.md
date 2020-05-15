# vue-ts-todo

## 문제인식

- Vuex와 Vue Component 연동시 `string` 많은 부분을 타입으로 바인딩 하기 때문에 typescript의 자동완성 기능을 사용할 수 가 없습닏다.

## 목표

- Vue Component 작업 시 Vuex에 무엇이 있는지 일일이 파일을 열어보면서 `string` 값을 확인 하는 횟수를 줄여봅시다.

## 구성

### Component

- `vue-property-decorator`를 사용해서 class component로 사용 합니다.
- `Vuex` 와 연동 시 `mapActions, mapGetters, mapMutations` 의 사용은 Typescript 사용을 방해한다. 따라서 직접 `this.$store` 로 접근 합니다.
- 액션이 필요 할 시 `this.$dispatch(actionCreater())` 처럼 사용 합니다.
- getter 가 필요 할 시 `this.$store.getters[GET_TODOLIST]` 처럼 사용 합니다.

### Vuex

- `getter` 를 위한 문자열은 export 로 내보내 준다.
- store의 `dispatch` 로 넘길 액션 타입과 액션 생성자를 정의하고 생성자는 export 로 내보내줍니다.
- `mutation` 은 대문자와 '_' 로 구성합니다.
- `actions` 는 카멜 케이스로 구성합니다.

### 기타

- [고민] `vuex-class` 를 사용하면 더 간단하게 Component에서 vuex를 바인딩 할 수 있지만.. Decoration이 늘어난다는게 좋을까??

### 장점

Vuex 의 모듈 파일에서 getter, action 들을 정의 후 export 하면 Vue Component 에서 import 시 자동완성을 통해 필요한 기능들을 가져옵니다.
그렇게 되면 Vue Component에서 별도로 Vuex 의 모듈 파일을 열어보지 않아도 어떤 기능을 dispatch 할지 getter 할지 알 수 있습니다.

## Project setup

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

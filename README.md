# Style sheet
Demo: None
<br><br>

# 목표
Style sheet 언어 습득 
<br><br>

# 어떤 스킬을 가지고 구현했는지, 이에 대한 이유
### [주요 기술]
<p>Front-end: JSX, React</p>
<p>Style sheet: CSS Module, SCSS, Styled-components</p>
<p>IDE: VSCODE</p>
<p>Deployment: None</p>
<hr>

### [필수 설치]
#### react
```
create-react-app .

npm install react-script --save   // react가 old version이어서 오류가 발생할 경우, 해당 명령어를 사용해 react를 lastest version으로 교체
```

#### SCSS
```
npm install -g sass
```

#### Styled-components
```
npm install styled-components
```
<hr>

### [선택 설치]
#### classNames
```
npm install classnames    // className이 2개 이상일 경우 편리하게 작성하기 위해 설치
```

#### react icon
```
npm install react-icons --save    // react-icon을 사용하기위해 설치
```

#### polished (Styled-components에서 사용)
```
npm install polished    // 유틸 함수(darken(), lighten() 등)를 사용하기 위해 설치
```
<hr>

### [해당 기술을 이용한 이유]
<p>프리온보딩 프론트엔드 코스를 참여하게 되었고 7명이 팀을 이뤄, 기업과제를 해결하는 상황에 있었습니다.</p>
<p>7명 모두 다른 Style sheet 언어를 사용했습니다.</p>
<p>다른 팀원들은 2개 이상의 Style sheet 언어를 사용할 줄 알았지만, 저는 CSS Module만 사용할 줄 알아서 의논 결과 CSS Module로 CSS 파일을 제작하기로 결정되었습니다.</p>
<p>저 때문에 CSS Module로 개발하기로 정해졌다고 생각해서 스스로 부끄러웠습니다. </p>
<p>그래서 여러가지 Style sheet 언어를 공부하기로 생각했고, 그 결과 학습 목적으로 해당 기술을 사용했습니다.</p>
<br><br>

# 알게된 점
### [classNames 라이브러리]
#### 1. className이 여러개를 입력할 경우, 가독성을 높이기 위해 사용
```
<div className={ `${Btn} ${Ipt}` }>라이브러리 사용 전</div>   // classNames 라이브러리 사용 전

import { classnames } from 'classNames';
<div className={ classnames( Btn, Ipt ) }>라이브러리 사용 후</div>   // classNames 라이브러리 사용 후
```

#### 2. true나 false로 classname 적용 및 미적용 구현가능
```
<div className={ `${Btn} ${ false ? Ipt : "" }` }></div>    // classNames 라이브러리 사용 전

import { classnames } from 'classNames';
<div className={ classnames( Btn, { Ipt : false } ) }></div>    // classNames 라이브러리 사용 후, false 이외에 0, null, undefined를 사용할 수 있다.

// 또는

<div className={ classnames( Btn, { Ipt } ) }></div>    // classNames 라이브러리 사용 후, false 이외에 0, null, undefined를 사용할 수 있다.
```

#### 3. classNames bind 기능을 사용하여, 코드 줄이기(CSS Module)
```
import {classnames} from 'classNames/bind';
import {styles} from 'Button.module.css'
const cb = classnames.bind(styles)

<div className={ cb( [css에 작성된 클래스명], [css에 작성된 클래스명], ... ) }></div>
```

#### 4. 전역적인 클래스명 사용하기(CSS Module)
```
// Button.module.css
:button {
  ...
}
// CSS Module에 :를 입력하면 전역적으로 사용가능하고, CSS파일에 :를 작성하면 지역적으로 사용가능하다.
```

<hr>

### [react-icon 라이브러리]
#### 1. 왼쪽 네비게이션에서 클릭했을때 나오는 import 문법 사용
```
// Game Icons
import { IconName } from "react-icons/gi";    // classNames 라이브러리 사용 전
```
<hr>

### [polished 라이브러리]
#### 1. 유틸 함수 사용하기(styled-components)
```
import {darken, lighten} from 'polished';

const Circle = styled.div`
  background-color: ${darken(0.1, 'black')}   // black이 10% 만큼 어두워 진다.
`
```
<hr>

### [SCSS]
#### 1. 변수
```
$blue = #227be6;
background-color: $blue;
```

#### 2. 중괄호 안에 hover 또는 태그 작성가능
```
button{
  &:hover {
    ...
  }
  p{
    ...
  }
}
```

#### 3. 유틸 함수
```
background-color: darken( #227be6, 10% )    // #227be6 색상에서 10% 
```

#### 4. 재사용을 위한 @mixin, @include
```
@mixin [ 변수명 ]( [ 매개변수 ] ) {
  background-color: [ 매개변수 ];
}

div{
  @include [ 변수명 ]( [ 매개변수 ] )
}

```
<hr>

### [CSS Module]
#### 1. 사용 시기
1. 기존에 개발 중인 리액트에 사용시, 클래스명이 중복되어도 스타일 유지
2. 중복을 피하기 위해 클래스명을 고민할때

#### 2. 파일명 + 모듈 + 확장자명
ex) Button.module.css
<hr>

### [Styled-components]
#### 1. 중괄호 대신, 벡터(`) 사용
```
import {styled} from 'styled-components';

const Circle = styled.div`
  background-color:black;
  ...
`
```

#### 2. props를 사용하여, 가변적인 Style sheet 개발
```
import {styled} from 'styled-components';

const Circle = styled.div`
  background-color:${color};    // color 그대로 받음
  background-color:${props => props.color || 'black'};    // color값이 없다면, black값을 가진다.
`
...
<Circle color='red'></Circle>
```

#### 3. keyframes를 사용하여, 애니메이션 효과 넣기
```
import {styled} from 'styled-components';

const Circle = keyframes.div`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
```

#### 4. styled-components v4 버전을 위해, css를 import하여 keyframes에 사용하기
```
const Darkbackground = styled.div`
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;
```

# 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
### [Styled-components]
#### 1. Dialog 또는 Modal 
<p>기본적으로 모달창을 구현하는데는 어려움이 없었다.</p>
<p>그러나 keyframes를 이용하여, 애니메이션 효과를 넣는게 어려웠다.</p>
<p>특히, 사라지는 애니메이션 효과를 구현하는것이 힘들었다.</p>

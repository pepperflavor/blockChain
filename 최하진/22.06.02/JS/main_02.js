// CSS 선택자

// 테크 선택자
// div { color: red;} 이렇게 하면 div인 모든 태그들은 red로 색이 바뀐다.
// p{color : black}

// #name {color : red;} 이렇게 쓰면 id 속성값이 name인 선택자 //id는 딱 하나만 중복될 수 없음
// ID 셀렉터
// ID는 고유 이름임

// 클래스 셀렉터
// .content{color : red;} 클래스는 동일한 이름을 가질 수 있다.
// content  class를 갖고 있는 모든 요소

//어트리뷰트 셀렉터
// div[href]{color : red;}

//div[target="_blank"]{color : red;} div에 target이 있는데 값이 _blank인 요소

//자식 선택자
// .content .name{color : red;}
// content 클래스의 자식요소 인데 name클래스를 갖고있는 모든요소
//갖고있는 모든요소

// .content > .name{color : red;}
// content 클래스의 자식요소 인데 부모바로 아래의 name클래스를 갖고있는 요소
// 선택요소

// 형제 셀렉터
// content클래스의 같은 레벨의 형제 요소 선택
// .content + content2 {color : red;}

//가상 클래스 셀렉터
// a:hovrt{color: redl} a에 마우스를 올렸을 때 일어나는 스타일
// input:focus{ color:red;}input이 포커스 상태일때 일어나는 스타일

//다수의 클래스 선택자
// .content.active{color : red;} content클래스도 가지고있고 activq클래스도 가지고 있는 요소

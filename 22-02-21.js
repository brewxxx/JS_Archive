document.querySelector("#id .class tagName);
document.getElementById("id");

* input 의 value를 받아올 때 주의점.
input 의 value를 받아올 때는 반드시 
const input = document.querySelector("input"); 으로 input을 변수로 가져온 뒤, 
span.innerText = input.value; 처럼 변수의 value 값을 받아와야함. 


* createElement("tagName")
js에서 html의 tag를 만들 때, 
const newElement = document.createElement("tagName");

newElement는 document.querySelector("tagName"); 한 것과 같은 속성(?)을 가짐. 
newElement.innerText = `lalala`; 처럼 쓸 수 있다는 뜻.


* html 태그에 id 부여
querySelector로 가져온 태그에 id를 부여하고 싶을 때, 
newElement.id = `blabla`; 처럼 
".id"를 써서 부여할 수 있음.


* appenChild()
tag.appendChlid(newElement);
tag에 newElement라는 자녀를 추가. 
<tag>
  <newElement></newElement>
</tag>
와 같이 자녀 요소가 된다는 뜻. 


* preventDefault()
function preventSubmit(event){
  event.preventDefault();
}

form.addEventListener("submit", preventSubmit);
js는 함수의 첫번째 인자로 일어난 이벤트에 대한 정보를 제공해 줌. 
따라서 함수의 첫번째 인자에 preventDefault(); 함수를 걸어주면 기본적으로 submit 됐을 때 새로고침이 되는 것을 막을 수 있음.  
submit 됐을 때 발생하는 기본동작을 막는 것이기 때문에 submit이 가능한 form 혹은 input에 addEventListener를 걸어줘야함.


* event의 parentElement 가져오기
js가 제공해주는 이벤트에 대한 정보를 바탕으로 event.target.parentElement; 를 통해 부모요소를 가져올 수 있음.

function clickEvent(event){
  const btnParent = evnet.target.parentElement;
}

button.addEventListener("click", clickEvent);

button에 일어난 "click" 이벤트를 통해 button의 부모요소를 .target.parentElement로 가져올 수 있음.
이벤트가 일어난 tag의 parentElement를 가져오는 것.


* filter()
filter()함수는 괄호 안의 함수 return 값이 true인 것만 남기고 나머지는 버림.

function filtering(item){
  return item > 100;
}
itemList = itemList.filter(filtering); 이라면,
filtering 함수에서 true를 return하는 item 
즉, 100보다 큰 item만 itemList에 들어가고, 100이하의 item은 모두 버려진다는 뜻.

itemList = itemList.filter((item) => item >100); -> 간소화한 방식.

위의 함수에서 인자를 ()안에 넣고 => 다음에 true가 되는 조건을 적을 것.
.filter((item => condtional statement); 조건은 item !== something 도 상관 없음. 

만약, 어느 하나만 제외하고 싶다면
.filter((item) => item !== target); 으로 쓰면 됨.
target과 같은 것은 false를 return -> 제거됨.
target과 다른 것은 true를 return -> 남게 되는 것. 

단, filter()는 거르기만 하므로 남은 item들을 다시 다른 변수에 담아주어야함.
const array = [...];
const newArray = array.filter((item) => item !== cat); 을 실행해도,
array는 바뀌는 게 없다는 뜻. filter를 거치고 남은 item들은 모두 newArray에 저장됨.

array.filter(function)을 하면 array의 요소들이 하나하나 function을 거치는 것. true를 return하는 값만 살아남음.
array.forEach(function)과 비슷. 

// 체크박스 아이디의 번호를 지정해주는 변수
let i = 0

function addList() {
  // 컨텐츠들을 감싸는 박스
  const wrapper = document.createElement('li')
  wrapper.className = 'wrapper'

  i += 1
  // 체크박스
  const check = document.createElement('input')
  check.className = 'empty'
  check.type = 'checkbox'
  check.id = `empty${i}`
  wrapper.appendChild(check) // wrapper 안에 추가

  // 체크박스 꾸미기
  const label = document.createElement('label')
  label.htmlFor = `empty${i}`
  label.className = 'checkbox'
  wrapper.appendChild(label)

  // 내용을 적을 input 태그 생성
  const input = document.createElement('input')
  input.className = 'list'
  wrapper.appendChild(input)

  const list = document.getElementById('todo-list')
  list.appendChild(wrapper) // 모든 컨텐츠들을 리스트안에 추가
}

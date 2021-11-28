const addBtn = document.getElementsByClassName('plusBtn')
let i = 0;

function addList() {
    // 컨텐츠들을 감싸는 박스
    const wrapper = document.createElement('li');
    wrapper.classList.add('wrapper')

    i += 1
    // 체크박스
    const check = document.createElement('input');
    check.className = "empty"
    check.type = "checkbox"
    check.id = `empty${i}`
    wrapper.appendChild(check) // wrapper 안에 추가
    
    // 체크박스 꾸미기
    const label = document.createElement('label');
    label.htmlFor = `empty${i}`
    console.log(label)
    label.className = "checkbox"
    wrapper.appendChild(label)


    // 내용을 적을 input 태그 생성
    const input = document.createElement('input');
    input.classList.add('list')
    input.innerHTML = ""
    wrapper.appendChild(input)

    input.addEventListener('click', () => {
        console.log('asd')
    })

    const list = document.getElementById('todo-list')
    list.appendChild(wrapper) // 모든 컨텐츠들을 리스트안에 추가
}
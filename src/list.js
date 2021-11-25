function addList() {
    // 컨텐츠들을 감싸는 박스
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper')
    
    // 체크박스
    const check = document.createElement('input');
    check.type = "checkbox"
    check.id = "empty"
    wrapper.appendChild(check) // wrapper 안에 추가
    
    // 체크박스 꾸미기
    const label = document.createElement('label');
    label.htmlFor = "empty"
    label.id = "checkbox"
    wrapper.appendChild(label)
    
    // 내용을 적을 input 태그 생성
    const input = document.createElement('input');
    input.classList.add('list')
    input.innerHTML = ""
    wrapper.appendChild(input)
    
    const list = document.getElementById('listBox')
    list.appendChild(wrapper) // 모든 컨텐츠들을 리스트안에 추가
}
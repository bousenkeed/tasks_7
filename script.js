//1. Подсветка активного пункта меню:

let linkList = document.querySelectorAll('.link');

for (let el of linkList) {
    el.onclick = function () {
        for (let el of linkList) {
            el.className = 'link';
        }
        el.className = 'link-js'
    }
}




// 2. Автоматическое исправление внешних ссылок:

const linkArr = document.querySelectorAll('a');

for (let link of linkArr) {
    if (link.href.includes('http:')) {
        link.target = "_blank";
    }
}

// 3. Заполнение формы данными пользователя:

const data = {
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'Ivanich@gmail.com'
};

function addData(obj) {
    let firstName = document.querySelector('.input-name');
    let lastName = document.querySelector('.input-last-name');
    let email = document.querySelector('.input-email');
    firstName.value = obj.firstName;
    lastName.value = obj.lastName;
    email.value = obj.email;
}

addData(data);

// 4. Валидация формы на клиенте:

const inputs = document.querySelectorAll('#inp');

const submitButton = document.querySelector('.submit-button')
    .addEventListener('click', function () {
        for (let input of inputs) {
            if (!input.value) {
                alert('Заполните пустые поля')
                break;
            }
        }
    })


// 5. Динамическое создание списка с картинками:

const imageArr = [
    {
        url: 'https://i.pinimg.com/564x/a0/49/f7/a049f729e13cb55442253e0aa44f7070.jpg',
        alt: 'Мона',
        class: 'img-size'
    },
    {
        url: 'https://i.pinimg.com/564x/8b/60/b5/8b60b5b2da69e83ab26749c5f13a7493.jpg',
        alt: 'Кружка',
        class: 'img-size'
    },
    {
        url: 'https://i.pinimg.com/564x/54/af/23/54af2396fb53c5456577fa56133ca87b.jpg',
        alt: 'Собаки',
        class: 'img-size'
    },
    {
        url: 'https://i.pinimg.com/564x/84/58/10/8458108cafe4a865d63fbf8d1c56d2ff.jpg',
        alt: 'Лестница',
        class: 'img-size'
    }
];
const divIamges = document.querySelector('.images-container');
divIamges.style = 'display: flex; justify-content: space-between;';

for (let obj of imageArr) {
    divIamges.insertAdjacentHTML
    ('beforeend', `<img class=${obj.class} src=${obj.url} alt=${obj.alt}>`);
}

// 6.  Установка и получение атрибута
const btn = document.querySelector('.btn');
btn.id = 'myButton';
console.log(btn.id);

// 7. Изменение стилей элемента
//добавил еще высоту, чтобы на странице отобразился
const emptyDiv = document.getElementById('empty-div');
emptyDiv.style = 'background-color: red; color: black; width: 200px; height: 200px';

// 8. Работа с классами элемента

const liElement = document.querySelectorAll('.li-element');
function addClass() {
    for (let el of liElement) {
        el.addEventListener('mouseover', function() {
            console.log('Навел');
            el.classList.add('highlight');
        })
        el.addEventListener('mouseout', function() {
            console.log('Убрал');
            el.classList.remove('highlight');
        })
    }
}

addClass();

// Почему-то в режиме "просмотра кода элемента" mouseover работает только когда нажимаешь на 
// элемент, а mouseout когда клацаешь на какое-нибудь другое поле. 
// А без этого режима все работает ок. Наверное так и должно быть
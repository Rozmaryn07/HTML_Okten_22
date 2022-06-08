
const usrdiv = document.getElementsByClassName('usrdiv')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(value =>{
        for (const valueElement of value) {
            const div = document.createElement('div');
            div.classList.add('div');
            div.innerHTML = `${valueElement.id} - ${valueElement.name}`;
            usrdiv.appendChild(div);

            const usersdetails = document.createElement('button');
            usersdetails.innerHTML = ' <a href="../2/details.html"  target="_blank">user-details</a>';
            usersdetails.onclick = () => {
                const Userdetails = 'Userdetails';
                localStorage.setItem(Userdetails, JSON.stringify(`https://jsonplaceholder.typicode.com/users/${valueElement.id}`))



            }
            div.append(usersdetails);
        }
    });
// <!--В index.html-->
// <!--1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users-->
// <!--2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.-->
// <!--3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
//  которая имеет детальную информацию про объект на который кликнули--
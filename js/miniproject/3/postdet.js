// const Pdetailkey = 'Postdetail';
const detailpost = document.getElementById('detail');
const parsepodt = JSON.parse(localStorage.getItem('Postdetail'));
const postdiv= document.createElement('div');
postdiv.classList.add('postdiv');
detailpost.append(postdiv);
fetch(parsepodt)
    .then(value => value.json() )
    .then(value => {

        const cont = document.createElement('div');
        cont.innerText =
            `userId: ${value.userId}
        id: ${value.id}
        title: ${value.title}
        body: ${value.body}`;
        postdiv.append(cont);
    });

const Comdet = JSON.parse(localStorage.getItem('Comdet'));
const comentdiv = document.createElement('div');
comentdiv.classList.add('comdiv');
detailpost.append(comentdiv);
    fetch(Comdet)
        .then(value => value.json())
        .then(value => {

            for (const com of value) {
                const coment = document.createElement('div');
                coment.classList.add('coment');
                comentdiv.append(coment);
                for (const comentKey in com) {
                    const elementcom = document.createElement('div');
                    elementcom.innerHTML =`${comentKey}  -  ${com[comentKey]}`
                    coment.append(elementcom);
                }

            }


        })

//<!--На странице post-details.html:-->
//<!--7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.-->
//<!--8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
 let post = document.getElementsByClassName('post')[0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=> response.json())
    .then(value =>{
        for (const valueElement of value) {
            const div = document.createElement('div');
            div.classList.add('div');
            post.appendChild(div);
            div.innerHTML = `<h1>${valueElement.userId}</h1>
            <h2>${valueElement.id}</h2>
            <h3>${valueElement.title}</h3>
            <h4>${valueElement.body}</h4>`
        }
    });



//  2. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         let wraper = document.createElement('div');
//         wraper.classList.add('wraper');
//         for (const comment of comments) {
//             let divCard = document.createElement('div');
//             divCard.classList.add('comment');
//             divCard.innerHTML = `
//                         <h3>ID: ${comment.id}</h3>
//                         <h4>Name: ${comment.name}</h4>
//                         <h5>Email: ${comment.email}</h5>
//                         <h6>Body: ${comment.body}</h6>
//                         `;
//             wraper.appendChild(divCard);
//             document.body.appendChild(wraper);
//         }
//     })



const puk = document.createElement('a',target="_blank");
puk.innerHTML = '<input type="button" value=puk>';
puk.setAttribute('href',`https://jsonplaceholder.typicode.com/users/${valueElement.id}` );
div.appendChild(puk);
}

// const usrdiv = document.getElementsByClassName('usrdiv')[0];
// const but = document.getElementsByTagName('button')[0];
// but.addEventListener('click',()=> {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response=> response.json())
//         .then(value => {
//             for (const valueElement of value) {
//                 const div = document.createElement('div');
//                 div.classList.add('div');
//                 div.innerHTML = `${valueElement.id} - ${valueElement.name}`;
//                 usrdiv.appendChild(div);
//                 const puk = document.createElement('a',target="_blank");
//                 puk.innerHTML = '<input type="button" value=puk>';
//                 puk.setAttribute('href',`https://jsonplaceholder.typicode.com/users/${valueElement.id}` );
//                 div.appendChild(puk);
//             }
//         })
// })
const post = document.createElement('a',target="_blank");
post.innerHTML = '<input type="button" value="post of current user">';
post.setAttribute('href',`https://jsonplaceholder.typicode.com/users/${id}/posts` );
div.appendChild(post);


const Pdetailkey = 'Postdetail';
const detailpost = document.getElementById('detail');
const parsepodt = JSON.parse(localStorage.getItem(Pdetailkey));
parsepodt.forEach(post =>{
    const postdiv= document.createElement('div');

    const cont = document.createElement('div');
    cont.innerText =
        `userId: ${post.userId}
        id: ${post.id}
        title: ${post.title}
        body: ${post.body}`;
    postdiv.append(cont);
    detailpost.append(postdiv);
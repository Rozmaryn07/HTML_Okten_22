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
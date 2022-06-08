// <!--На странице user-details.html:-->
// <!--4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.-->
// <!--5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера-->
// <!--(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//  которая имеет детальную информацию про текущий пост.--


const detdiv = document.getElementsByClassName('det')[0];
const Userdetails = JSON.parse(localStorage.getItem('Userdetails'));
fetch(Userdetails)
    .then(response=> response.json())
    .then(value =>{
            const div = document.createElement('div');
            div.classList.add('div');
            detdiv.appendChild(div);
            const {id, name, username, email, address, phone, website, company } = value;


                div.innerHTML = `
 <h2> ${id}<h2>
 <h2>${name}</h2>
 <h2>${username}</h2>
 <h2>${email}</h2>
 <h2>${address.street}</h2>
 <h2>${address.suite}</h2>
 <h2>${address.city}</h2>
 <h2>${address.zipcode}</h2>
 <h2>${address.geo.lat}</h2>
 <h2>${address.geo.lng}</h2>
 <h2>${phone}</h2>
 <h2>${website}</h2>
 <h2>${company.name}</h2>
 <h2>${company.catchPhrase}</h2>
 <h2>${company.bs}</h2>
`

                const button = document.createElement('button');
                button.innerText = 'post of current user'
                div.appendChild(button);

                button.onclick = () => {
                    fetch(`https:jsonplaceholder.typicode.com/users/${id}/posts`)
                        .then(value => value.json() )
                        .then(value => {
                            const postdiv = document.createElement('div');
                            div.appendChild(postdiv);
                            for (const post of value) {
                             const postdetdiv = document.createElement('div');
                             postdetdiv.innerText = `title${post.id}: ${post.title}`;
                             postdiv.appendChild(postdetdiv);
                             button.disabled = true;



                                const puk = document.createElement('button');
                                puk.innerHTML =' <a href="../3/post-details.html"  target="_blank">post-details</a>';
                                puk.onclick = ( )=>{
                                    const Pdetailkey = 'Postdetail';
                                    localStorage.setItem(Pdetailkey,JSON.stringify(`https:jsonplaceholder.typicode.com/posts/${post.id}`) )
                                    JSON.parse(localStorage.getItem(Pdetailkey));
                                    const Comdet = 'Comdet'
                                    localStorage.setItem(Comdet,JSON.stringify(`https:jsonplaceholder.typicode.com/posts/${post.id}/comments`))

                                }
                                postdetdiv.appendChild(puk);

                            }

                        })
                }

    })
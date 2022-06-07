// const Pdetailkey = 'Postdetail';
const detailpost = document.getElementById('detail');
const parsepodt = JSON.parse(localStorage.getItem('Postdetail'));
const postdiv= document.createElement('div');
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
    detailpost.append(postdiv);


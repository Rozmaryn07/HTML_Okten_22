
const usrdiv = document.getElementsByClassName('usrdiv');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(value =>{
        for (const valueElement of value) {
            const div = document.createElement('div');
            div.classList.add('div');
            div.innerHTML = `${valueElement.id} - ${valueElement.name}`;
            usrdiv.appendChild(div);

            const puk = document.createElement('a',target="_blank");
            puk.innerHTML = '<input type="button" value=puk>';
            puk.setAttribute('href',`https://jsonplaceholder.typicode.com/users/${valueElement.id}` );
            div.appendChild(puk);
        }
    })
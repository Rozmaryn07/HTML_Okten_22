
const usrdiv = document.getElementsByClassName('usrdiv')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(value =>{
        for (const valueElement of value) {
            const div = document.createElement('div');
            div.classList.add('div');
            div.innerText = `${valueElement.id} - ${valueElement.name}`;
            usrdiv.appendChild(div);

            const usersdetails = document.createElement('button');
            usersdetails.classList.add('button');
            usersdetails.innerHTML = ' <a href="../2/details.html"  target="_blank">user-details</a>';
            usersdetails.onclick = () => {
                const Userdetails = 'Userdetails';
                localStorage.setItem(Userdetails, JSON.stringify(`https://jsonplaceholder.typicode.com/users/${valueElement.id}`))



            }
            div.append(usersdetails);
        }
    });

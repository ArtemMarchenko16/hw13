// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)


let fetchData = async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    let wrap = document.getElementById('wrap');

    let list = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a')
        li.innerText = `${data[i].id} - ${data[i].name} - `;
        a.innerText = `main.html?id=${data[i].id}`;
        a.href = `main1.html?id=${data[i].id}`;
        li.appendChild(a);
        list.appendChild(li);
    }
    wrap.appendChild(list);
}
void fetchData()
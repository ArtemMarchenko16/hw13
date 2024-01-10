let userId = new URL(location.href).searchParams.get('id');

let fetchData = async() => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let user = await response.json();
    let wrap = document.getElementById('wrap');
    let ul = document.createElement('ul');
    let id = document.createElement('li');
    let username = document.createElement('li');
    let email = document.createElement('li');
    let phone = document.createElement('li');
    let street = document.createElement('li');
    let suite = document.createElement('li');
    let city = document.createElement('li');
    let zipcode = document.createElement('li');
    let lat = document.createElement('li');
    let lng = document.createElement('li');
    let website = document.createElement('li');
    let companyName = document.createElement('li');
    let catchPhrase = document.createElement('li');
    let bs = document.createElement('li');

    id.innerText = `id: ${user.id}`;
    username.innerText = `username: ${user.username}`;
    email.innerText = `email: ${user.email}`;
    phone.innerText = `phone: ${user.phone}`;
    street.innerText = `street: ${user.address.street}`;
    suite.innerText = `suite: ${user.address.suite}`;
    city.innerText = `city: ${user.address.city}`;
    zipcode.innerText = `zipcode: ${user.address.zipcode}`;
    lat.innerText = `lat: ${user.address.geo.lat}`;
    lng.innerText = `lng: ${user.address.geo.lng}`;
    website.innerText = `website: ${user.website}`;
    companyName.innerText = `companyName: ${user.company.name}`;
    catchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;
    bs.innerText = `bs: ${user.company.bs}`;

    ul.append(id, username, email, phone, street, suite, city, zipcode, lat, lng, website, companyName, catchPhrase, bs);
    wrap.appendChild(ul);

}
void fetchData();

function saveToLocalStorage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    const user = {
        name,
        email,
    };
    localStorage.setItem(name, JSON.stringify(user));
    showNewUserOnScreen(user);
}

function showNewUserOnScreen(user) {
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li> ${user.name} ${user.email} </li>`;

    parentNode.innerHTML += childHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    Object.keys(localStorage).forEach((key) => {



        stringifiedDetailsOfPeople = localStorage.getItem(key);
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        showNewUserOnScreen(detailsOfPeople);
        
        });
})
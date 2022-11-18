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

document.addEventListener('DOMContentLoaded', function() {
    Object.keys(localStorage).forEach((key) => {



        stringifiedDetailsOfPeople = localStorage.getItem(key);
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        showNewUserOnScreen(detailsOfPeople);
        
        });
})

function showNewUserOnScreen(user) {
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=$(user.name)> ${user.name} - ${user.email} 
                            <button onclick=deleteUser('${user.name}')> Delete </button>
                        </li>`;
    
    console.log(childHTML);
    parentNode.innerHTML += childHTML;
    console.log(parentNode.innerHTML);
}

function deleteUser(name) {
    localStorage.removeItem(name);
    removeUserFromScreen(name);
}

function removeUserFromScreen(name) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(name);
    parentNode.removeChild(childNodeToBeDeleted);
}


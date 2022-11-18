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
    localStorage.setItem(email, JSON.stringify(user));
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
                            <button onclick=deleteUser('${user.email}')> Delete </button>
                            <button onclick=editUser('${user.email}','${user.name}')> Edit</button>
                        </li>`;
    
    parentNode.innerHTML += childHTML;
}

function editUser(email, name) {
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;

    deleteUser(email);
}

function deleteUser(email) {
    localStorage.removeItem(email);
    removeUserFromScreen(email);
}

function removeUserFromScreen(email){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(email);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}





function saveToLocalStorage(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    let user = {
        name,
        email,
    };
    axios.post("https://crudcrud.com/api/e62d1d5fd4fc476fb08980c49cb4c494/appointmentData", user)
       .then(response => {
        showNewUserOnScreen(response.data);
         console.log(response)
       })
       .catch(err => {
         console.log(err)
       })
    // localStorage.setItem(email, JSON.stringify(user));
    // showNewUserOnScreen(user);
}

document.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/e62d1d5fd4fc476fb08980c49cb4c494/appointmentData")
        .then((response) => {
            console.log(response);
            for(var i = 0; i < response.data.length; i++) {
                showNewUserOnScreen(response.data[i]);
            }
        })
        .catch((err) => {
            console.log(err)
        })


})


function showNewUserOnScreen(user) {
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';

    

    let parentNode = document.getElementById('listOfUsers');
    let childHTML = `<li id=$(user.name)> ${user.name} - ${user.email} 
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
    let parentNode = document.getElementById('listOfUsers');
    let childNodeToBeDeleted = document.getElementById(email);
    // if(childNodeToBeDeleted) {
    //     parentNode.removeChild(childNodeToBeDeleted);
    // }
    parentNode.removeChild(childNodeToBeDeleted);
    
}





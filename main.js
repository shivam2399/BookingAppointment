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
    
}
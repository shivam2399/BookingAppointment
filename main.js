function saveToLocalStorage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
}
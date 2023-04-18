const API_KEY = "VD672QzXoo1xvgcJDe1tf7ClVXI";
const API_URL = "https://ci-jshint.herokuapp.com/";
const resultsModal = new bootstrap.modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_URL}`;
    const response = await fetch(queryString);
    const data = await response.json();

    if (response.ok) {
        console.log(data);
    }
}
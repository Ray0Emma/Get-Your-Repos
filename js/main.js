// DOM elements
let currentInput = document.querySelector('input');
let getReposBtn = document.querySelector('.btn-success');
let urRepos = document.querySelector('.show-data');

getReposBtn.onclick = function () {
    getRepos();
};

function getRepos() {
    if (currentInput.value == '') {
        urRepos.innerHTML = '<span class="d-flex justify-content-center">You should enter your username</span>';
    } else {
        fetch(`https://api.github.com/users/${currentInput.value}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                
            });
        });
    }
};
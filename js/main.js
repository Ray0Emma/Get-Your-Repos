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
            // Empty The Container
            urRepos.innerHTML = '';
            data.forEach(repo => {
                // Create The main Div Col Element
                let  divCol = document.createElement('div');
                divCol.className = 'col';
                // Create The Div card Element
                let  divCard = document.createElement('div');
                divCard.className= 'card h-100';
                // Create The Div card body Element
                let  divCaBody = document.createElement('div');
                divCaBody.className = 'card-body';
                // Create The card title Element
                let  cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                // Create Repo Name Text
                let repoName = document.createTextNode(repo.name);
                cardTitle.appendChild(repoName);
                // Create The card text Element
                let  cardText = document.createElement('p');
                cardText.className = 'card-text';
                // Create Repo discription Text
                let repoDisc = document.createTextNode(repo.description);
                cardText.appendChild(repoDisc);

                divCaBody.appendChild(cardTitle);
                divCaBody.appendChild(cardText);
                divCol.appendChild(divCard).appendChild(divCaBody);

                // Append The Main Div To Container
                urRepos.appendChild(divCol);
            });
        });
    }
};
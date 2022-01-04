// DOM elements
let currentInput = document.querySelector("input");
let getReposBtn = document.querySelector(".btn-success");
let urRepos = document.querySelector(".show-data");

getReposBtn.onclick = function () {
  getRepos();
};

function getRepos() {
  if (currentInput.value == "") {
    urRepos.innerHTML =
      '<span class="d-flex justify-content-center">You should enter your username</span>';
  } else {
    fetch(
      `https://api.github.com/users/${currentInput.value}/repos?per_page=100&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        // Empty The Container
        urRepos.innerHTML = "";
        data.forEach((repo) => {
          // Create The main Div Col Element
          let divCol = document.createElement("div");
          divCol.className = "col";
          // Create The Div card Element
          let divCard = document.createElement("div");
          divCard.className = "card h-100";
          // Create The Div card body Element
          let divCaBody = document.createElement("div");
          divCaBody.className = "card-body";
          // Create The card title Element
          let cardTitle = document.createElement("h5");
          cardTitle.className = "card-title";
          // Create Repo Name Text
          let repoName = document.createTextNode(repo.name);
          cardTitle.appendChild(repoName);
          // Create The card text Element
          let cardText = document.createElement("p");
          cardText.className = "card-text";
          // Create Repo discription Text
          let repoDisc = document.createTextNode(repo.description);
          cardText.appendChild(repoDisc);

          // Create The card footer Element
          let cardFooter = document.createElement("div");
          cardFooter.className = "card-footer bg-white border-0";
          // Create The star svg Element
          let starSvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          starSvg.setAttribute("class", "me-1");
          // Create The svg path Element
          let svgPath = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
          );
          svgPath.setAttribute(
            "d",
            "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          );

          let spanStars = document.createElement("span");
          spanStars.className = "align-text-top";
          let stars = document.createTextNode(repo.stargazers_count);
          spanStars.appendChild(stars);

          starSvg.appendChild(svgPath);
          cardFooter.appendChild(starSvg);
          cardFooter.appendChild(spanStars);

          let iconForks = document.createElement("img");
          iconForks.className = "ms-2 me-1";
          iconForks.setAttribute(
            "src",
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcyVjZMNSA4IDMgNlY0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDIgMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNi41bDMgM3YxLjc4QTEuOTkzIDEuOTkzIDAgMCAwIDUgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyVjkuNWwzLTNWNC43MkExLjk5MyAxLjk5MyAwIDAgMCA4IDF6TTIgNC4yQzEuMzQgNC4yLjggMy42NS44IDNjMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTMgMTBjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMy0xMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yeiIvPjwvc3ZnPg=="
          );
          iconForks.setAttribute("alt", "forks icon");
          let spanForks = document.createElement("span");
          spanForks.className = "align-text-top";
          let forks = document.createTextNode(repo.forks_count);
          spanForks.appendChild(forks);

          cardFooter.appendChild(iconForks);
          cardFooter.appendChild(spanForks);

          divCaBody.appendChild(cardTitle);
          divCaBody.appendChild(cardText);

          divCol.appendChild(divCard).appendChild(divCaBody);
          divCol.appendChild(divCard).appendChild(cardFooter);

          // Append The Main Div To Container
          urRepos.appendChild(divCol);
        });
      });
  }
}

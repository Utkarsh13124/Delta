const accessKey = `nizwFGMVkskR4mHRBY6xF2vJkB9k_MHoIcwBwlOpblM` ;

const formEl = document.querySelector("form");
const inputEl = document.querySelector("#search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector("#show-more-button");

let inputData = "";
let page  = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchResults.innerHTML = "";
    }

    results.map( (result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);

    });

    page++;

    if(page > 1){
        showMore.style.display = "block";
    }
}

// https://youtu.be/oaliV2Dp7WQ?si=Uu71ITvg-st2c6an 
// 38 min around

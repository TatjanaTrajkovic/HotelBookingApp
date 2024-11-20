import { handleBookNowClick } from "./modalBooking.js";

function createCard(data){
    const card = document.createElement('div');
    card.classList.add('card');
    const imagePath = '../../images/imageOfRooms/';

    card.innerHTML = `
        <div class="card-body">
            <div class="card-image">
                <img src="${imagePath + data.image}" alt="${data.name}">
            </div>
            <div class="card-info">
                <h2>${data.name}</h2>
                <p>${data.description}</p>
                <a href="#" class="more-info">More info >> </a>
                <div class="cost-and-button">
                    <div class="details">
                        <span><i class="fa-solid fa-user-group"></i>${data.maxOccupancy}</span>
                        <span><i class="fas fa-dollar-sign"></i>${data.price}</span>
                        <span><i class="fas fa-bed"></i>${data.bedType}</span>
                    </div>
                    <button class="book-now-button">Book Now</button>
                </div> 
            </div>
        </div>    
    `;

    const moreInfoLink = card.querySelector('.more-info');
    moreInfoLink.addEventListener('click', function(){
        showMoreInfo(card, data, moreInfoLink);
    });

    const bookNowButton = card.querySelector('.book-now-button');
    bookNowButton.addEventListener('click', () => {
        handleBookNowClick(data);
    })

    return card;
}


function showMoreInfo(card, data, moreInfoLink){
    const moreInfoDiv = document.createElement('div');
    moreInfoDiv.classList.add('more-info-div');
    const characteristicsHTML = Object.entries(data.roomCharacteristics).map(([key, value]) => {
        return `
            <div class="characteristic">
                ${value}
                <div class="text">${key}</div>
            </div>
        `;

    }).join('');
    moreInfoDiv.innerHTML = `
        <span class="close-button">&times</span>
        <div class="more-info-content">
            <h3>Additional Inforamation</h3>
            <div class="characteristics-grid">${characteristicsHTML}</div>
        </div>
    `;
    card.appendChild(moreInfoDiv);
    moreInfoLink.classList.add('disabled');
    moreInfoLink.style.pointerEvents = 'none'; // on disable da nemozes da klikas vise od jednom i dodajes na 

    const closeButton = moreInfoDiv.querySelector('.close-button');
    closeButton.addEventListener('click', function(){
        moreInfoDiv.remove();
        moreInfoLink.classList.remove('disabled');
        moreInfoLink.style.pointerEvents = 'auto'; 
    });
}







export{
    createCard,
}
import CONFIG from '../../globals/config';

const RestaurantDetail = (restaurants) => `
  <div class="resto__detail">
    <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />  
    <h2 class="resto__title">${restaurants.name}</h2>
    <p>${restaurants.address}</p>
    <h5>${restaurants.city}</h5>
    <h5>${restaurants.rating}</h5>
    <h4>Category:</h4>
    <h5>${restaurants.categories}</h5>
    <h4>Food Menu</h4>
    <p>${restaurants.foods}</p>
    <h4>Drink Menu</h4>
    <p>${restaurants.drinks}</p>
  </div>
  <h4>Description:</h4>
  <p>${restaurants.description}</p>
  <h4>Review:</h4>
  <div>
    <p>${restaurants.name}</p>
    <h5>${restaurants.date}</h5>
    <p>${restaurants.review}</p>
  </div>
`;

const RestaurantItem = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${restaurants.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
        <p>${restaurants.description}</p>
    </div>
  </div>
  `;

export { RestaurantDetail, RestaurantItem };

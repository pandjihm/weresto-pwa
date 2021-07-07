import CONFIG from '../../globals/config';

const RestaurantDetail = (restaurant) => `
  <div class="grid-detail">
    <div>
      <img class="detail-img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    </div>
    <div class="detail-info">  
      <h2 class="detail-nama">${restaurant.name}</h2>
      <p>${restaurant.address}</p>
      <div class="grid-city-rating">
        <div class="city-detail">
        <p class="p-city">${restaurant.city}</p>
        </div>
        <div class="rating-detail">
            <img tabindex="0" src="../images/heros/star.svg" width="14vh" alt="rating"> 
            <p tabindex="0" class="p-rating-detail">${restaurant.rating}</p>
        </div>
      </div>
      <h4>Category:</h4>
      <p class="p-padding">${restaurant.categories.map((categorie) => categorie.name)}</p>
      <h4>Food Menu:</h4>
      <p class="p-padding">${restaurant.menus.foods.map((food) => food.name)}</p>
      <h4>Drink Menu:</h4>
      <p class="p-padding">${restaurant.menus.drinks.map((drink) => drink.name)}</p>
    </div>
  </div>
  <div class="desc-pad">
    <h4 tabindex="0">Description:</h4>
    <p tabindex="0" class="p-padding">${restaurant.description}</p>
    <h4 tabindex="0" class="review-padding">Review:</h4>
    <div class="restaurantInfo">
      ${restaurant.customerReviews.map((review) => `
        <div class="grid-review">
          <div class="grid-rev-name">
            <p tabindex="0">${review.name}</p>
            <h5 tabindex="0" class="p-city">${review.date}</h5>
          </div>
          <div>
            <p tabindex="0" class="p-review">${review.review}</p>
          <div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const RestaurantItem = (restaurants) => `
  <div>
    <div class="card-fifth">
        <div class="rating">
            <img tabindex="0" src="../images/heros/star.svg" width="14vh" alt="rating"> 
            <p tabindex="0" class="p-rating">${restaurants.rating}</p>
        </div>
        <img tabindex="0" class="img-fifth" alt="${restaurants.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
        <div class="city">
          <p tabindex="0" class="p-city">${restaurants.city}</p>
        </div>
        <h4 tabindex="0" class="h4-judul-resto"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h4>
        <p tabindex="0" class="p-fifth">${restaurants.description}</p>
        <div class="arrow">
          <p><a href="${`/#/detail/${restaurants.id}`}">Find Out More</p>
          <img tabindex="0" class="img-arrow" src="../images/heros/arrow.svg" width="16vh" alt="arrow"></a>
        </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestaurantDetail, RestaurantItem, createLikeButtonTemplate, createLikedButtonTemplate,
};

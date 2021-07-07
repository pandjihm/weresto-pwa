import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { RestaurantItem } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div id="restaurants" class="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += RestaurantItem(restaurant);
    });
  },
};

export default Like;

import RestaurantSource from '../../data/restaurant-source';
import { RestaurantItem } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <div class="content">
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.ListRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML += RestaurantItem(restaurants);
    });
  },
};

export default ListRestaurant;

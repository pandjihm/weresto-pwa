import RestaurantSource from '../../data/restaurant-source';
import { RestaurantItem } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
        <div id="restaurants" class="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.ListRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantsContainer.innerHTML += RestaurantItem(restaurants);
    });
  },
};

export default ListRestaurant;

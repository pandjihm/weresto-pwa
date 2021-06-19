import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { RestaurantDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurants" class="restaurants"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurants');
    restaurantContainer.innerHTML = RestaurantDetail(restaurants);
  },
};

export default Detail;

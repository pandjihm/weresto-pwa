import ListRestaurant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/detail/:id': Detail,
};

export default routes;

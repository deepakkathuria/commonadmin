// // project import
// import dashboard from './dashboard';
// import pages from './page';
// import utilities from './utilities';
// import support from './support';

// // ==============================|| MENU ITEMS ||============================== //

// const menuItems = {
//   items: [dashboard, pages, utilities, support]
// };

// export default menuItems;



// project imports
import dashboard from './dashboard';
import pages from './page';
// import utilities from './utilities';
// import support from './support';
import rooms from './rooms'; // ✅ add this line
import bookings from './bookings'; // ✅ Add this line
import contact from './contact'; // ✅ Add this line



// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, rooms, pages, bookings,contact] // ✅ add "rooms" here
};

export default menuItems;

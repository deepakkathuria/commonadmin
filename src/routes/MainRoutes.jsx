// import { lazy } from 'react';
// import Loadable from 'components/Loadable';
// import DashboardLayout from 'layout/Dashboard';

// // Pages
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
// const RoomList = Loadable(lazy(() => import('pages/rooms/RoomList')));
// const RoomForm = Loadable(lazy(() => import('pages/rooms/RoomForm')));
// const BookingForm = Loadable(lazy(() => import('pages/bookings/BookingForm')));
// const BookingList = Loadable(lazy(() => import('pages/bookings/BookingList')));
// const BookingSummary = Loadable(lazy(() => import('pages/bookings/BookingSummary')));

// const MainRoutes = {
//   path: '/',
//   element: <DashboardLayout />,
//   children: [
//     {
//       path: '/',
//       element: <DashboardDefault />
//     },
//     {
//       path: 'dashboard/default',
//       element: <DashboardDefault />
//     },
//     {
//       path: 'rooms',
//       element: <RoomList />
//     },
//     {
//       path: 'rooms/add',
//       element: <RoomForm />
//     },
//     {
//       path: 'rooms/edit/:id',
//       element: <RoomForm />
//     },
//     {
//       path: 'bookings',
//       element: <BookingList />
//     },
//     {
//       path: 'bookings/add',
//       element: <BookingForm />
//     },
//     {
//       path: 'bookings/:id',
//       element: <BookingSummary />
//     }
//   ]
// };

// export default MainRoutes;


import { lazy } from 'react';
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PrivateRoute from '../components/PrivateRoute';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
const RoomList = Loadable(lazy(() => import('pages/rooms/RoomList')));
const RoomForm = Loadable(lazy(() => import('pages/rooms/RoomForm')));
const BookingForm = Loadable(lazy(() => import('pages/bookings/BookingForm')));
const BookingList = Loadable(lazy(() => import('pages/bookings/BookingList')));
const BookingSummary = Loadable(lazy(() => import('pages/bookings/BookingSummary')));
const ContactMessages = Loadable(lazy(() => import('pages/contact/ContactMessages')));

const MainRoutes = {
  path: '/',
  element: <PrivateRoute />, // Protect all children routes
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <DashboardDefault /> },
        { path: 'dashboard/default', element: <DashboardDefault /> },
        { path: 'rooms', element: <RoomList /> },
        { path: 'rooms/add', element: <RoomForm /> },
        { path: 'rooms/edit/:id', element: <RoomForm /> },
        { path: 'bookings', element: <BookingList /> },
        { path: 'bookings/add', element: <BookingForm /> },
        { path: 'bookings/:id', element: <BookingSummary /> },
        { path: 'contact-messages', element: <ContactMessages/>}

      ]
    }
  ]
};

export default MainRoutes;

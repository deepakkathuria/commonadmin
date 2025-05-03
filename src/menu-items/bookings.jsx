import { FileTextOutlined } from '@ant-design/icons';

const icons = { FileTextOutlined };

const bookings = {
  id: 'bookings-section',
  title: 'Bookings',
  type: 'group',
  children: [
    {
      id: 'booking-list',
      title: 'All Bookings',
      type: 'item',
      url: '/bookings',
      icon: icons.FileTextOutlined
    },
    {
      id: 'add-booking',
      title: 'Add Booking',
      type: 'item',
      url: '/bookings/add',
      icon: icons.FileTextOutlined
    }
  ]
};

export default bookings;

import { HomeOutlined, PlusCircleOutlined } from '@ant-design/icons';

const icons = {
  HomeOutlined,
  PlusCircleOutlined
};

const rooms = {
  id: 'rooms-section',
  title: 'Hotel Management',
  type: 'group',
  children: [
    {
      id: 'rooms',
      title: 'Rooms',
      type: 'item',
      url: '/rooms',
      icon: icons.HomeOutlined
    },
    {
      id: 'add-room',
      title: 'Add Room',
      type: 'item',
      url: '/rooms/add',
      icon: icons.PlusCircleOutlined
    }
  ]
};

export default rooms;

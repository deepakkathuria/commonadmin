import { MessageOutlined } from '@ant-design/icons';

const icons = { MessageOutlined };

const contact = {
  id: 'contact-section',
  title: 'Contact',
  type: 'group',
  children: [
    {
      id: 'contact-messages',
      title: 'Contact Messages',
      type: 'item',
      url: '/contact-messages',
      icon: icons.MessageOutlined
    }
  ]
};

export default contact;

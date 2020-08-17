import { notification } from 'antd';

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
};

export const openNotification = (title, description, type) => {
  notification.open({
    message: title,
    description: description,
    type: type
  });
};

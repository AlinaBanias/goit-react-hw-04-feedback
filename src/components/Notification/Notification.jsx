import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

export default Notification;

PropTypes.propTypes = {
  message: PropTypes.string.isRequired,
};
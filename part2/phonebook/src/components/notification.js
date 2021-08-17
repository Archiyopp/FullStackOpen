const Notification = ({ message, isSuccess }) => {
  if (message === null) {
    return null;
  }

  return isSuccess ? (
    <div className="notification">{message}</div>
  ) : (
    <div className="error">{message}</div>
  );
};

export default Notification;

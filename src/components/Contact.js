import PropTypes from 'prop-types';
import "../components/Contact.css";


function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="women" />
      <div className="status">
        <p className="name"><strong>{props.name}</strong></p>
        <p className='status-text'><span className={props.online ? 'status-online' : 'status-offline'}></span>{props.online ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};
export default Contact;
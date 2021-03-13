import PropTypes from 'prop-types';
import React from 'react';
import "../components/Contact.css";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true
    };
  }

  render () {
    return <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt="women" />
      <div className="status">
        <p className="name"><strong>{this.props.name}</strong></p>
        <p className='status-text' onClick={(event) => {
          const isOnline = !this.state.online;
          this.setState({ online: isOnline});
        }}><span className={this.state.online ? 'status-online' : 'status-offline'}></span>{this.state.online ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Contact;
import "../components/Contact.css";

const name = 'Felecia Austin';
const avatar = 'https://randomuser.me/api/portraits/women/76.jpg';
const online = true;


function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="women" />
      <div className="status">
        <p className="name"><strong>{name}</strong></p>
        <p className='status-text'><span className={online ? 'status-online' : 'status-offline'}></span>{online ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  );
}

export default Contact;

import LinkedInIcon from "../assets/images/InBug-White.png"
import MailIcon from "../assets/images/mail.svg"

function Info() {
    return (
        <header className="info">
            <img 
                className="profile-pic" 
                src="src/assets/images/profile_pic_mini.png" 
                alt="Profile" 
            />
            <h1 className="name">Paul Saulle</h1>
            <h2 className="title">Frontend Developer</h2>
            <p className="website">paul.dev</p>
            <div className="contact-buttons">

                <a href="mailto:psaulle92@gmail.com" className="email-button">
                    <img className="mail-icon" src={MailIcon} alt="Email icon" /> Email
                </a>

                <a href="https://www.linkedin.com/in/paul-saulle-582b9b170" className="linkedin-button" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin-icon" src={LinkedInIcon} alt="LinkedIn icon" /> LinkedIn
                </a>

            </div>

        </header>
    )
}

export default Info
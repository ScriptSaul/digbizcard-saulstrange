import discordIcon from '../assets/images/discord.svg'
import githubIcon from '../assets/images/github.svg'
import twitterIcon from '../assets/images/x.svg'
import instagramIcon from '../assets/images/instagram.svg'
        

function Footer() {
  return (
    <footer className="footer">
        <a 
        href="https://discord.com/users/343180968728854529" 
        aria-label="Discord Profile" 
        target="_blank" 
        rel="noopener noreferrer">
            <img src={discordIcon} alt="Discord Icon" className="discord-icon" />
        </a>

        <a 
        href="https://github.com/ScriptSaul" 
        aria-label="GitHub Profile" 
        target="_blank" 
        rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Icon" className="github-icon" />
        </a> 

        <a 
        href="https://x.com/SaulStrange92" 
        aria-label="Twitter Profile" 
        target="_blank" 
        rel="noopener noreferrer ">
            <img src={twitterIcon} alt="Twitter Icon" className="twitter-icon" />
        </a>

        <a 
        href="https://www.instagram.com/saulstrange/" 
        aria-label="Instagram Profile" 
        target="_blank" 
        rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram Icon" className="instagram-icon" />
        </a>   
    </footer>
)
}

export default Footer
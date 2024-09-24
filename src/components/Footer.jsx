import twitter from '../assets/x-social-media-black-icon.svg'
import github from '../assets/github-icon.svg'


function Footer() {
  return (
    <div className="footer">
        <a href="https://x.com/Notjust_You"><img src={twitter} alt="nyte-decoder" /></a>
        <a href="https://github.com/nytewalker"><img src={github} alt="nyte-walker" /></a>
    </div>
  )
}

export default Footer
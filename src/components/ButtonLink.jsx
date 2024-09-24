import emailIcon from '../assets/envelope-icon.svg';
import LinkedIcon from '../assets/linkedin-square-icon.svg'

function ButtonLink() {
  return (
    <div className="button">
        <a href="mailto:azubuike684@gmail.com" className="email">
            <img src={emailIcon} alt="email-icon" />
            Email
        </a>

        <a href="https://www.linkedin.com/in/azubuike-osemene-632488320?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdxZ4wXebTpq39g7YKVOQ2w%3D%3D" className="linkedin">
            <img src={LinkedIcon} alt="email-icon" />
            LinkedIn
        </a>


    </div>
  )
}

export default ButtonLink
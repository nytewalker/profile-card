import ButtonLink from './components/ButtonLink'
import Image from './components/Image'
import ProfileName from './components/ProfileName'
import About from './components/About'
import Footer from './components/Footer'

function Card() {
  return (
    <div className="Card">
        <Image />
        <ProfileName/>
        <ButtonLink/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Card
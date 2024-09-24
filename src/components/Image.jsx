import pic from '../assets/profile pic.jpeg'

function Image() {
  return (
    <div className='image-container'>
        <img src={pic} alt="profile picture" />
    </div>
  )
}

export default Image
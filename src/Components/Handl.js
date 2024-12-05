import styles from './Handl.css'
const Handl = () => {
  return (
    <div className='handlmain'>
        <div className='oh'>
            <h1>Opening Hours</h1>
        </div>
        <div  className='hours'>
            <div className='hours-item'>
                <h2>Monday - Friday</h2>
                <h3>11AM-9PM</h3>
            </div>
            <div className='hours-item'>
            <h2>Saturday</h2>
            <h3>11AM-9PM</h3>
            </div>
            <div className='hours-item'>
            <h2>Sunday</h2>
            <h3>11AM-9PM</h3>
            </div>
            
        </div>
        <div className='oh location'>
                <h2>Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222.88543626296348!2d87.9911221!3d26.6431356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bb452ce10f89%3A0x4f81978fc816e37b!2sHype%20Lounge%20%26%20Bar!5e0!3m2!1sen!2snp!4v1733378522136!5m2!1sen!2snp" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
    </div>
  )
}

export default Handl
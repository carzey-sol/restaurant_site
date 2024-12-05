import styles from './Contact.module.css'
const Contact = () => {
  return (
    <div className={styles.maindiv}>
    <h1>Contact Us</h1>
    <div className={styles.content}>
        <form className={styles.form}>
            <label>First Name:</label>
            <input type="text" name="firstName" />
            <br />
            <label>Last Name:</label>
            <input type="text" name="lastName" />
            <br />
            <label>Email:</label>
            <input type="email" name="email" />
            <br />
            <label>Phone:</label>
            <input type="text" name="phone" />
            <button type='submit'>Submit</button>
        </form>
        <div className={styles.image}>
            <img src="/images/contact.jpg" alt="Contact" />
        </div>
    </div>
</div>

  )
}

export default Contact
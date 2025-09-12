import React, { useState } from 'react'
import '../styles/NewsLetter.css'

const NewsLetter = () => {

  const [showA, setShowA] = useState(false);

  const [email, setEmail] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault()
    setEmail('')
    setShowA(true)
    setTimeout(() => {
      setShowA(false)
    }, 3000);
  }



  return (
    <div className='newsletter-container'>
      <h2>Subscribe to the newsletter</h2>
      <h4>Get a weekly digest of our most important stories direct to your inbox.</h4>
      
      <form className='newsletter-form'>
        <input type='text' placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)} value={email} />
        <button onClick={handleSubmit} >Subscribe</button>
      </form>
      {showA ?
        <div className='newsletter-success'>
          <p>Thank you for subscribing!</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      :""}
      <p class="disclaimer"> We respect your privacy. By subscribing, you agree to receive our newsletter.
  Read our <span className="highlight">Privacy Policy</span> for more details.
</p>
    </div>
  )
}

export default NewsLetter
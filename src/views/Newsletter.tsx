import React, { FormEvent } from 'react';

const Newsletter: React.FC = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className='newsletter'>
      <div className="newsletter-background">
        Newsletter
      </div>
      <h1>Subscribe Our Newsletter</h1>
      <p>Get the latest information and promo offers directly</p>
      <form>
        <input type='email' placeholder='Input email address'></input>
        <button type='submit'>Get Started</button>
      </form>
    </section>
  );
};

export default Newsletter;

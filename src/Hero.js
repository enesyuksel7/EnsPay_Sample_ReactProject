import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Ödeme işlemlerinde<br />
            çağın ötesinde
          </h1>
          <p>
            Milyonlarca şirket ve girişimcinin ihtiyaçlarını karşılayabilecek, 500'ün üzerinde yazılım ve API içeren
            ödeme yöntemleri kullanılan ve yönetimini sağlayan yeni nesil uygulama!
          </p>
          <button className='btn'>Şimdi başla</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;

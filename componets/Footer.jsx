'use client'

import styles from '../src/styles/footer.module.css'
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Footer() {

  const videoRef = useRef(null);

  useEffect(() => {
    // Iniciar a reprodução do vídeo após a montagem do componente no cliente
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.filter}>
        <video className={styles.video} ref={videoRef} src='/video/video1.mp4' loop muted autoPlay></video>
        <div className={styles.container}>
          <div className={styles.callout}>
            <h2>O que esta esperando para visitar o Amazonas?</h2>
            <a href="#home">Contate-nos</a>
          </div>
          <div className={styles.social}>
            <p className={styles.brand}>Manaus turismo</p>
            <p>Nossas redes Sociais</p>
            <a href="https://www.linkedin.com/in/thiago-aguiar-335b6a186/" target='blank'>
              <Image src='/assets/contact/instagram.svg' width={50} height={40} alt='turism.alt' />
              <Image src='/assets/contact/linkedin.svg' width={50} height={40} alt='turism.alt' />
              <Image src='/assets/contact/twitter.svg' width={50} height={40} alt='turism.alt' />
              <Image src='/assets/contact/facebook.svg' width={50} height={40} alt='turism.alt' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
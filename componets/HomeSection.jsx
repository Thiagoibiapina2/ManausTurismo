import styles from '../src/styles/HomeSection.module.css'

export default function HomeSection() {
  return (
    <section id='home' className={styles.home}>
      <div className={styles.home_card}>
       <div className={styles.header}>
       <p className={styles.brand}>Manaus turismo</p>
       <nav className={styles.nav}>
          <div className={styles.home_btn}>
            <a href='#explore'>Explorar</a>
            <a href='#contact'>Contato</a>
          </div>
        </nav>
       </div>
        <div className={styles.info_home}>
          <h1>Manaus</h1>
          <p> Desfrute de um dia explorando as maravilhas de Manaus. Embarque em um emocionante passeio de barco pelo Rio Amazonas, partindo de sua acomodação até uma marina próxima. Navegue pelas águas serenas, admirando a rica paisagem das margens do rio. Aproveite essa oportunidade única para vivenciar a conexão entre a cidade e sua natureza exuberante.</p>
          <a  href='#explore'>explorar</a>
        </div>
      </div>
    </section>
  )
}
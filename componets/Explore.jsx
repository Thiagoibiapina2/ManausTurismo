import styles from '../src/styles/explore.module.css'

import Image from "next/image"

export default function Explore() {
  const Turisms = [
    {
      title: '1. Teatro Amazonas',
      content: `Primeiramente, vamos falar do símbolo da época áurea de Manaus, vivida durante o ciclo da borracha, e um dos cartões-postais da cidade. O Teatro Amazonas foi inaugurado em 1896 e é palco para os mais variados espetáculos. O espaço já recebeu óperas, musicais, peças de teatro, shows de cantores líricos e populares, festivais, grupos de dança, bandas, corais e orquestras, por exemplo. Além disso, dispõe de um rico acervo histórico ou seja, também funciona como um museu.  
      De quebra, tem a seu favor uma arquitetura bem bonita, com influências renascentistas. O destaque, porém, vai para a cúpula, cujas mais de 30 mil peças prestam uma homenagem à bandeira brasileira.`,
      image: '/assets/explore/teatroAmazonas.jpg',
      alt: 'Teatro Amazonas'
    },
    {
      title: '2. Mercado Municipal Adolpho Lisboa, o Mercadão',
      content: `Inspirado no antigo mercado Les Halles, de Paris, e datado de 1883, foi construído em art noveau e tem uma estrutura de ferro desenhada por ninguém menos do que Gustave Eiffel. Reconheceu o sobrenome? Pois é, trata-se do engenheiro francês que deu nome à Torre Eiffel. Embora tenha sido fechado para obras de restauro em 2006, foi reinaugurado em 2013. 
      Fica às margens do Rio Negro, no coração de Manaus, e representa um dos principais espaços de comercialização de produtos típicos da região. Portanto, o point é imperdível porque permite conhecer um pouco da cultura do povo amazonense, refletida em produtos regionais (como peixes e frutas), artesanato e especiarias. Lembre-se: o Mercadão tem duas fachadas diferentes, sendo que uma fica de frente para o Rio Negro e, a outra, para a via pública.  `,
      image: '/assets/explore/mercadoAdolphoLisboa.jpg',
      alt: 'Mercado Municipal Adolpho Lisboa'
    },
    {
      title: '3. Centro Cultural Palácio Rio Negro',
      content: `Construído com o objetivo de servir de residência para o alemão Karl Waldemar Scholz, conhecido como o Barão da Borracha, o Centro Cultural Palácio Rio Negro depois passou a funcionar como sede do governo amazonense.  
      Após algumas reformas e adaptações, tornou-se um centro cultural e, por isso mesmo, ainda hoje conta com exposições fixas e temporárias, recitais, lançamentos de livros e uma série de outras atividades culturais. Por fim, também guarda diversas relíquias políticas e fotos dos governantes do estado, o que é perfeito para quem quer se aprofundar na história da região. `,
      image: '/assets/explore/palacioRioNegro.jpg',
      alt: 'Centro Cultural Palácio Rio Negro'
    },
    {
      title: '4. Bosque da Ciência',
      content: `Ideal para quem se amarra em passeios tranquilos e relaxantes, o Bosque da Ciência é uma área do Instituto Nacional de Pesquisas da Amazônia (INPA). Dono de uma exuberante vegetação florestal e habitat de inúmeros animais, é dedicado ao conhecimento científico e educacional, bem como para o lazer. Isso porque o local promove um encontro com a natureza sem, contudo, fazer com que o(a) visitante tenha de se deslocar do centro de Manaus. 
      Apesar de o Bosque da Ciência estar temporariamente fechado, vale ficar de olho no site e na programação, já que, ao longo do ano, são realizados muitos eventos abertos ao público.   `,
      image: '/assets/explore/bosqueDaCiencia.jpg',
      alt: 'Bosque da Ciência'
    },
    {
      title: '5. Praia da Ponta Negra',
      content: `O nome é o mesmo da icônica praia de Natal, no Rio Grande do Norte, mas não se engane: essa fica mesmo em Manaus. Inclusive, é a mais famosa da cidade e muito procurada pelos nativos. Ela não tem mar: ali, o papel do oceano é feito pelas águas mornas do Rio Negro. Aliás, a praia só se forma quando o rio está baixo, então já vá pra lá tendo isso em mente.  
      Um de seus diferenciais está no calçadão, lotado de atrativos. Entre eles, cabe ressaltar um anfiteatro (ponto de apresentações artísticas brazucas e gringas), opções de restaurantes, mirantes e píer, por exemplo. A região também é ótima para caminhar tranquilamente, praticar exercícios físicos e assistir a um bonito pôr do sol.   `,
      image: '/assets/explore/PraiaDaPontaNegra.jpg',
      alt: 'Praia da Ponta Negra'
    },
    {
      title: '6. Igreja São Sebastião',
      content: `Bem próxima do Teatro Amazonas, no Centro Histórico da cidade, a Igreja São Sebastião é um ponto imperdível para turistas religiosos. Ela nasceu em 1859 como uma capela de madeira construída pelo grupo de fiéis Irmandade de São Sebastião. No decorrer dos anos, contudo, foi ganhando uma arquitetura eclética, com influências góticas, neoclássicas e renascentistas. O resultado disso é um edifício imponente, que vale a pena ser conferido ao vivo e a cores.  
      Curiosidade: o badalar dos sinos ao longo do dia tem significados distintos e bem importantes para os(as) católicos(as). Ao meio-dia, hora do almoço, as 12 badaladas lembram as pessoas de agradecer e orar pelo alimento à mesa; às 18h, o momento é de prece pela hora do jantar. Aos domingos de manhã e às 17h45, o sino ressoa conclamando as pessoas para a missa. Por outro lado, o badalar é diferente quando alguém importante para a comunidade falece, uma vez que o sino assume uma melodia fúnebre. `,
      image: '/assets/explore/igrejaSebastiao.jpg',
      alt: 'Igreja São Sebastião'
    },
    {
      title: '7. Museu da Amazônia (Musa)',
      content: `Maior centro natural da cidade, o Musa nada mais é do que um museu vivo. Por estar localizado na Reserva Adolpho Ducke, promove uma imersão e tanto na biodiversidade amazônica. Inclusive, abriga o Jardim Botânico Adolpho Ducke, cuja riqueza de fauna e flora tem sido alvo de estudos há mais de 60 anos por parte do Instituto Nacional de Pesquisas da Amazônia (INPA). 
      Sabe por quê? Simples! Mais do que ampliar o conhecimento acerca de sua exuberância, os estudos ajudam a conservar e a valorizar o meio ambiente. O Musa abriga ainda 3 km de trilhas, biblioteca, laboratórios, aquários, orquidário e borboletário, bem como uma torre de 42 metros de altura, da qual se tem acesso a uma vista panorâmica da floresta. Em outras palavras, o local visa unir a ciência ao deslumbramento causado pela natureza. Portanto, caso esteja decidindo o que fazer em Manaus, não deixe de incluir o Musa no roteiro.`,
      image: '/assets/explore/jardimBotanicoDeManaus.jpg',
      alt: 'Museu da Amazônia'
    },
    {
      title: '8. Museu do Seringal Vila Paraíso',
      content: `Criado inicialmente para as gravações do filme “A Selva”, uma adaptação do livro de mesmo nome do escritor português Ferreira Castro, o Museu do Seringal é uma verdadeira viagem até o auge do ciclo da borracha. Isso porque, por meio de visitas guiadas por experts, apresenta todo o processo de extração e fabricação da borracha e, também, as colossais discrepâncias entre o modo de vida dos seringueiros (responsáveis por extrair a borracha) e os seringalistas (donos do seringal). Spoiler: dá até para participar do processo de colheita da borracha.  
      Embora o acesso não seja dos mais simples, já que fica em uma área afastada do centro, quem visita o lugar concorda que ele deve constar entre as dicas de o que fazer em Manaus. Anote aí: para visitá-lo, você deve se dirigir até a Marina do Davi e comprar o ingresso em uma lancha. O trajeto leva um pouco mais de 30 minutos. O ingresso ao museu é pago e a visita guiada dura cerca de uma hora. `,
      image: '/assets/explore/museuDoSeringalVila.jpg',
      alt: 'Museu do Seringal Vila Paraíso'
    },
  ]

  return (
    <section id='explore' className={styles.explore}>
      {Turisms.map((turism) => (
        <ul className={styles.article}>
          <li>
            <h2>{turism.title}</h2>
            <p>{turism.content}</p>
            <Image src={turism.image} width={1200} height={600} alt={turism.alt} />
          </li>
        </ul>
      ))}
    </section>
  )
}
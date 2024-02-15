import '../styles/sobre.css'
import raifran from '../img/raifran.svg'
import {Link} from "@mui/material";
import nextSection from "../img/next_section.svg";

export default function SobreSection() {
  return (
    <section className='containerSobreSection' id='sobre'>
      <h1 className='titleSectionSobre'>Sobre</h1>

      <div className='content'>
        <div className='divFotoRaifran'>
          <img src={raifran} className='fotoRaifran' alt='Foto do Raifran de Perfil'/>
        </div>
        <div className='divResumo'>
          <h2 className='resumo'>
            Atuo como programador e desenvolvedor há 5 anos, desde o início da minha carreira em 2018.
             Meu interesse inicial em compreender o funcionamento por trás das cores e elementos visuais na tela me 
             levou a explorar conceitos básicos de programação usando C++, combinados com conhecimentos em eletrônica 
             para prototipar projetos com Arduino.
            <br />
            <br />
            Minha incursão no desenvolvimento web começou no final de 2018, quando aprendi Python e Django.
            Durante meu estágio em 2019, adquiri vasta experiência participando do desenvolvimento de diversas soluções. 
            Desde então, venho trabalhando com essa stack no desenvolvimento web, aprimorando minhas habilidades ao longo dos anos.
            <br />
            <br />
            Em 2020, adentrei o universo DevOps, realizando cursos rápidos e, em seguida, aplicando meus conhecimentos na prática. 
            Atualmente, gerencio servidores em diversas infraestruturas, como AWS, Digital Ocean, Ovh e Linode, utilizando ferramentas 
            como o Zabbix para instalação, migração e manutenção.
            <br />
            <br />
            Com a área Mobile iniciei em 2022, estudei React Native e fiz cursos introdutórios de UI/UX para aplicativos
            facilitando o desenvolvimento das minhas aplicações.
            <br />
            <br />
            No campo do desenvolvimento mobile, iniciei em 2022, estudando React Native e aprimorando minha compreensão de UI para aplicativos, facilitando o desenvolvimento de minhas aplicações.
            Atualmente, atuo como freelancer, estabelecendo parcerias e executando tarefas em todas as áreas mencionadas: desenvolvimento mobile, web, UI mobile e DevOps.
          </h2>
        </div>
      </div>

      <div style={{marginTop: 45}}>
        <Link href='#servico'>
          <img src={nextSection} alt='Próximo tópico'/>
        </Link>
      </div>
    </section>
  )
}
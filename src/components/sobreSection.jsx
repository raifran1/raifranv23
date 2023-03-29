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
            Sou desenvolvedor há 5 anos ativo no mercado. Minha carreira iniciou-se a partir do interesse em saber como
            funcionavam as cores e elementos bonitos que apareciam na tela de um celular ou computador assim fui atrás de
            começar pequenas investidas como o curso que fiz em 2018, nele aprendi conceitos básicos de programação
            utilizando linguagem C++ e conhecimentos em eletrônica consegui prototipar projetos desenvolvidos com Arduino.
            <br />
            <br />
            No desenvolvimento web iniciei no final do ano de 2018 aprendendo Python e Django, juntamente com o estágio
            em 2019 consegui diversos conhecimentos práticos, participando do desenvolvimento de várias soluções e
            durante todo este período de 2019 até hoje trabalho com essa stack no desenvolvimento web.
            <br />
            <br />
            No Devops iniciei em 2020 onde fiz alguns cursos rápidos e logo em seguida iniciei a prática. Hoje trabalho
            com servidores utilizando infraestruturas como AWS, Digital Ocean, Ovh, Linode. Aplicando conhecimentos para
            instalação, migração e manutenção com utilização do Zabbix.
            <br />
            <br />
            Com a área Mobile iniciei em 2022, estudei React Native e fiz cursos introdutórios de UI/UX para aplicativos
            facilitando o desenvolvimento das minhas aplicações.
            <br />
            <br />
            Atualmente trabalho como freelancer com algumas parcerias executando tarefas em todas as áreas citadas, com
            desenvolvimento mobile, web, UI mobile/web e devops.
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
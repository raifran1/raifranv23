import '../styles/sobre.css'
import raifran from '../img/raifran.svg'

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
            Programador e desenvolvedor há 4 anos ativo no mercado. Tive um interesse em aprender como as coisas
            funcionavam por trás das cores e elementos bonitos que apareciam na tela quando iniciei a carreira em 2018
            onde aprendi conceitos básicos de programação utilizando linguagem C++ e junto com conhecimento eletrônica
            consegui prototipar projetos desenvolvidos com Arduino.
            <br />
            <br />
            Já no desenvolvimento web comecei no final do ano de 2018 aprendendo python e django, e junto com o estágio
            em 2019 consegui diversos conhecimentos práticos participando no desenvolvimento de várias soluções e
            durante todo este período de 2019 até hoje trabalho com essa stack no desenvolvimento web.
            <br />
            <br />
            No Devops iniciei em 2020 onde fiz alguns cursos rápidos e logo em seguida iniciei a prática e hoje trabalho
            com servidores utilizando infraestruturas como AWS, Digital Ocean, Ovh, Linode. Aplicando conhecimentos para
            instalação, migração e manutenção com utilização do Zabbix.
            <br />
            <br />
            E desenvolvimento Mobile com inicio em 2022, estudei react native e um pouco de UI para aplicativos para
            facilitar o desenvolvimento das minhas aplicações.
            <br />
            <br />
            Atualmente trabalho como freelancer com algumas parcerias executando tarefas em todas as áreas citadas, com
            desenvolvimento mobile, web, UI mobile/web e devops.
          </h2>
        </div>
      </div>
    </section>
  )
}
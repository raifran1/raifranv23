import '../styles/home.css'
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PreviewIcon from '@mui/icons-material/Preview';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

export default function HomeSection() {
  return (
    <section className='containerHomeSection' id='home'>
      <div>
        <h1 className='textMain'>Raifran Lucas</h1>
        <hr className='linhaDivide'/>
        <h1 className='textFuncao'>Fullstack Developer</h1>
      </div>
      <div className='divFuncoes'>
        <div className='highlightFuncoes'>
          <StorageIcon className='iconFuncao' />
          <h1 className='textFuncao'>Especialista em servidores VPS </h1>
        </div>

        <div className='highlightFuncoes'>
          <DeveloperModeIcon className='iconFuncao' />
          <h1 className='textFuncao'>Desenvolvedor Mobile </h1>
        </div>

        <div className='highlightFuncoes'>
          <PreviewIcon className='iconFuncao' />
          <h1 className='textFuncao'>Desenvolvedor Web </h1>
        </div>

        <div className='highlightFuncoes'>
          <ViewQuiltIcon className='iconFuncao' />
          <h1 className='textFuncao'>UI para dispositivos móveis </h1>
        </div>
      </div>
    </section>
  )
}
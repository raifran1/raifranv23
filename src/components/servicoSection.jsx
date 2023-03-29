import '../styles/servico.css';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';

import StorageIcon from '@mui/icons-material/Storage';
import PreviewIcon from '@mui/icons-material/Preview';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import PeopleIcon from '@mui/icons-material/People';


export default function ServicoSection() {
  return (
    <section className='containerServicoSection' id='servico'>
      <h1 className='titleSectionServico'>Serviços</h1>
      <div className='divServices'>
        <div className='service'>
          <DeveloperModeIcon className='iconService' />
          <h2 className='textService'>Desenvolvimento mobile</h2>
        </div>
        <div className='service'>
          <ScreenSearchDesktopIcon className='iconService' />
          <h2 className='textService'>SEO manager</h2>
        </div>
        <div className='service'>
          <StorageIcon className='iconService' />
          <h2 className='textService'>Gestão de infraestrutura</h2>
        </div>

        <div className='service'>
          <PreviewIcon className='iconService' />
          <h2 className='textService'>Desenvolvimento de sites</h2>
        </div>
        <div className='service'>
          <ViewQuiltIcon className='iconService' />
          <h2 className='textService'>UI mobile</h2>
        </div>
        <div className='service'>
          <PeopleIcon className='iconService' />
          <h2 className='textService'>Gestão de equipe</h2>
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'
import twitterPfp from 'public/assets/images/twitter-pfp-PoP-2.png';
import winningIconMattIsGoingDown from 'public/assets/images/winningIcon.png';
import DemoComponent from '../src/Components/DemoComponent/DemoComponent';

export default function App() {
  let background_cubes= {
    backgroundImage: `url(/assets/images/Hero_Cubes_Only.png)`
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='background_blocks' style={background_cubes}></div>
      <Image className="hidden_not_so_hidden_image" src={winningIconMattIsGoingDown} alt="Winning Dealer"width={50} height={50}/>
      <div className='title_pop'>
        <Image src={twitterPfp}alt="Proof of Play Interview"width={50} height={50}/>
        <div className='title_text'>Proof of Play Interview</div>
      </div>

      <DemoComponent />


    </main>
  );
}
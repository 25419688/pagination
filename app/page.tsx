import Image from 'next/image'
import './globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Home() {
  return (
    <div className="body">
      {/* Le contenu de votre page */}
      <div className="container">
        <button className="button">Sign In</button>
        <button className="button">Sign Up</button>
      </div>
      <div>
        <Image
          src="/grp.png"
          width={600}
          height={300}
          alt="Picture of the author"
          className="image"
        />
      </div>
      <div>
        <Image
          src="/paginationBleu.png"
          width={100}
          height={50}
          alt="Picture of the author"
          className="pagination"
        />
      </div>
      <div className="rectangle">
      <div className="rectangle-header">
        <button>Detector de plagiat</button>
        <button>Detector IA</button>
      </div>
        <input type="text" placeholder="Entrez votre texte"/>
      </div>
      <div className="text-work"><h1>How it Works ?</h1>
      <p> Resolving neglected sir tolerably but existence conveying for. </p>
      <p>Day his put off unaffected literature partiality inhabiting. </p>
      </div>
      <div className="work right">
            <div className="inner-rectangle-mini-right"></div>
      </div>
      <div className="work left"> 
          <div className="inner-rectangle"> 
             <div className="side-bar"></div> 
             <div className="side-bar-long"></div>
             <img src="/homme4.jpg" alt="Image" className="image-mini"></img>
             <div className="side-bar-mini"></div>
          </div>
          <div className="inner-rectangle-mini">
             <img src="/check.jpg" alt="Image" className="image-icone"></img>
             <div className="side-bar-icone"></div>
          </div>
          <div className="texte-centre-inteligence">
              
          </div>
      </div>
      <div className="work bottom"> 
          <div className="inner-rectangle"></div>
      </div>

      
    </div>

  );
}

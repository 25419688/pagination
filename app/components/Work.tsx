import Image from 'next/image'
export default function Accueil(){
    return(
        <><div className="text-work"><h1>How it Works ?</h1>
            <p> Resolving neglected sir tolerably but existence conveying for.</p>
            <p>Day his put off unaffected literature partiality inhabiting.</p>
        </div><div className="work right">
                <div className="inner-rectangle-mini-right"></div>
            </div><div className="work left">
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
            </div><div className="work bottom">
                <div className="inner-rectangle"></div>
            </div></> 
    )
}
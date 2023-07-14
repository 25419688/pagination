import Image from 'next/image'
export default function PlagiatD(){
    return(
        <section>
            <div className="rectangle">
              <div className="rectangle-header">
                  <button>Detector de plagiat</button>
                  <button>Detector IA</button>
             </div>
             <input type="text" placeholder="Entrez votre texte"/>
            </div>
        </section>
    )
}
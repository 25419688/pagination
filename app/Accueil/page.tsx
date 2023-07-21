import Image from 'next/image'
export default function Accueil(){
    return(
<section>
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
    </div> 
</section>
    )
}
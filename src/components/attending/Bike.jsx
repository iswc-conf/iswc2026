import BaseContainer from '../general/BaseContainer'
import DeclareSoon from '../general/declareSoon'
import Header from '../general/Header'
import SubHeader from '../general/SubHeader'
import UnderlineHeader from '../general/UnderlineHeader'
import ExternalLink from '../general/ExternalLink'
import { theme } from "../../theme";
import SubTitle from '../general/SubTitle'
import BANNER from "../../data/bike/BANNER.jpg"
import MAPPA from "../../data/bike/MAPPA.jpg"
import {
bikePhotos
} from "../../data/tourism";

/**
 * A photo, or a labelled placeholder while none is supplied. Pass a scene
 * (`{ src, alt }`) to show a photo; omit it to show the placeholder.
 *
 * @param {'wide'|'tall'|'row'} shape  Aspect ratio of the slot.
 */
const Photo = ({ scene, alt, caption, shape = "wide" }) => (
  <figure >
    {scene ? (
      <img src={scene} alt={scene.alt} loading="lazy" />
    ) : (
      <div className="iswc-photo__slot" role="img" aria-label={`Photo placeholder: ${alt}`}>
        <span>{alt}</span>
      </div>
    )}
    {caption && <figcaption className="iswc-figure__caption">{caption}</figcaption>}
  </figure>
);

/** Grid of destination cards (day trips, cathedral towns). */
const PlaceGrid = ({ places }) => (
  <div className="iswc-place-grid">
    {places.map((place) => (
      <article className="iswc-place-card" key={place.name}>
      
        <img className="iswc-place-card__image" src={place.src}  loading="lazy" />
  
     
      </article>
    ))}
  </div>
);

export const Bike = () => {
    return (
        <BaseContainer>
                <Header>Pedal-are, oh oh!</Header>
                <SubTitle>(nel blu dipinto di blu - ISWC2026 bike ride) <br></br>In the blue, painted blue, on two wheels</SubTitle>

                <center><p><b>Volare... not today. Today we pedal. <br></br>
Cantare... oh, that we'll do, all along the coast road.</b>
</p></center>


<center><p>Is there a better way to start a day in Bari? Meeting point outside the Nicolaus Hotel, the sun climbing out of the Adriatic, salt in the air, and a row of bikes ready to bite into the tarmac. A last steaming espresso, a few jokes about the route ahead, and off we go, toward Polignano, following the blue thread of the coastline.</p></center>
                

                   <Photo
                      scene={BANNER}
                      shape="wide"
                    />


                    <UnderlineHeader>In the blue, painted blue</UnderlineHeader>
                <p>Before we even leave the city, the Bari seafront gives us the first taste of what's to come. We roll along the elegant lungomare, one of the longest and most beautiful in Italy, the old town waking up on one side and the open sea on the other. Then the road opens up, and the sea takes over completely. The Adriatic coast road is exactly what it promises: kilometer after kilometer where the blue of the sky blurs into the blue of the sea, just like Modugno sang. He was a son of this land, after all, born just down the coast in Polignano.</p>

                    <UnderlineHeader>Stops along the coast</UnderlineHeader>

                    <p>The best part of this route is that it never gets dull. Every few kilometers, there's a reason to slow down (or to take one photo too many):</p>

         <ul>
                <li><b>The Bari seafront</b> - our launch pad, gliding past the lungomare with the sea already calling us south.</li>
<li><b>Torre a Mare</b> - the first breather, its watchtower reminding us this coast has centuries of stories to tell.</li>
<li><b>Cozze and Mola di Bari</b> — names that taste of the sea. The smell of fried fish becomes a serious temptation here.</li>
<li><b>The hidden coves</b> - little inlets where the water is so clear you want to drop everything and dive in.</li>
<li><b>Polignano a Mare</b> - the jewel of the ride. Dramatic cliffs plunging straight into turquoise water, whitewashed houses clinging to the edge, and the birthplace of Domenico Modugno himself. There's even a statue of him by the sea, arms wide open, forever ready to fly. The bikes come to a stop, the helmets come off, and the smiles say it all.</li>

            </ul>

            <p>The pace is the right one for a group ride: nobody races, nobody gets left behind. We chat, we laugh, we stop whenever the view demands it.</p>


<UnderlineHeader>Cantare, oh oh oh oh!</UnderlineHeader>

<center>
   <Photo
                      scene={MAPPA}
                      shape="tall"
                    /></center>

<p>Around <b>80 kilometers</b> of coastline (40 there and 40 back), of good honest sweat, of sky and sea chasing each other. We didn't quite fly, but pedaling along this road, we came pretty close.</p>
       
       <center><p><em>Volare, oh oh! <br></br> Pedal-are, oh oh oh oh!  <br></br>In the blue, painted blue... <br></br>From Bari to Polignano and back. </em></p></center>
       
<UnderlineHeader>Before you go: the practical bits</UnderlineHeader>

<p className="iswc-callout">The ride takes place on <b>October 24th, 2026.</b> </p>

<p>
No bike? No problem. Bikes can be rented by <ExternalLink href="https://veloservice.org/en/">Velo Service, Bari</ExternalLink>. They will be able to advise on the right gear for this ride. If you’re planning to attend please let us know by adding your name to this <ExternalLink href="https://docs.google.com/spreadsheets/d/11Io2NrVPtF6gin5B7qeloa__HyWJfVh77CoG7b3_7ac/edit?usp=sharing">list</ExternalLink>. This will facilitate communication for further updates.  
</p>

<p className="iswc-callout">
<b>One small disclaimer</b>: this is a coastal ride, and the sea doesn't always play nice. If the weather turns bad, we'll have to cancel for everyone's safety. We'll keep you posted as the date approaches, so keep an eye out for updates.   
</p>

<p>
Alternatively, you might fancy exploring <ExternalLink href="https://iswc2026.semanticweb.org/#/tourism">Bari and its monuments</ExternalLink>. The Nicolaus Hotel offers a bike rental service reserved for their guests only. We also collated a list of trusted <ExternalLink href="https://iswc2026.semanticweb.org/#/tourism">babysitting services</ExternalLink> for your convenience, in case you are attending with children.
    
</p>


<UnderlineHeader>Trip Photos</UnderlineHeader>

<PlaceGrid places={bikePhotos} />

        </BaseContainer>
    )

}
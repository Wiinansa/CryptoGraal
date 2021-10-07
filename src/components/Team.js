import imagesHakim from './images/hakim.png'
import imagesAnass from './images/anass.jpg'
import imagesEddine from './images/eddine.jpg'
import imagesAissetou from './images/aissetou.jpg'
import './Team.css'

function Team() {
    return(
        <div>
            <header>
                <h2>Notre équipe</h2>
            </header>
        <section id="emps">
            <figure class="emp">
                <img src={imagesHakim} class="member boy" />
                <figcaption>Hakim</figcaption>
            </figure>
            <figure class="emp">
                <img src={imagesAnass} class="member boy" />
                <figcaption>Anass</figcaption>
            </figure>
            <figure class="emp">
                <img src={imagesEddine} class="member boy" />
                <figcaption>Alley-Eddine</figcaption>
            </figure>
            <figure class="emp">
                <img src={imagesAissetou} class="member boy" />
                <figcaption>Aîssetou</figcaption>
            </figure>
        </section>
        </div>
    )
}
export default Team
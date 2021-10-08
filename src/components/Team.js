import imagesHakim from './images/Hakim.png'
import imagesAnass from './images/Anass.jpg'
import imagesEddine from './images/Eddine.jpg'
import imagesAissetou from './images/Aissetou.jpg'
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
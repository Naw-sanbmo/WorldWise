// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Cities hum with life, each street a story waiting to be discovered.
            Neon lights and old stone buildings whisper secrets of the past and
            dreams of the future. Every corner holds a chance encounter, a
            fleeting moment that could change everything. Walking through a city
            is like reading a novel written in motion, where you are both the
            traveler and the author.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}

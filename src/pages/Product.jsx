import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Traveling the world reveals the beauty of diverse cultures and new
            ways of life. Every place leaves a mark, from bustling cities to
            quiet landscapes. The journey teaches curiosity, patience, and the
            thrill of the unknown.
          </p>
          <p>
            Each trip connects us to people and stories beyond our borders.
            Simple gestures bridge languages and cultures. True travel is not
            just seeing the world—it’s feeling its shared heartbeat.
          </p>
        </div>
      </section>
    </main>
  );
}

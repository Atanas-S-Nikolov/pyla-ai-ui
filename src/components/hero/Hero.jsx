import "@/styles/hero/Hero.css";
import heroImg from "@/assets/league_of_legends__championship_kalista__render__by_popokupingupop90_da3nirj.png";

export default function Hero() {
  return (
    <section className="hero">
      <section className="headings">
        <h2>PylaAI</h2>
        <p>Gaming scripts</p>
      </section>
      <div>
        <img className='hero_img' src={heroImg} alt="Hero image"/>
      </div>
    </section>
  )
}

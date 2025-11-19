import Navbar from '../components/Navbar'

export default function APropos() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-28 pb-16 max-w-5xl mx-auto px-6 prose prose-invert">
        <h1 className="!text-4xl !font-bold">À propos</h1>
        <p>
          Energy4You est une entreprise française dédiée à la transition énergétique. Nous concevons, finançons et exploitons des solutions
          performantes pour réduire vos consommations et produire une énergie décarbonée.
        </p>
        <h2>Notre mission</h2>
        <p>
          Apporter des solutions mesurables, fiables et durables. Du conseil à l'exploitation, nous nous engageons sur les résultats avec des
          contrats de performance.
        </p>
        <h2>Nos engagements</h2>
        <ul>
          <li>Transparence et pédagogie</li>
          <li>Qualité d'exécution</li>
          <li>Innovation utile</li>
          <li>Résultats mesurables</li>
        </ul>
      </section>
    </div>
  )
}

export default function Legend() {
    return (
<section className="relative py-34 bg-black overflow-hidden">
  {/* Grille cyberpunk animée */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
  
  {/* Lignes de balayage néon */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_#00ffff] animate-pulse" />
    <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_#00ffff] animate-pulse" />
  </div>

  <div className="relative z-10">
    <h2 className="text-5xl font-bold text-center mb-40 font-mono">
      <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
        &gt; TOUT EST UNE QUESTION DE LOGIQUE...
      </span>
    </h2>

    <div className="w-[50%] m-auto p-6 rounded-xl bg-black bg-opacity-50 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.4),0_10px_25px_-5px_rgba(0,0,0,0.5)] border border-cyan-500 border-opacity-30 hover:border-cyan-500/80 transition-all duration-300 group">
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <p className="text-justify mx-auto text-gray-300 font-mono text-sm tracking-wide">
        [ SYSTEM.MSG ] &gt; En tant que développeur web, il est essentiel de maîtriser les enjeux de sécurité, de performance, de 
        maintenabilité et d&apos;expérience utilisateur, en adoptant des bonnes pratiques rigoureuses à chaque niveau : code, données, 
        infrastructure et interactions.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-center my-20 py-4 font-mono">
      <span className="text-cyan-400">&gt;</span> MES DERNIERS PROJETS RÉALISÉS POUR L&apos;ÉVEIL <span className="text-fuchsia-400">_</span>
    </h3>

    <div className="w-[90%] flex flex-col sm:flex-row items-center justify-between m-auto gap-6">
      <div className="w-[48%] p-6 rounded-xl bg-black bg-opacity-50 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.4),0_10px_25px_-5px_rgba(0,0,0,0.5)] border border-cyan-500 border-opacity-30 hover:border-cyan-500/80 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent" />
        <h4 className="text-xl font-bold text-justify mb-6 font-mono text-cyan-400">
          {`[ API ] > NodeJs + JavaScript + TypeScript`}
        </h4>
        <ul className="list-none space-y-2 text-justify">
          {[
            "MAJ des dates tous les vendredi de la 8ème semaine de cours, pour les 8 semaines suivantes.",
            "Remplacer les dates par '--/--/----' lors des vacances.",
            "Reboot des dates le vendredi de la première semaine de chaque nouvelle année, pour les 8 prochaines semaines de cours."
          ].map((item, idx) => (
            <li key={idx} className="text-gray-300 font-mono text-sm flex items-start gap-2">
              <span className="text-cyan-400 mt-1">&gt;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[48%] p-6 rounded-xl bg-black bg-opacity-50 backdrop-blur-sm shadow-[0_0_30px_rgba(255,0,255,0.4),0_10px_25px_-5px_rgba(0,0,0,0.5)] border border-fuchsia-500/30 hover:border-fuchsia-500/80 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-fuchsia-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-fuchsia-400 to-transparent" />
        <h4 className="text-xl font-bold text-justify mb-6 font-mono text-fuchsia-400">
          {`[ SPA ] > Vite.js + TypeScript + Express`}
        </h4>
        <ul className="list-none space-y-2 text-justify">
          {[
            "Afficher les tâches en fonction de leur priorité, du jour de la semaine, de la date et de l'heure.",
            "Afficher les tâches sous forme de calendrier en fonction du numéro de la semaine de l'année, avec possibilité de les modifier.",
            "Afficher les tâches terminées avec possibilité de les supprimer ou downloader le fichier au format .CSV",
            "Si le navigateur est fermé, possibilité de l'ouvrir avec affichage des tâches en l'état, lors de la fermeture."
          ].map((item, idx) => (
            <li key={idx} className="text-gray-300 font-mono text-sm flex items-start gap-2">
              <span className="text-fuchsia-400 mt-1">&gt;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
    )
};
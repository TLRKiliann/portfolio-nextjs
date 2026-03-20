export default function Legend() {
    return (
        <section className="relative py-34 text-white bg-linear-to-br from-slate-950 to-slate-800">

            <h2 className="text-5xl font-bold text-center mb-40">Tout est une question de logique...</h2>

            <div className="w-[50%] m-auto p-6 rounded-xl bg-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.4),0_10px_25px_-5px_rgba(0,0,0,0.5)] border border-blue-500/30">
                <p className="text-justify mx-auto">
                    En tant que développeur web, il est essentiel de maîtriser les enjeux de sécurité, de performance, 
                    de maintenabilité et d’expérience utilisateur, en adoptant des bonnes pratiques rigoureuses à chaque 
                    niveau : code, données, infrastructure et interactions.
                </p>
            </div>

            <h3 className="text-2xl font-bold text-center my-20 py-4">
                Mes derniers projets réalisés pour l'Eveil.
            </h3>

            <div className="w-[90%] flex flex-col sm:flex-row items-center justify-between m-auto">

                <div className="w-[48%] p-6 rounded-xl bg-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.4),0_10px_25px_-5px_rgba(0,0,0,0.5)] border border-blue-500/30">
                    <h4 className="text-xl font-bold text-justify mb-6">
                        API (NodeJs + JavaScript + TypeScript)
                    </h4>
                    <ul className="list-disc list-inside text-justify">
                        <li>
                            MAJ des dates tous les vendredi de la 8ème semaine de cours,
                            pour les 8 semaines suivantes.
                        </li>
                        <li>Remplacer les dates par "--/--/----" lors des vacances.</li>
                        <li>
                            Reboot des dates le vendredi de la première semaine de chaque nouvelle année,
                            pour les 8 prochaines semaines de cours.
                        </li>
                    </ul>
                </div>
                

                <div className="w-[48%] p-6 rounded-xl bg-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.4),0_10px_25px_-5px_rgba(0,0,0,0.5)] border border-blue-500/30">
                    <h4 className="text-xl font-bold text-justify mb-6">
                        SPA Cachier des charges (Vite.js + TypeScript + Express)
                    </h4>
                    <ul className="list-disc list-inside text-justify">
                        <li>Afficher les tâches en fontion de leur priorité, du jour de la semaine, de la date et de l'heure.</li>
                        <li>
                            Afficher les taches sous forme de calendrier en fonction du numéro de la semaine de l'année, 
                            avec possibilité de les modifier.
                        </li>
                        <li>Afficher les tâches terminées avec possibilité de les supprimer ou downloder le fichier au format .CSV</li>
                        <li>
                            Si le navigateur est fermé, possibilité de l'ouvrir avec affichage des tâches en l'état, 
                            lors de la fermeture.
                        </li>
                    </ul>
                </div>

            </div>

        </section>
    )
};
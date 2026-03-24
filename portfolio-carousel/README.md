# goals

- titres à ajuster
- image resized for carousel
- add text to Legend.tsx
- mobile version to review


          {/* Sous-titre avec effet scan */}
          <div className="relative my-12 sm:my-20 py-4">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent animate-scan" />
            <h3 className="text-base sm:text-2xl font-bold text-center font-mono relative px-4">
              <span className="text-cyan-400 animate-pulse inline-block mr-1 sm:mr-2">&gt;</span>
              <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                MES EXPÉRIENCES
              </span>
              <span className="text-fuchsia-400 animate-pulse inline-block ml-1 sm:ml-2 mb-4">_</span>
            </h3>
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent"
            />
          </div>

          {/* Cartes de projets */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-around m-auto gap-6 sm:gap-8 px-4 sm:px-0">
            {/* Carte Expériences */}
            <div className="w-full lg:w-[48%] group relative">
              <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-cyan-300 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
              <div className="relative p-4 sm:p-6 rounded-xl bg-black/80 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent group-hover:via-cyan-300 transition-all" />
                
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <h4 className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                      {`[ Expériences ]`}
                    </h4>
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-mono text-cyan-400/50 border border-cyan-400/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    Expériences
                  </div>
                </div>
                
                <p className="text-[10px] sm:text-xs font-mono text-cyan-400/70 mb-3 sm:mb-4 tracking-wider">
                  {`>_ Natif : Python3 + JavaScript + PHP`}
                  <br />
                  {`>_ Framework : React + Sveltkit + VueJs`}
                </p>
                
                <ul className="list-none text-justify space-y-2 sm:space-y-3">
                  {[
                    `Mon premier défi a été de faire un site web hébergé chez moi, tout en étant accessible depuis l'extérieur. J'ai utilisé un raspberry pour monter ma stack LAMP et j'ai installé un certificat HTTPS, ainsi qu'un DDNS. Le tout sécurisé avec HTTPS et une configuration serveur contre les vulnérabiltés.`,
                    `La WebApp 'Time-Track' figurant ci-dessus est une application de soins infirmiers que j'ai amélioré et que j'ai faite selon ma propre vision et d'après mon expérience dans le milieu.`,
                    "Le projet 'Statistiques' a été réalisé chez It4net, à Lausanne. Je l'ai fait en 17 jours en natif (PHP + MySQL + JS + CSS).",
                    "J'ai fait 'Mon ECO Pote Game' qui est un jeu de société sur l'environnement, en tant que Bénévole.",
                    "NextJs server-action avec next-action Auth et middleware.",
                    "J'ai effectué 2 applications pour l'Eveil, dont les descriptifs figurent ci-dessous."
                  ].map((item, idx) => (
                    <li key={idx} className="text-gray-400 font-mono text-xs sm:text-sm flex items-start gap-2 group/item">
                      <span className="text-cyan-400 mt-1 opacity-0 group-hover/item:opacity-100 transition">▹</span>
                      <span className="text-gray-300 group-hover/item:text-cyan-300 transition text-[11px] sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 sm:mt-6 pt-3 border-t border-cyan-500/30 flex justify-between items-center">
                  <span className="text-[6px] sm:text-[8px] font-mono text-cyan-400/50">STATUS: ACTIVE</span>
                  <span className="text-[6px] sm:text-[8px] font-mono text-cyan-400/30 animate-pulse">⤷ PROCESSING</span>
                </div>
              </div>
            </div>

            {/* Carte Backend */}
            <div className="w-full lg:w-[48%] group relative">
              <div className="absolute -inset-0.5 bg-linear-to-r from-fuchsia-500 to-fuchsia-300 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
              <div className="relative p-4 sm:p-6 rounded-xl bg-black/80 backdrop-blur-sm border border-fuchsia-500/30 hover:border-fuchsia-500 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-fuchsia-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-fuchsia-400 to-transparent group-hover:via-fuchsia-300 transition-all" />
                
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fuchsia-400 rounded-full animate-pulse" />
                    <h4 className="text-lg sm:text-xl font-bold font-mono text-fuchsia-400">
                      {`[ Backend ]`}
                    </h4>
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-mono text-fuchsia-400/50 border border-fuchsia-400/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    Backend
                  </div>
                </div>
                
                <p className="text-[10px] sm:text-xs font-mono text-fuchsia-400/70 mb-3 sm:mb-4 tracking-wider">
                  {`>_ STACK : MariaDB, MySQL, PostgreSQL, MongoDB, Lamp`}
                </p>
                
                <ul className="list-none text-justify space-y-2 sm:space-y-3">
                  {[
                    "Mon premier site web a été fait sur Raspberry (Lamp) avec port forwarding et protocole HTTPS pour le rendre accessible en WAN et sécurisé (CSRF, XSS, firewall, MAJ, etc).",
                    "Ma première application faite en python3 utilisait le protocole SCP pour protéger la connexion SSH à mon server en LAN.",
                    "La réalisation de mes projets, se fait la plupart du temps sur mon Raspberry qui me sert de serveur LAN.",
                    "J'utilise aussi MongoDB (no code) et Vercel avec PostgreSQL.",
                  ].map((item, idx) => (
                    <li key={idx} className="text-gray-400 font-mono text-xs sm:text-sm flex items-start gap-2 group/item">
                      <span className="text-fuchsia-400 mt-1 opacity-0 group-hover/item:opacity-100 transition">▹</span>
                      <span className="text-gray-300 group-hover/item:text-fuchsia-300 transition text-[11px] sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 sm:mt-6 pt-3 border-t border-fuchsia-500/30 flex justify-between items-center">
                  <span className="text-[6px] sm:text-[8px] font-mono text-fuchsia-400/50">STATUS: ACTIVE</span>
                  <span className="text-[6px] sm:text-[8px] font-mono text-fuchsia-400/30 animate-pulse">⤷ READY</span>
                </div>
              </div>
            </div>
          </div>

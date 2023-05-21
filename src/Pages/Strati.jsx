import { useState } from "react"

export default function Strati() {
    const [info, setinfo] = useState(null)
    const data = {
        lucifero: {
            img: 'https://divinacommedia.weebly.com/uploads/5/5/2/3/5523249/5889735.jpg',
            info: 'Dante vede Lucifero come un imperatore decaduto, con una sua regalità, che sta conficcato nel ghiaccio fino al petto. È uno sconfitto reso impotente da Dio, quindi è anche ridicolizzabile dagli uomini: Giotto lo dipinse obeso nella Cappella degli Scrovegni (1306), mentre Dante lo userà come scala.',
        },
        rosa: {
            img: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Giovanni_di_paolo%2C_paradiso_57_rosa_celeste.jpg',
            info: "La Candida Rosa è il luogo dove risiedono le anime nel Paradiso costruito da Dante: «In forma dunque di candida rosa / mi si mostrava la milizia santa / che nel suo sangue Cristo fece sposa.» (Paradiso - Canto trentunesimo, vv. 1-3) Si tratta di una sorta di anfiteatro dotato di sedili a forma di rosa, dove siedono le anime del Paradiso che sono candide; esse sono fatte di pura luce, simbolo di beatitudine divina, tanto che è quasi difficile riconoscerne i tratti."
        },
        cerchi: {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mosaici_del_battistero%2C_gerarchie_angeliche.jpg/1024px-Mosaici_del_battistero%2C_gerarchie_angeliche.jpg',
            info: "condo la tradizione ebraica e successivamente cristiana, gli angeli sono organizzati in una gerarchia di differenti ordini, detti nel medioevo cori angelici. Queste gerarchie consistono in entità intermedie tra Dio e gli uomini, in quanto collegano e descrivono il rapporto esistente fra l'assoluta trascendenza divina e la sua attività nel mondo.[1] Lo Pseudo-Dionigi l'Areopagita, nel libro De coelesti hierarchia, indica alcuni passaggi del Nuovo Testamento, nello specifico la Lettera agli Efesini[2] e la Lettera ai Colossesi,[3] sulla cui base costruire uno schema di tre gerarchie, sfere o triadi di angeli, ognuna delle quali contiene tre ordini o cori"
        },
        terrestre: {
            img: 'https://divinacommedia.weebly.com/uploads/5/5/2/3/5523249/1310140064.jpg',
            info: "Nel Canto XXVIII del Purgatorio l'Eden è presentato come una divina foresta spessa e viva, in cui soffia una brezza leggera e regolare prodotta non da fenomeni atmosferici (del tutto assenti al di sopra della porta del Purgatorio), ma dal ruotare delle sfere celesti."
        },
        acheronte: {
            img: 'https://quotidianodibari.it/wp-content/uploads/2020/07/apertura-74.jpg',
            info: "Uno dei quattro fiumi infernali, che scorre tra l'Antinferno (dove sono puniti gli ignavi) e il Limbo, e che le anime dannate devono attraversare sulla barca del traghettatore Caronte."
        },
        selva: {
            img: 'https://staticfanpage.akamaized.net/wp-content/uploads/2019/04/dante_7_aprile_8_aprile_selva_oscura_divina_commedia-1200x675.jpg',
            info: "È il luogo simbolico in cui Dante si smarrisce all'inizio del poema (Inf., I, 1 ss.), allegoria del peccato in cui ogni uomo può perdersi nel suo cammino durante questa vita. Non sappiamo dove si trovi precisamente, anche se vari commentatori hanno tentato vanamente di trovarle una collocazione geografica (in Italia, vicino a Firenze, vicino a Gerusalemme...)."
        },
        paoloEfrancesca: {
            img: 'https://www.avvenire.it/c/2021/PublishingImages/64a64a61224245e5a4b89a59633b6f0b/a.jpg?width=1024',
            info: "Il luogo in cui si trovano è tenebroso e una bufera trascina le anime dei dannati. Pianti, lamenti, strida, bestemmie si sentono provenire dai peccatori che Dante comprende essere i “peccator carnali”, ovvero i lussuriosi. Virgilio indica a Dante alcuni  personaggi del passato che si trovano in questo luogo: Semiramide, Cleopatra, Elena, Paride, Tristano. Ma l’attenzione del poeta è attratta da due anime che volano insieme: sono Paolo Malatesta e Francesca da Rimini. Dante li invita ad avvicinarsi e Francesca narra la loro storia: il cuore gentile di Francesca fece innamorare Paolo, attratto anche dalla bellezza della donna che a sua volta, si innamorò di lui perché Amore pretende che chi è amato contraccambi l’amore. Questa loro colpevolezza condusse entrambi ad una stessa morte: il marito di Francesca, Gianciotto, scoperto l'inganno e nel tentativo di uccidere Paolo trafisse con la spada anche Francesca che volle fargli scudo con il suo corpo."
        },
        ugolino: {
            img: 'https://www.vanillamagazine.it/wp-content/uploads/2018/08/Ugolino-Dante.jpg',
            info: "Dopo aver allontanato la bocca dal pasto bestiale, il dannato si accinge a raccontare la sua fine. Sa che la narrazione gli procurerà molto dolore, ma è certo che la sua sofferenza sarà compensata dall'infamia procurata al traditore di cui sta rodendo il cranio. Si tratta del conte Ugolino della Gherardesca, il quale, per gli intrighi dell'arcivescovo Ruggieri, ora sua vittima, fu rinchiuso nella torre dei Gualandi, in Pisa, con due figli e due giovani nipoti dove vi rimase prigioniero alcuni mesi e poi fu condannato a morirvi per fame. La disperazione di dover assistere alla tragica fine dei suoi ragazzi lo impietrì dal dolore. Il triste evento si consumò tra il quarto e il sesto giorno; all'ottavo anch'egli morì. Dante allora prorompe in un'invettiva contro Pisa, che si macchiò di un delitto così feroce."
        },
        ignavi: {
            img: 'https://informazionecriticacom.files.wordpress.com/2021/05/canto-3-inferno-sintesi.jpg',
            info: "Sono mescolate agli angeli che non si schierarono né con Dio né con Lucifero; le anime degli ignavi sono tanto misere che secondo Virgilio non sono degne di essere guardate da Dante troppo a lungo. Dante vede che le anime corrono dietro un'insegna senza significato, che gira vorticosamente su se stessa."
        },
        limbo: {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MantegnaDescentLimbo.jpg/1024px-MantegnaDescentLimbo.jpg',
            info: "Il Limbo è definito da Dante il ''primo cerchio che l'abisso cigne'' (Inf. IV,25). Il vocabolo 'Limbus' in latino significa ''orlo'' e nella Commedia equivale ad ''orlo dell'Inferno'', una zona, quindi, non propriamente di pena, ma neppure di beatitudine, o di attesa di essa."
        },
        golosi: {
            img: 'https://annamariaarvia.files.wordpress.com/2019/12/cerbero-immagine.jpg',
            info: "Dante e Virgilio arrivano al terzo cerchio, dove sono puniti i golosi. Qui una pioggia nera, mista a grandine e neve, cade eternamente sui dannati prostrati nel fango. Questi sono squartati e scuoiati da Cerbero che li assordisce con il suo latrare incessante. Cerbero, il cane a tre teste, è un personaggio del mito e della poesia classica, ritratto con violenza realistica che imprime alla sua figura vitalità animalesca. Dante ne fa un mostro misto di elementi umani e bestiali: ne sottolinea la voracità insaziabile, la crudeltà ferina, le note ripugnanti dell’aspetto (la barba unta e atra)."
        },
        avariEprodighi: {
            img: 'https://divinacommedia.weebly.com/uploads/5/5/2/3/5523249/3444213.jpg',
            info: "Sono i penitenti che scontano la loro pena nella V Cornice del Purgatorio, colpevoli di eccessivo attaccamento ai beni terreni, sia nel senso della cupidigia sia in quello opposto della prodigalità (sono gli unici peccatori del Purgatorio dantesco a scontare nella stessa Cornice peccati opposti, parallelamente agli avari e prodighi del IV Cerchio dell'Inferno). La pena è identica per entrambe le schiere di penitenti e consiste nell'essere legati e stesi sul pavimento roccioso della Cornice, con le spalle rivolte al cielo e il volto a terra, così come in vita furono rivolti ai beni materiali. Recitano il versetto 25 del Salmo CXVIII, Adhaesit pavimento anima mea («la mia anima si è stesa sul pavimento») e durante il giorno dichiarano esempi di povertà e liberalità, mentre di notte ne ricordano altri di avarizia punita, con voce più o meno alta a seconda dell'intensità del sentimento che li pungola. Dante include tra questi penitenti papa Adriano V (Canto XIX) e il re di Francia Ugo Capeto (Canto XX), entrambi fra gli avari, e il poeta latino Stazio (Canti XXI-XXII), posto fra i prodighi."
        }
    }
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col items-center bg-cyan-100 pt-1">
                    <div onClick={() => setinfo(data.cerchi)} className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20">
                        <div className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20">
                            <div className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20">
                                <div className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20">
                                    <div className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20">
                                        <div className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20">
                                            <div className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20">
                                                <div className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20">
                                                    <div className="border-[1px] rounded-[100%] border-[#ffd700] py-5 px-20 text-[64px]">
                                                        DIO
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setinfo(data.rosa)}><img className="w-[384px]" src="rose.svg" alt="CANDIDA ROSA"/></div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">CIELO CRISTALLINO o PRIMO MOBILE</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐CIELO delle STELLE FISSE⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">CIELO di SATURNO</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">CIELO di GIOVE</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">CIELO di MARTE</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">CIELO del SOLE</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">CIELO di VENERE</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">CIELO di MERCURIO</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32">CIELO della LUNA</div>
                    <div className="border-t-2 border-black rounded-t-[100%] w-[100%] text-center py-32 bg-gradient-to-b from-orange-500 via-yellow-500 via-10% to-transparent to-75%">SERRA DEL FUOCO</div>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-b from-cyan-100 from-50% to-amber-900">
                    <div onClick={() => setinfo(data.terrestre)} className="border-[1px] border-b-4 border-amber-950 rounded-[100%] bg-lime-600 w-[60%] text-center py-32">PARADISO TERRESTRE</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 from-50% to-transparent rounded-b-[100%] w-[65%] text-center py-32">LUSSURIOSI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 from-50% to-transparent rounded-b-[100%] w-[70%] text-center py-32">GOLOSI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 from-50% to-transparent rounded-b-[100%] w-[75%] text-center py-32">AVARI e PRODIGHI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 from-50% to-transparent rounded-b-[100%] w-[80%] text-center py-32">ACCIDIOSI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 from-50% to-transparent rounded-b-[100%] w-[85%] text-center py-32">IRACONDI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 from-50% to-transparent rounded-b-[100%] w-[90%] text-center py-32">INVIDIOSI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 from-50% to-transparent rounded-b-[100%] w-[95%] text-center py-32">SUPERBI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent from-25% rounded-b-[50%] w-[100%] text-center py-64">ANTIPRUGATORIO</div>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-b to-cyan-100 from-95% from-amber-900">
                    <div onClick={() => setinfo(data.lucifero)} className="bg-red-700 w-[5%] text-center py-32">LUCIFERO</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[20%] text-center py-32">GIUDECCA</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[27.5%] text-center py-32">TOLOMEA</div>
                    <div onClick={() => setinfo(data.ugolino)} className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[30%] text-center py-32">ANTENORA</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[32.5%] text-center py-32">CAINA</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[35%] text-center py-32">TRADITORI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 via-cyan-700 via-75% to-transparent from-70% rounded-b-[100%] w-[37.5%] text-center py-32">POZZO dei GIGANTI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[40%] text-center py-32">FALSARI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[42.5%] text-center py-32">SEMINANTI di DISCORDIE</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[45%] text-center py-32">CONSIGLIERI FRAUDOLENTI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[47.5%] text-center py-32">LADRI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[50%] text-center py-32">IPOCRITI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[52.5%] text-center py-32">BARATTERI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[55%] text-center py-32">INDOVINI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[57.5%] text-center py-32">SIMONIACI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[60%] text-center py-32">ADULATORI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[62.5%] text-center py-32">RUFFIANI e SEDUTTORI</div>
                    {/* <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent from-25% to-100% rounded-b-[100%] w-[72%] text-center py-32">FRAUDOLENTI / MALEBOLGE</div> */}
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-gray-700 text-white to-transparent from-90% rounded-b-[100%] w-[65%] text-center py-64">RIPA DISCOSCESA / L'ALTO BURRATO</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[67.5%] text-center py-32">BESTEMMIATORI, SODOMITI e USURAI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[70%] text-center py-32">SUICIDI e SCIALACQUATORI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[72.5%] text-center py-32">OMICIDI e PREDONI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-100% rounded-b-[100%] w-[75%] text-center py-32 via-cyan-700 via-75% to-transparent from-70%">FLEGEONTE</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[77.5%] text-center py-32">ERETICI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[80%] text-center py-32">MURA DELLA CITTA' di DITE / STIGE</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent from-25% to-100% rounded-b-[100%] w-[82.5%] text-center py-32">IRACONDI ED ACCIDIOSI (STIGE)</div>
                    <div onClick={() => setinfo(data.avariEprodighi)} className="border-b-4 border-amber-950 bg-gradient-to-t from-gray-700 text-white to-transparent from-90% rounded-b-[100%] w-[85%] text-center py-32">AVARI E PRODIGHI</div>
                    <div onClick={() => setinfo(data.golosi)} className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[87.5%] text-center py-32">GOLOSI</div>
                    <div onClick={() => setinfo(data.paoloEfrancesca)} className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[90%] text-center py-32">LUSSURIOSI</div>
                    <div onClick={() => setinfo(data.limbo)} className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[92.5%] text-center py-32">LIMBO</div>
                    <div onClick={() => setinfo(data.acheronte)} className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-100% rounded-b-[100%] w-[95%] text-center py-32 via-cyan-700 via-75% to-transparent from-70%">ACHERONTE</div>
                    <div onClick={() => setinfo(data.ignavi)} className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-600 to-transparent to-100% rounded-b-[100%] w-[97.5%] text-center py-32">IGNAVI</div>
                    <div className="border-b-4 border-amber-950 bg-gradient-to-t from-amber-950 to-transparent to-100% rounded-b-[100%] w-[100%] text-center py-32">CROSTA TERRESTRE</div>
                    <div onClick={() => setinfo(data.selva)} className="border-b-4 border-cyan-500 bg-gradient-to-t from-lime-500 to-transparent to-100% rounded-b-[100%] w-[100%] text-center py-32">GELUSALEMME / SELVA / COLLE</div>
                </div>
            </div>
            {info && <div className="fixed top-0 left-0 w-full flex items-center justify-center h-[100vh] bg-[#00000050]">
                <button className='fixed top-4 right-4' onClick={() => setinfo(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
                <div className="flex gap-16 text-white justify-center items-center">
                    <img className="rounded-3xl w-[600px]" src={info.img} alt="" />
                    <div className="text-[24px] w-[600px]">{info.info}</div>
                </div>
            </div>}
        </>
    )
}
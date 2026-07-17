const dioses = 
[
    {nombre: "Zeus", historia: "Tras liberar a sus hermanos del estómago de Cronos, lideró la guerra contra los titanes y estableció el reinado del Olimpo. Gobernó el cielo, impartió justicia y mantuvo el equilibrio entre dioses y mortales, aunque sus romances trajeron incontables conflictos divinos."},
    {nombre: "Hera", historia: "Reina del Olimpo, protectora del matrimonio. Su unión con Zeus estuvo marcada por celos y venganzas contra los amantes y descendientes del dios, pero también defendió a las mujeres y castigó la infidelidad con una determinación temible."},
    {nombre: "Poseidon", historia: "Señor de los mares, creador de terremotos y caballos. Su disputa con Atenea por Atenas terminó con la ciudad eligiendo el olivo de la diosa en lugar de su fuente salada, lo que alimentó su carácter orgulloso y tempestuoso."},
    {nombre: "Hades", historia: "Gobernante del inframundo. Su rapto de Perséfone marcó el ciclo eterno de las estaciones. Aunque temido, era un dios justo que mantenía el orden entre los muertos y protegía los juramentos."},
    {nombre: "Atenea", historia: "Nació armada del cráneo de Zeus. Diosa de la estrategia, la sabiduría y la artesanía. Guió héroes como Odiseo y Perseo, y defendió ciudades con inteligencia más que con fuerza."},
    {nombre: "Ares", historia: "Dios de la guerra sangrienta. Su romance con Afrodita reveló su lado vulnerable cuando Hefesto los atrapó en una red mágica, exponiendo su pasión y su impulsividad ante todo el Olimpo."},
    {nombre: "Afrodita", historia: "Surgida de la espuma del mar, encarnó el deseo, la belleza y la atracción irresistible. Su influencia podía unir o destruir reinos enteros."},
    {nombre: "Apolo", historia: "Tras matar a Pitón, reclamó el oráculo de Delfos. Dios de la música, la profecía y la medicina, guiaba a los mortales con armonía… aunque sus amores trágicos dejaron huellas eternas."},
    {nombre: "Artemisa", historia: "Protectora de la caza y la luna. Su castigo a Acteón, convertido en ciervo por verla bañarse, mostró su carácter feroz y su defensa absoluta de su pureza."},
    {nombre: "Hermes", historia: "Astuto desde bebé: robó el ganado de Apolo y luego inventó la lira para compensarlo. Mensajero divino, guía de almas y protector de viajeros y ladrones."},
    {nombre: "Dioniso", historia: "Dios del vino y la locura divina. Cuando unos piratas intentaron capturarlo, los transformó en delfines, revelando su naturaleza impredecible y festiva."},
    {nombre: "Hefesto", historia: "Maestro herrero del Olimpo. Forjó el rayo de Zeus, la armadura de Aquiles y incontables maravillas. Su caída del cielo lo dejó cojo, pero su ingenio superó a todos los dioses."},
    {nombre: "Deméter", historia: "Su dolor por la pérdida de Perséfone hizo que la tierra se marchitara. Solo cuando su hija regresaba cada primavera, la vida florecía de nuevo."},
    {nombre: "Hestia", historia: "Diosa del hogar y del fuego sagrado. Pacífica y serena, mantuvo la armonía entre los dioses y fue la primera en recibir ofrendas en cada casa."},
    {nombre: "Perseo", historia: "Héroe que decapitó a Medusa usando un escudo reflectante. Salvó a Andrómeda y fundó linajes reales, siempre guiado por Atenea y Hermes."},



    {nombre: "Odin", historia: "Sacrificó un ojo para obtener sabiduría y colgó nueve noches del árbol Yggdrasil para aprender las runas. Padre de dioses, buscó conocimiento incluso cuando este anunciaba su propia muerte en el Ragnarök."},
    {nombre: "Thor", historia: "Guerrero imparable, protector de la humanidad. Con Mjölnir enfrentó gigantes y monstruos, manteniendo el orden del cosmos con fuerza bruta y valentía."},
    {nombre: "Loki", historia: "Astuto, cambiante y peligroso. Sus engaños divertían a los dioses, pero su traición final (provocar la muerte de Balder) lo llevó a ser encadenado hasta el fin del mundo."},
    {nombre: "Frigg", historia: " Tejedora del destino. Intentó proteger a Balder de toda muerte, pero el muérdago (la única planta que no juró protegerlo) selló la tragedia."},
    {nombre: "Tyr", historia: "Dios del honor. Para encadenar a Fenrir, puso su mano como garantía… y el lobo se la arrancó cuando descubrió el engaño."},
    {nombre: "Heimdall", historia: "Guardián del Bifröst. Sus sentidos eran tan agudos que podía oír crecer la hierba y ver a kilómetros de distancia."},
    {nombre: "Balder", historia: "Dios de la luz y la pureza. Su muerte marcó el inicio del fin de los tiempos."},
    {nombre: "Freyr", historia: "Dios de la fertilidad y la prosperidad. Se enamoró de la giganta Gerðr y, para conquistarla, entregó su espada mágica. Ese sacrificio lo dejó vulnerable en el Ragnarök, donde deberá luchar sin su arma."},
    {nombre: "Njord", historia: "Dios del mar y la riqueza. Su matrimonio con Skadi fracasó porque él amaba el océano y ella las montañas nevadas."},
    {nombre: "Skadi", historia: "Giganta cazadora. Eligió esposo solo viendo los pies de los dioses, creyendo que eran los de Balder… pero terminó casada con Njord."},
    {nombre: "Hel", historia: "Señora del reino de los muertos. Su mitad viva y mitad cadavérica reflejaba su dominio sobre la frontera entre vida y muerte."},
    {nombre: "Fenrir", historia: " Lobo colosal, hijo de Loki. Su destino es devorar a Odín en el Ragnarök."},
    {nombre: "Jörmungandr", historia: "La serpiente que rodea el mundo. Su batalla final con Thor será tan feroz que ambos caerán."},
    {nombre: "Sif", historia: "Diosa de la tierra y las cosechas. Loki le cortó el cabello dorado, obligando a los enanos a forjarle una nueva melena de oro vivo."},
    {nombre: "Surtr", historia: "Gigante de fuego de Muspelheim. En el Ragnarök liderará a los gigantes y quemará el mundo con su espada llameante, marcando el final del viejo ciclo y el inicio de uno nuevo."},




    { nombre: "Ra", historia: "Cada día cruzaba el cielo en su barca solar y cada noche luchaba contra la serpiente Apofis en el inframundo para renacer al amanecer." },
    { nombre: "Osiris", historia: "Rey benevolente, asesinado por su hermano Seth, quien lo desmembró. Isis lo reconstruyó, convirtiéndolo en señor de los muertos." },
    { nombre: "Isis", historia: "Maestra de la magia. Su amor y poder revivieron a Osiris y protegieron a su hijo Horus, símbolo de la realeza."},
    { nombre: "Horus", historia: "Dios halcón. Luchó contra Seth para vengar a su padre y reclamar el trono de Egipto." },
    { nombre: "Anubis", historia: "Protector de tumbas y guía de almas. Supervisaba la momificación y acompañaba a los muertos al juicio de Maat." },
    { nombre: "Seth", historia: "Dios del caos, las tormentas y el desierto. Su violencia desató guerras divinas." },
    { nombre: "Thot", historia: "Inventor de la escritura y guardián del conocimiento. Registraba los juicios de los muertos." },
    { nombre: "Bastet", historia: "Diosa gata, protectora del hogar y la armonía. Su presencia era símbolo de buena fortuna." },
    { nombre: "Sekhmet", historia: "Diosa leona, enviada por Ra para castigar a la humanidad. Su furia casi destruye el mundo hasta que fue calmada con vino teñido de rojo." },
    { nombre: "Hathor", historia: "Diosa del amor, la música y la alegría. Recibía a los muertos con ternura." },
    { nombre: "Sobek", historia: "Dios cocodrilo, asociado al Nilo y a la fertilidad. Protector feroz y benévolo a la vez." },
    { nombre: "Ptah", historia: "Creador del mundo mediante la palabra. Su pensamiento y voz dieron forma al cosmos." },
    { nombre: "Amon", historia: "Dios oculto, misterioso. Su unión con Ra lo convirtió en Amón‑Ra, el dios supremo del Imperio Nuevo." },
    { nombre: "Maat", historia: "Encarnación del orden y la justicia. Pesaba el corazón de los muertos para decidir su destino eterno."},
    { nombre: "Nephthys", historia: "Protectora de los difuntos. Ayudó a Isis a recomponer a Osiris y cuidó a los espíritus perdidos." },




    { nombre: "Amaterasu", historia: "Diosa del Sol. Cuando se ocultó en una cueva por las travesuras de Susanoo, el mundo quedó en oscuridad hasta que los dioses la hicieron salir con una danza ritual." },
    { nombre: "Susanoo", historia: "Impulsivo y poderoso. Tras ser expulsado del cielo, derrotó al dragón Yamata‑no‑Orochi y obtuvo la espada Kusanagi." },
    { nombre: "Tsukuyomi", historia: "Dios de la Luna. Su carácter frío y disciplinado lo distanció de Amaterasu tras matar a la diosa de la comida por considerarla impura."},
    { nombre: "Izanagi", historia: "Padre de los kami. Tras perder a Izanami en el inframundo, realizó un ritual de purificación del que nacieron Amaterasu, Susanoo y Tsukuyomi." },
    { nombre: "Izanami", historia: "Madre creadora. Su muerte al dar a luz al dios del fuego marcó la separación entre el mundo de los vivos y Yomi." },
    { nombre: "Inari Ōkami", historia: "Dios del arroz y la prosperidad. Sus zorros kitsune actúan como mensajeros y guardianes." },
    { nombre: "Raijin", historia: "Dios del trueno, los relámpagos y las tormentas.Golpea tambores gigantes para crear tormentas." },
    { nombre: "Hachiman", historia: "Protector de Japón y de los guerreros. Su guía espiritual acompañó a los samuráis durante siglos." },
    { nombre: "Fūjin", historia: "Dios del viento. Lleva un enorme saco del que libera ráfagas que moldean el clima." },
    { nombre: "Benzaiten", historia: " Diosa de la música, el arte y todo lo que fluye: palabras, agua, inspiración." },
    { nombre: "Ebisu", historia: "Dios de los pescadores y la buena fortuna. Siempre sonriente, trae prosperidad a comerciantes y familias." },
    { nombre: "Daikokuten", historia: "Dios de la riqueza y los cultivos. Su mazo mágico concede abundancia." },
    { nombre: "Kagutsuchi", historia: "Dios del fuego. Su nacimiento causó la muerte de Izanami, desencadenando la creación de nuevos kami." },
    { nombre: "Omoikane", historia: "Dios de la reflexión. Los dioses lo invocan cuando necesitan tomar decisiones difíciles."},
    { nombre: "Sarutahiko", historia: "Guardián de caminos y cruces. Fuerte y protector, guía a los viajeros." },




    { nombre: "Brahma", historia: "Nacido del loto que brotó del ombligo de Vishnu, Brahma creó el mundo, los seres vivos y el tiempo. Aunque es el arquitecto del cosmos, casi no tiene templos porque cometió errores que lo alejaron de la devoción humana." },
    { nombre: "Vishnu", historia: "Protege el universo y mantiene el equilibrio. Cuando el mundo está en peligro, desciende en forma de avatar, como Rama o Krishna, para restaurar el orden y derrotar al mal." },
    { nombre: "Shiva", historia: "Dios de la meditación, la destrucción y la transformación. Su danza cósmica, el Tandava, marca el fin de un ciclo y el inicio de otro. Vive en el Himalaya y es esposo de Parvati."},
    { nombre: "Ganesha", historia: "Hijo de Shiva y Parvati. Shiva le cortó la cabeza accidentalmente y luego la reemplazó con la de un elefante, otorgándole sabiduría, buena fortuna y un papel esencial en los comienzos." },
    { nombre: "Durga", historia: "Creada por los dioses para derrotar al demonio Mahishasura. Monta un tigre y posee armas de todas las deidades. Representa la fuerza femenina que vence al caos." },
    { nombre: "Parvati", historia: "Esposa de Shiva y madre de Ganesha. Representa el amor, la fertilidad y la energía suave del universo. En sus formas más feroces se convierte en Durga o Kali." },
    { nombre: "Kali", historia: "Manifestación feroz de Parvati. Derrota demonios que ni los dioses pueden enfrentar. Su danza sobre Shiva simboliza el triunfo del tiempo y la muerte sobre todo lo creado." },
    { nombre: "Lakshmi", historia: "Nace del océano durante el batido cósmico. Acompaña a Vishnu en todos sus avatares y trae fortuna, belleza y abundancia a quienes la veneran." },
    { nombre: "Saraswati", historia: "Diosa de la música, la sabiduría y la creatividad. Su presencia inspira a artistas, estudiantes y maestros. Es la consorte de Brahma." },
    { nombre: "Krishna", historia: "Héroe, músico y guía del alma. En la Bhagavad Gita revela enseñanzas profundas sobre el deber, la vida y la devoción. Su infancia está llena de travesuras divinas." },
    { nombre: "Rama", historia: "Avatar de Vishnu y protagonista del Ramayana. Rescata a su esposa Sita del demonio Ravana, demostrando honor, valentía y rectitud." },
    { nombre: "Hanuman", historia: "Devoto absoluto de Rama. Su fuerza, lealtad y capacidad de volar lo convierten en uno de los héroes más queridos. Ayuda a Rama a derrotar a Ravana." },
    { nombre: "Indra", historia: "Gobierna los cielos y controla las tormentas. Aunque poderoso, a menudo aprende humildad cuando Vishnu interviene para corregir sus excesos." },
    { nombre: "Shiva Nataraja", historia: "Representa la danza cósmica que destruye la ignorancia y renueva el universo. Su círculo de fuego simboliza el ciclo eterno de creación y destrucción."},
    { nombre: "Agni", historia: "Dios del fuego, presente en los rituales, en los hogares y en las ofrendas. Se considera el mensajero que lleva las plegarias humanas a los dioses. Su fuego purifica, protege y conecta el mundo terrenal con el divino." },
]
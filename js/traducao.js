const IDIOMA = new URLSearchParams(window.location.search).get('lang');
const IDIOMA_ATIVO = ['en', 'es'].includes(IDIOMA) ? IDIOMA : 'pt';

const ROTULOS = {
  en: {
    siteTitle: 'DIGITAL CARTOGRAPHY IN THE ATLANTIC WORLD',
    subtitle: 'African and Afro-Brazilian Religions and Religious Practices',
    nav: ['About Us', 'Where We Are Going', 'Time Frame', 'About the Digital Cartography', 'Copyright', 'Digital Curation', 'Partners and Institutional Websites', 'References', 'GENERAL CATALOG'],
    footer: 'Digital repository of historical sources held in archives and libraries — maps, printed materials/newspapers, ethnographies, catalogs, legal proceedings, reports, and bibliographies from collections in Portugal and Brazil.',
    search: 'Search',
    searchPlaceholder: 'title, description, keyword…',
    archive: 'Archive',
    all: 'All',
    sourceType: 'Source type',
    city: 'City',
    allFem: 'All',
    country: 'Country',
    sortBy: 'Sort by',
    catalogNumber: 'Catalog no.',
    year: 'Year',
    titleSort: 'Title (A–Z)',
    topic: 'Subject/Topic',
    dateType: 'Date type',
    exactDate: 'Exact date (day/month/year)',
    yearOnly: 'Year only',
    century: 'Century',
    approximate: 'Approximate (c.a.)',
    noDate: 'Undated',
    fromYear: 'From year',
    throughYear: 'Through year',
    yearPlaceholder: 'e.g. 1900',
    recordCount: 'record(s)',
    legend: 'Abbreviation key (archives and source types)',
    noResults: 'No sources match these filters.',
    loadError: 'Unable to load fontes.json. Make sure the file is in the same folder as this HTML page.',
    ficheCaption: '<strong>Open central chest:</strong> The catalog itself is represented as a traditional African wooden chest, a place to keep valuable objects. Inside are scrolls (oral/ancient sources) and patterned cards (documentary sources).'
  },
  es: {
    siteTitle: 'CARTOGRAFÍA DIGITAL EN EL MUNDO ATLÁNTICO',
    subtitle: 'Religiones y religiosidades africanas y afrobrasileñas',
    nav: ['Quiénes somos', 'Hacia dónde vamos', 'Marco temporal', 'Sobre la cartografía digital', 'Derechos de autor', 'Curaduría digital', 'Socios y sitios institucionales', 'Referencias', 'CATÁLOGO GENERAL'],
    footer: 'Repositorio digital de fuentes históricas conservadas en archivos y bibliotecas: mapas, impresos y periódicos, etnografías, catálogos, procesos, informes y bibliografías de colecciones de Portugal y Brasil.',
    search: 'Buscar',
    searchPlaceholder: 'título, descripción, palabra clave…',
    archive: 'Archivo',
    all: 'Todos',
    sourceType: 'Tipo de fuente',
    city: 'Ciudad',
    allFem: 'Todas',
    country: 'País',
    sortBy: 'Ordenar por',
    catalogNumber: 'N.º de catálogo',
    year: 'Año',
    titleSort: 'Título (A–Z)',
    topic: 'Área/temática',
    dateType: 'Tipo de fecha',
    exactDate: 'Fecha exacta (día/mes/año)',
    yearOnly: 'Solo año',
    century: 'Siglo',
    approximate: 'Aproximada (c. a.)',
    noDate: 'Sin fecha',
    fromYear: 'Desde el año',
    throughYear: 'Hasta el año',
    yearPlaceholder: 'p. ej., 1900',
    recordCount: 'registro(s)',
    legend: 'Leyenda de siglas (archivos y tipos de fuente)',
    noResults: 'No se encontraron fuentes con estos filtros.',
    loadError: 'No se pudo cargar fontes.json. Compruebe que el archivo esté en la misma carpeta que esta página HTML.',
    ficheCaption: '<strong>Baúl central abierto:</strong> El catálogo se representa como un baúl tradicional africano de madera, donde se guardan objetos valiosos. En su interior hay rollos (fuentes orales/antiguas) y fichas con patrones (fuentes documentales).'
  }
};

const TRADUCOES = {
  en: {
    'quem-somos': {
      eyebrow: 'About the Project',
      heading: 'About Us',
      caption: '<strong>Ubuntu:</strong> “I am because we are.” The three embracing figures represent community, mutual support, and ancestry.',
      paragraphs: [
        'We are a thematic digital repository resulting from a postdoctoral research project in History conducted at the Graduate Program in History (PPGHIS), at the School of Philosophy and Human Sciences (FAFICH) of the Federal University of Minas Gerais (UFMG). The project brings together primary and secondary sources on the history of African and Afro-Brazilian religions and religious practices across the Atlantic world.',
        'This repository is entitled “Digital Cartography of Historical Sources in the Atlantic World (CDFHMA): African and Afro-Brazilian Religions and Religious Practices.” It was organized by historian Prof. Dr. Erivaldo Sales Nunes, affiliated with the Federal Institute of Education, Science and Technology of Bahia (IFBA), Salvador campus. The project was supervised with the collaboration of Prof. Dr. Vanicléia Silva Santos (University of Pennsylvania/UFMG).',
        'The catalog brings together physical documents, mostly dating from the twentieth century, which were digitized as part of research carried out during a doctoral research period at Universidade Nova de Lisboa in 2015. These digital documents come from physical collections held in public historical archives and public and private libraries in Lisbon, Portugal.',
        'The historical archives and libraries consulted were the Diplomatic Archives and Library of the Ministry of Foreign Affairs (ADBMNE), the Overseas Historical Archive (AHU), the National Archive of Torre do Tombo (ANTT), the Library of the School of Social Sciences and Humanities of Universidade Nova de Lisboa (BFCHS/UNL), and the National Library of Portugal (BNP). The sources represent the first stage in disseminating multi-referenced knowledge (museum, geographic, historical, anthropological, and digital) through a responsive website.'
      ]
    },
    'onde-chegar': {
      eyebrow: 'Perspectives',
      heading: 'Where We Are Going',
      caption: '<strong>Baobab:</strong> The tree of life in Africa represents strength, ancestry, deep roots, and lasting growth. It embodies our destination: to stand firm and flourish.',
      paragraphs: [
        'Over the past ten years, we have mapped places where collections on the history of Afro-diasporic religions and religious practices in the Americas were created, documented, and organized, in dialogue with the Northern and Southern Atlantic worlds. We intend to expand this cartography with sources from other collections in Brazil and elsewhere in the Afro-diasporic Americas, provided they relate to the subject.',
        'Historical archives in the Brazilian cities of Salvador, Santo Amaro da Purificação, Rio de Janeiro, and Belo Horizonte are expected to become part of this database. The cartography may also expand to include archives and libraries in Lima, Peru, as well as Providence, Rhode Island, and New Orleans, Louisiana, in the United States.',
        'The Digital Cartography initially aims to provide a catalog of historical sources on African and Afro-Brazilian religions and religious practices from archives in Atlantic-world countries: <strong>Brazil, Angola, the Democratic Republic of the Congo, the Republic of the Congo, and Portugal</strong>. As research continues, this corpus may expand to encompass the Atlantic and Pacific worlds, including Brazil, Peru, the United States, Portugal, Congo, and Angola.'
      ]
    },
    'recorte-temporal': {
      eyebrow: 'Methodology',
      heading: 'Time Frame',
      caption: '<strong>Sankofa:</strong> An Adinkra bird looking back to retrieve an egg from its back; its name means “go back and get it.” It represents learning from the past to build the future.',
      paragraphs: [
        'The historical sources presented in this digital cartography cover three distinct periods. The first, and central, period spans 1916 to 1966 (the first half of the twentieth century), the timeframe of the studies examined in the doctoral dissertation on the history and memory of Congo-Angola Candomblé in Bahia (Nunes, 2017).',
        'The second period focuses on the second half of the twentieth century. It includes sources on liberation movements in the Congo (1960) and Angola (1975), the struggles for independence from colonial rule, and the postcolonial period (1980–1990).',
        'A further period includes documents from the eighteenth and nineteenth centuries. This timeframe was added because of the importance of approaches to enslavement, customs, languages, and religious practices in the territories concerned.',
        'The sources mainly concern territories in Central Africa (the Democratic Republic of the Congo, the Republic of the Congo, and Angola). Although this was not the original scope of the research, some archives also yielded documentary sources from West and East Africa.'
      ]
    },
    'sobre-cdfhma': {
      eyebrow: 'Research Data',
      heading: 'About the Digital Cartography (CDFHMA)',
      caption: '<strong>Connected map of Africa:</strong> The terracotta-colored continent, crossed by a network of bright nodes and lines, represents territory mapped digitally; each node is a story, a data point, or a community.',
      paragraphs: [
        'This Digital Cartography of Historical Sources in the Atlantic World (CDFHMA) systematized and cataloged <strong>129 historical sources</strong> from three public archives and two libraries, one public and one private. Of these, 30 are primary sources (cartography, iconography, manuscripts, civil and political proceedings, and reports), while 99 are secondary sources (catalogs, bibliographies, and printed materials such as newspapers and bulletins).',
        'Public archives account for 72 sources, or 55.81% of the collection. The libraries account for 57 sources (44.19%). Among the institutions surveyed, the AHU holds the largest share, at 28.68% (37 items), followed by the BFCHS at 24.81% (32) and the BNP at 19.38% (25). The ADBMNE accounts for 14.73% (19 items), and the ANTT for 12.40% (16).',
        'Among the source types, bibliographic sources make up 48.06% (62), printed materials 17.05% (22), and catalogs 11.63% (15). Iconography accounts for 10.08% (13); manuscripts and civil/political proceedings each account for 4.65% (6). Reports and cartography complete the collection at 3.10% (4) and 0.78% (1), respectively.',
        'Of the 129 historical sources, only seven digital objects (documents) are unavailable on the website. According to the catalog numbering, these are: <strong>ADBMNE</strong> — items 8 and 12; <strong>AHU</strong> — item 56; <strong>ANTT</strong> — items 66, 67, and 68; <strong>BNP</strong> — item 123.',
        'The sources collected made it necessary to catalog and organize access to the documents in a database, initially structured in Microsoft Excel spreadsheets. Each record was cataloged using the following data categories, or metadata:',
        'The database model was developed and hosted online with contributions from Prof. Dr. Luiz Machado and research scholarship holder Gabriel Borba, members of the Digital Games program at the Federal Institute of Education, Science and Technology of Bahia (IFBA), Lauro de Freitas campus.'
      ],
      tableCaptions: [
        'Table 1 — Documents cataloged in archives and libraries in Lisbon',
        'Table 2 — Summary of systematized historical sources'
      ],
      tableHeaders: [
        'Archive', 'Number range', 'No. of documents', '%',
        'Source type', 'ADBMNE', 'AHU', 'ANTT', 'BFCHS', 'BNP', 'Total', '%'
      ],
      tableRows: [
        'C = Cartography', 'CAT = Catalog', 'B = Bibliography', 'I = Iconography',
        'IMP = Printed material/Newspaper-Bulletin', 'M = Manuscript',
        'PPC = Political and Civil Proceedings', 'RELAT = Report'
      ],
      tableTotals: ['Total', 'Total sources'],
      metadataTitles: [
        'Document number (No.)', 'Archive consulted', 'Source type', 'Source title',
        'Number of pages', 'Subject area (topic)', 'Source year', 'Source description',
        'File link', 'Reference code', 'City/country'
      ],
      metadataDescriptions: [
        'A fixed number assigned to uniquely identify each document cataloged in the digital cartography database.',
        'The name of the historical archive or library consulted—the institution that holds the document.',
        'The catalog includes cartography, catalogs, bibliographies, iconography, printed materials (newspapers/bulletins), manuscripts, civil and political proceedings, and reports.',
        'The name of the source as listed in the archive search system.',
        'The number of pages in the consulted PDF file.',
        'The subject areas are listed according to the catalog records.',
        'The year in which the document was created or recorded.',
        'A summary of the document’s contents.',
        'A link to the source in PDF format.',
        'The reference code assigned to the source by the archive or library.',
        'The location of the archive or library.'
      ],
      metadataHeading: 'Metadata Description',
      finalParagraph: 'The database model was developed and hosted online with contributions from Prof. Dr. Luiz Machado and research scholarship holder Gabriel Borba, members of the Digital Games program at the Federal Institute of Education, Science and Technology of Bahia (IFBA), Lauro de Freitas campus.'
    },
    'direitos-autorais': {
      eyebrow: 'Legal Matters',
      heading: 'Copyright',
      caption: '<strong>Protective hand over a shield:</strong> The open hand above the shield symbolizes care, guardianship, and protection—not ownership, but responsible stewardship.',
      paragraphs: [
        'A few copyright matters must be clarified regarding this CDFHMA on African and Afro-Brazilian religions and religious practices. Books and historical archival documents that have entered the public domain may be used freely, reproduced, distributed, and adapted without prior authorization.',
        'In Brazil, Law No. 9,610/98 (the Copyright Act) guarantees authorship and the rights to use, benefit from, and distribute a work for 70 years after the author’s death; authorization is required during that period. Government documents produced by public bodies—such as minutes, laws, and official reports held in historical archives—are not protected by copyright and may be freely used in the public interest, subject to Law No. 13,709/2018 (the General Data Protection Law, LGPD).',
        'Regarding digitization and rights in copies, every cataloged source is identified by its sequential cartography number, archive name or abbreviation, source type and title, number of pages in the available file, subject area, year, summary description, archive reference code, and a link to the digitized document. Links may provide full or partial access. We also provide the institutional websites of the archives and libraries consulted, making it easier to locate and verify sources in their original collections.',
        'As this cartography was organized in 2026, the works and documents listed here are subject to the following conditions:'
      ],
      listItems: [
        'Works and documents available in full were recorded before 1956;',
        'Works and documents recorded after 1956 are available in part, for example as tables of contents, prologues, chapters, or bibliographic references;',
        'All works and documents belong to public historical archive collections, except for the collection of the Library of the School of Social Sciences and Humanities at Universidade Nova de Lisboa, a private institution.'
      ]
    },
    'curadoria-digital': {
      eyebrow: 'Preservation and Management',
      heading: 'About Digital Curation',
      caption: '<strong>An elder’s hands over a woven basket:</strong> Curation as ancestral wisdom—experienced hands make thoughtful selections.',
      paragraphs: [
        'Defining where digital objects are stored through content repositories and metadata is an important step in the digitization and ongoing maintenance of the CDFHMA repository. This process, known as digital curation, is essential to preserving the quality, integrity, and continuity of digital objects throughout their life cycle.',
        'Digitization and digital curation are complementary processes. Digitization transforms a physical document into a digital representation, while curation adds information and procedures that preserve and contextualize it. A digitized source should not be confused with the original document: moving from a physical medium to a digital environment entails losses, shifts, and new forms of mediation. The digitized source is therefore an immaterial representation of the document.',
        'Documentary analysis of digital objects must go beyond the text displayed on a screen. It should also investigate who created the document, under what circumstances and for what purpose, on which medium, where it was preserved, and how it entered the digital environment. In the second phase of the digital cartography, ongoing curation will monitor and add newly digitized documents from public archives in Salvador, Santo Amaro da Purificação, Rio de Janeiro, and Belo Horizonte.',
        'The digital curator is <strong>Erivaldo Sales Nunes</strong>, a Brazilian historian from Salvador, Bahia. He completed a postdoctoral residency in History at the Federal University of Minas Gerais (UFMG) in 2025–2026 and earned a PhD in Social History from the Federal University of Bahia (UFBA) in 2017, including a doctoral research period in Anthropology at Universidade Nova de Lisboa, Portugal. Since 2011, he has been a tenured History professor in basic, technical, and technological education at the Federal Institute of Education, Science and Technology of Bahia (IFBA).',
        'For his academic background, see his Lattes CV at <a href="http://lattes.cnpq.br/1891027810023631" target="_blank" rel="noopener">lattes.cnpq.br/1891027810023631</a>. His principal publications are available at <a href="https://linktr.ee/erivaldonunes?utm_source=linktree_profile_share" target="_blank" rel="noopener">linktr.ee/erivaldonunes</a>.'
      ],
      subheading: 'Curator in Charge',
      contact: 'Contact us: <a href="mailto:cartdigitalfh@gmail.com">cartdigitalfh@gmail.com</a>'
    },
    parceiros: {
      eyebrow: 'Collaborative Network',
      heading: 'Institutional Partners and Research Websites',
      caption: '<strong>Circle of joined hands:</strong> Seven hands joined in a ring—a symbol of partnership, alliance, and mutual trust. Each hand represents a partner.',
      paragraphs: [
        'The institutional partners listed here are connected to the doctoral research (2012–2017) and postdoctoral research (2025–2026), both conducted in Brazil, with a doctoral research period in Lisbon, Portugal, in 2015.',
        'The archives and libraries included in this cartography can be accessed through the following links:'
      ],
      partnerHeadings: [
        'Funding Agency', 'Public and Private Universities',
        'Research Centers in Lisbon', 'Schools and Education Institute'
      ],
      subheading: 'Institutional Websites for Searching and Consulting Historical Sources',
      archiveLinks: [
        'Diplomatic Archives and Library of the Ministry of Foreign Affairs:',
        'Overseas Historical Archive:',
        'National Archive of Torre do Tombo:',
        'Library of the School of Social Sciences and Humanities / Universidade Nova de Lisboa:',
        'National Library of Portugal:',
        'National Digital Library of Portugal:'
      ]
    },
    referencias: {
      eyebrow: 'Works Consulted',
      heading: 'References — Website',
      caption: '<strong>Open book with two forms of knowledge:</strong> The left page features 16 Adinkra symbols (African writing and encoded knowledge); the right page has spirals (orality and the flow of storytelling).'
    }
  },
  es: {
    'quem-somos': {
      eyebrow: 'Sobre el proyecto',
      heading: 'Quiénes somos',
      caption: '<strong>Ubuntu:</strong> «Yo soy porque nosotros somos». Las tres figuras abrazadas representan comunidad, apoyo mutuo y ancestralidad.',
      paragraphs: [
        'Somos un repositorio digital temático fruto de un proyecto de investigación posdoctoral en Historia, realizado en el Programa de Posgrado en Historia (PPGHIS) de la Facultad de Filosofía y Ciencias Humanas (FAFICH) de la Universidad Federal de Minas Gerais (UFMG). El proyecto reúne fuentes primarias y secundarias sobre la historia de las religiones y religiosidades africanas y afrobrasileñas en el mundo atlántico.',
        'Este repositorio se titula «Cartografía Digital de Fuentes Históricas en el Mundo Atlántico (CDFHMA): Religiones y religiosidades africanas y afrobrasileñas». Fue organizado por el historiador Prof. Dr. Erivaldo Sales Nunes, vinculado al Instituto Federal de Educación, Ciencia y Tecnología de Bahía (IFBA), campus Salvador. La supervisión del proyecto contó con la colaboración de la Profa. Dra. Vanicléia Silva Santos (University of Pennsylvania/UFMG).',
        'El catálogo reúne documentos físicos, en su mayoría del siglo XX, digitalizados durante investigaciones realizadas en una estancia doctoral en la Universidade Nova de Lisboa en 2015. Estos documentos digitales proceden de colecciones físicas conservadas en archivos históricos públicos y bibliotecas públicas y privadas de Lisboa, Portugal.',
        'Se consultaron el Archivo Diplomático y Biblioteca del Ministerio de Asuntos Exteriores (ADBMNE), el Archivo Histórico Ultramarino (AHU), el Archivo Nacional de Torre do Tombo (ANTT), la Biblioteca de la Facultad de Ciencias Sociales y Humanas de la Universidade Nova de Lisboa (BFCHS/UNL) y la Biblioteca Nacional de Portugal (BNP). Las fuentes representan la primera etapa de difusión de un conocimiento multirreferencial (museístico, geográfico, histórico, antropológico y digital) mediante un sitio web adaptable.'
      ]
    },
    'onde-chegar': {
      eyebrow: 'Perspectivas',
      heading: 'Hacia dónde vamos',
      caption: '<strong>Baobab:</strong> El árbol de la vida africano representa fuerza, ancestralidad, raíces profundas y crecimiento duradero. Es nuestro destino: mantenernos firmes y dar frutos.',
      paragraphs: [
        'Durante los últimos diez años hemos cartografiado espacios de producción, registro y organización de colecciones (archivos históricos) sobre la historia de las religiones y religiosidades afrodiaspóricas en las Américas, en diálogo con el mundo atlántico norte y sur. Queremos ampliar esta cartografía con fuentes de otras colecciones de Brasil y de otros territorios afrodiaspóricos de las Américas que se relacionen con el tema.',
        'Está previsto incorporar archivos históricos de las ciudades brasileñas de Salvador, Santo Amaro da Purificação, Río de Janeiro y Belo Horizonte. La cartografía también podría ampliarse con archivos y bibliotecas de Lima, Perú, así como de Providence, Rhode Island, y Nueva Orleans, Luisiana, en Estados Unidos.',
        'En una primera etapa, la Cartografía Digital busca ofrecer un catálogo de fuentes históricas sobre religiones y religiosidades africanas y afrobrasileñas procedentes de archivos de países del mundo atlántico: <strong>Brasil, Angola, República Democrática del Congo, República del Congo y Portugal</strong>. A medida que avance la investigación, este conjunto podrá ampliarse para abarcar los mundos atlántico y pacífico: Brasil, Perú, Estados Unidos, Portugal, Congo y Angola.'
      ]
    },
    'recorte-temporal': {
      eyebrow: 'Metodología',
      heading: 'Marco temporal',
      caption: '<strong>Sankofa:</strong> Ave Adinkra que mira hacia atrás para recoger un huevo de su espalda; su nombre significa «regresa y recógelo». Representa aprender del pasado para construir el futuro.',
      paragraphs: [
        'Las fuentes históricas presentadas en esta cartografía digital abarcan tres períodos distintos. El primero, considerado central, comprende de 1916 a 1966 (la primera mitad del siglo XX), período relacionado con los estudios analizados en la tesis doctoral sobre la historia y la memoria del candomblé Congo-Angola en Bahía (Nunes, 2017).',
        'El segundo período se concentra en la segunda mitad del siglo XX. Incluye fuentes sobre los movimientos de liberación en el Congo (1960) y Angola (1975), las luchas por la independencia colonial y la etapa poscolonial (1980–1990).',
        'También se contempla un período con documentos de los siglos XVIII y XIX. Se incorporó por la importancia de abordar los procesos de esclavización, las costumbres, las lenguas y las religiosidades de los territorios estudiados.',
        'Las fuentes se concentran principalmente en territorios de África Central (República Democrática del Congo, República del Congo y Angola). Aunque no formaba parte del alcance inicial de la investigación, algunos archivos también permitieron incluir fuentes documentales de África Occidental y Oriental.'
      ]
    },
    'sobre-cdfhma': {
      eyebrow: 'Datos de la investigación',
      heading: 'Sobre la Cartografía Digital (CDFHMA)',
      caption: '<strong>Mapa conectado de África:</strong> El continente en tonos terracota, atravesado por una red de nodos y líneas luminosas, representa un territorio cartografiado digitalmente; cada nodo es una historia, un dato o una comunidad.',
      paragraphs: [
        'En esta Cartografía Digital de Fuentes Históricas en el Mundo Atlántico (CDFHMA) se sistematizaron y catalogaron <strong>129 fuentes históricas</strong>, procedentes de tres archivos públicos y dos bibliotecas, una pública y otra privada. De ellas, 30 son fuentes primarias (cartografía, iconografía, manuscritos, procesos civiles y políticos e informes) y 99 son fuentes secundarias (catálogos, bibliografías e impresos, como periódicos y boletines).',
        'Los archivos públicos reúnen 72 fuentes, equivalentes al 55,81 % del total. Las bibliotecas aportan 57 fuentes (44,19 %). Entre las instituciones investigadas, el AHU concentra el 28,68 % (37 documentos), seguido por la BFCHS con el 24,81 % (32) y la BNP con el 19,38 % (25). El ADBMNE aporta el 14,73 % (19 documentos) y el ANTT el 12,40 % (16).',
        'Entre los tipos de fuentes destacan las bibliográficas, con el 48,06 % (62); los impresos, con el 17,05 % (22); y los catálogos, con el 11,63 % (15). La iconografía representa el 10,08 % (13); los manuscritos y los procesos civiles/políticos representan, cada uno, el 4,65 % (6). Los informes y la cartografía completan el conjunto con el 3,10 % (4) y el 0,78 % (1), respectivamente.',
        'De las 129 fuentes históricas, solo siete objetos digitales (documentos) no están disponibles en el sitio. Según la numeración del catálogo, son: <strong>ADBMNE</strong>: documentos 8 y 12; <strong>AHU</strong>: documento 56; <strong>ANTT</strong>: documentos 66, 67 y 68; <strong>BNP</strong>: documento 123.',
        'Las fuentes recopiladas hicieron necesario catalogar y organizar el acceso a los documentos mediante una base de datos, estructurada inicialmente en hojas de cálculo de Microsoft Excel. Cada registro se catalogó con las siguientes categorías de datos o metadatos:',
        'El modelo de la base de datos se desarrolló y alojó en línea con la colaboración del Prof. Dr. Luiz Machado y del becario e investigador Gabriel Borba, integrantes del curso de Juegos Digitales del Instituto Federal de Educación, Ciencia y Tecnología de Bahía (IFBA), campus Lauro de Freitas.'
      ],
      tableCaptions: [
        'Tabla 1 — Documentos catalogados en archivos y bibliotecas de Lisboa',
        'Tabla 2 — Resumen de las fuentes históricas sistematizadas'
      ],
      tableHeaders: [
        'Archivo', 'Numeración', 'N.º de documentos', '%',
        'Tipo de fuente', 'ADBMNE', 'AHU', 'ANTT', 'BFCHS', 'BNP', 'Total', '%'
      ],
      tableRows: [
        'C = Cartografía', 'CAT = Catálogo', 'B = Bibliografía', 'I = Iconografía',
        'IMP = Impreso/Periódico-Boletín', 'M = Manuscrito',
        'PPC = Proceso político y civil', 'RELAT = Informe'
      ],
      tableTotals: ['Total', 'Total de fuentes'],
      metadataTitles: [
        'Número del documento (N.º)', 'Archivo consultado', 'Tipo de fuente', 'Título de la fuente',
        'Número de páginas', 'Área de interés (temática)', 'Año de la fuente', 'Descripción de la fuente',
        'Enlace al archivo', 'Código de referencia', 'Ciudad/país'
      ],
      metadataDescriptions: [
        'Numeración fija asignada para identificar de forma exclusiva cada documento registrado en la base de datos de la cartografía digital.',
        'Nombre del archivo histórico o de la biblioteca consultados, institución que conserva el documento.',
        'Se catalogaron las siguientes modalidades: cartografía, catálogo, bibliografía, iconografía, impreso (periódico/boletín), manuscrito, proceso político y civil e informe.',
        'Nombre de la fuente según aparece en el sistema de búsqueda del archivo.',
        'Número de páginas del archivo PDF consultado.',
        'Las áreas temáticas se enumeran según las fichas catalográficas.',
        'Año en que se registró o produjo el documento.',
        'Síntesis del contenido del documento.',
        'Enlace para acceder a la fuente en formato PDF.',
        'Código asignado a la fuente por el archivo histórico o la biblioteca.',
        'Ubicación del archivo histórico o de la biblioteca.'
      ],
      metadataHeading: 'Descripción de los metadatos',
      finalParagraph: 'El modelo de la base de datos se desarrolló y alojó en línea con la colaboración del Prof. Dr. Luiz Machado y del becario e investigador Gabriel Borba, integrantes del curso de Juegos Digitales del Instituto Federal de Educación, Ciencia y Tecnología de Bahía (IFBA), campus Lauro de Freitas.'
    },
    'direitos-autorais': {
      eyebrow: 'Aspectos legales',
      heading: 'Derechos de autor',
      caption: '<strong>Mano protectora sobre el escudo:</strong> La mano abierta sobre el escudo simboliza cuidado, tutela y protección; no posesión, sino custodia responsable.',
      paragraphs: [
        'Para elaborar esta CDFHMA sobre religiones y religiosidades africanas y afrobrasileñas, es necesario aclarar algunas cuestiones sobre los derechos de autor. Los libros y documentos de archivos históricos que han pasado al dominio público pueden utilizarse libremente, reproducirse, distribuirse y adaptarse sin autorización previa.',
        'En Brasil, la Ley n.º 9.610/98 (Ley de Derechos de Autor) garantiza la autoría y los derechos de uso, disfrute y distribución durante 70 años después de la muerte del autor; durante ese período se requiere autorización. Los documentos gubernamentales producidos por organismos públicos —como actas, leyes e informes oficiales conservados en archivos históricos— no están protegidos por derechos de autor y pueden utilizarse libremente por ser de interés público, siempre respetando la Ley n.º 13.709/2018 (Ley General de Protección de Datos, LGPD).',
        'En cuanto a la digitalización y los derechos sobre las copias, cada fuente catalogada se identifica con un número secuencial de la cartografía, el nombre o la sigla del archivo, el tipo y el título de la fuente, el número de páginas del archivo disponible, el área temática, el año, una descripción resumida, el código de referencia y un enlace al documento digitalizado. El acceso mediante los enlaces puede ser total o parcial. También ofrecemos los sitios institucionales de los archivos y bibliotecas consultados para facilitar la localización y verificación de las fuentes en sus colecciones originales.',
        'Dado que esta cartografía se organizó en 2026, las obras y documentos aquí enumerados están sujetos a las siguientes condiciones:'
      ],
      listItems: [
        'Las obras y documentos disponibles íntegramente tienen fecha de registro anterior a 1956;',
        'Las obras y documentos posteriores a 1956 están disponibles parcialmente, por ejemplo, mediante índices, prólogos, capítulos y referencias bibliográficas;',
        'Todas las obras y documentos pertenecen a colecciones de archivos históricos públicos, excepto la colección de la Biblioteca de la Facultad de Ciencias Sociales y Humanas de la Universidade Nova de Lisboa, institución privada.'
      ]
    },
    'curadoria-digital': {
      eyebrow: 'Preservación y gestión',
      heading: 'Sobre la curaduría digital',
      caption: '<strong>Manos de una persona mayor sobre una cesta tejida:</strong> La curaduría como sabiduría ancestral: manos experimentadas que seleccionan con criterio.',
      paragraphs: [
        'La definición de los espacios de almacenamiento de objetos digitales mediante repositorios de contenidos y la creación de metadatos es una etapa importante para dar continuidad a la digitalización y al mantenimiento del repositorio CDFHMA. Este proceso, denominado curaduría digital, es fundamental para preservar la calidad, la integridad y la continuidad de los objetos digitales durante todo su ciclo de vida.',
        'La digitalización y la curaduría digital son procesos complementarios. La digitalización transforma un documento físico en una representación digital, mientras que la curaduría incorpora información y procedimientos para preservar y contextualizar esa representación. La fuente digitalizada no debe confundirse con el documento original: el paso del soporte físico al entorno digital implica pérdidas, desplazamientos y nuevas formas de mediación. Por ello, la fuente digitalizada constituye una representación inmaterial del documento.',
        'El análisis documental de objetos digitales no puede limitarse al contenido textual que aparece en pantalla. También es necesario investigar quién produjo el documento, en qué circunstancias y con qué finalidad, en qué soporte, dónde se conservó y mediante qué procesos llegó al entorno digital. En la segunda fase de la cartografía digital, la curaduría realizará un seguimiento permanente y actualizará los documentos digitalizados procedentes de archivos públicos de Salvador, Santo Amaro da Purificação, Río de Janeiro y Belo Horizonte.',
        'El curador digital responsable es <strong>Erivaldo Sales Nunes</strong>, historiador brasileño natural de Salvador, Bahía. Realizó una estancia posdoctoral en Historia en la Universidad Federal de Minas Gerais (UFMG) en 2025–2026 y obtuvo el doctorado en Historia Social por la Universidad Federal de Bahía (UFBA) en 2017, con una estancia doctoral en Antropología en la Universidade Nova de Lisboa, Portugal. Desde 2011 es profesor titular de Historia en educación básica, técnica y tecnológica en el Instituto Federal de Educación, Ciencia y Tecnología de Bahía (IFBA).',
        'Para consultar su trayectoria académica, visite su Currículo Lattes en <a href="http://lattes.cnpq.br/1891027810023631" target="_blank" rel="noopener">lattes.cnpq.br/1891027810023631</a>. Sus principales publicaciones están disponibles en <a href="https://linktr.ee/erivaldonunes?utm_source=linktree_profile_share" target="_blank" rel="noopener">linktr.ee/erivaldonunes</a>.'
      ],
      subheading: 'Curador responsable',
      contact: 'Contacto: <a href="mailto:cartdigitalfh@gmail.com">cartdigitalfh@gmail.com</a>'
    },
    parceiros: {
      eyebrow: 'Red de colaboración',
      heading: 'Socios institucionales y sitios de consulta',
      caption: '<strong>Círculo de manos unidas:</strong> Siete manos entrelazadas en una rueda, símbolo de cooperación, alianza y confianza mutua. Cada mano representa a un socio.',
      paragraphs: [
        'Los socios institucionales aquí mencionados están vinculados a las investigaciones de doctorado (2012–2017) y posdoctorado (2025–2026), ambas realizadas en Brasil, con una estancia doctoral en Lisboa, Portugal, en 2015.',
        'Se puede acceder directamente a los archivos y bibliotecas que forman parte de esta cartografía mediante los siguientes enlaces:'
      ],
      partnerHeadings: [
        'Agencia de financiación', 'Universidades públicas y privadas',
        'Centros de investigación en Lisboa', 'Facultades e instituto de educación'
      ],
      subheading: 'Sitios institucionales para buscar y consultar fuentes históricas',
      archiveLinks: [
        'Archivo Diplomático y Biblioteca del Ministerio de Asuntos Exteriores:',
        'Archivo Histórico Ultramarino:',
        'Archivo Nacional de Torre do Tombo:',
        'Biblioteca de la Facultad de Ciencias Sociales y Humanas / Universidade Nova de Lisboa:',
        'Biblioteca Nacional de Portugal:',
        'Biblioteca Nacional Digital de Portugal:'
      ]
    },
    referencias: {
      eyebrow: 'Bibliografía consultada',
      heading: 'Referencias — presentación web',
      caption: '<strong>Libro abierto con dos formas de conocimiento:</strong> La página izquierda presenta 16 símbolos Adinkra (escritura africana y conocimiento codificado); la derecha, espirales (oralidad y flujo de la narración).'
    }
  }
};

const ALT_TEXTOS = {
  en: {
    home: ['Catalog chest'],
    'quem-somos': ['About us'],
    'onde-chegar': ['Where we are going', 'Expanded digital cartography logo'],
    'recorte-temporal': ['Time frame'],
    'sobre-cdfhma': ['About the Digital Cartography'],
    'direitos-autorais': ['Copyright'],
    'curadoria-digital': ['Digital curation'],
    parceiros: ['Institutional partners and websites'],
    referencias: ['References']
  },
  es: {
    home: ['Baúl del catálogo'],
    'quem-somos': ['Quiénes somos'],
    'onde-chegar': ['Hacia dónde vamos', 'Logotipo de la cartografía digital ampliada'],
    'recorte-temporal': ['Marco temporal'],
    'sobre-cdfhma': ['Sobre la cartografía digital'],
    'direitos-autorais': ['Derechos de autor'],
    'curadoria-digital': ['Curaduría digital'],
    parceiros: ['Socios institucionales y sitios web'],
    referencias: ['Referencias']
  }
};

function substituir(selector, valores, contexto = document, usarHtml = true) {
  const elementos = contexto.querySelectorAll(selector);
  if (elementos.length !== valores.length) {
    console.error(`Traducción incompleta para "${selector}": se esperaban ${elementos.length} textos y hay ${valores.length}.`);
    return;
  }
  elementos.forEach((elemento, indice) => {
    if (usarHtml) elemento.innerHTML = valores[indice];
    else elemento.textContent = valores[indice];
  });
}

function traduzirInterface(idioma) {
  document.querySelectorAll('.language-switcher a').forEach(link => {
    if (link.dataset.language === idioma) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  document.querySelectorAll('.site-nav a').forEach(link => {
    const url = new URL(link.href, window.location.href);
    url.searchParams.set('lang', idioma);
    link.href = url.toString();
  });
  if (idioma === 'pt') return;
  const texto = ROTULOS[idioma];
  const pagina = document.body.dataset.page;
  document.documentElement.lang = idioma;
  document.title = `${texto.siteTitle}${pagina !== 'home' ? ` | ${TRADUCOES[idioma][pagina].heading}` : ''}`;
  document.querySelector('.site-nav').setAttribute(
    'aria-label',
    idioma === 'en' ? 'Main navigation' : 'Navegación principal'
  );

  document.querySelector('header h1').textContent = texto.siteTitle;
  document.querySelector('header .header-subtitle').textContent = texto.subtitle;
  document.querySelector('.brand-mark:not(.brand-mark--right) img').alt =
    idioma === 'en' ? 'Project logo' : 'Logotipo del proyecto';
  document.querySelector('.brand-mark--right img').alt =
    idioma === 'en' ? 'Institutional image' : 'Imagen institucional';
  substituir('.site-nav .site-nav-row:first-child a, .site-nav .site-nav-row--fichario a', texto.nav, document, false);
  document.querySelector('footer').textContent = texto.footer;
  const images = document.querySelectorAll('.page-intro-figure img, .page-figure img, .content-image-frame img');
  const alternativeTexts = ALT_TEXTOS[idioma][pagina];
  if (images.length !== alternativeTexts.length) {
    console.error(`Textos alternativos incompletos para a página "${pagina}" (${idioma}).`);
  } else {
    images.forEach((image, indice) => {
      image.alt = alternativeTexts[indice];
    });
  }

  if (pagina === 'home') {
    const rotulosCampos = [
      texto.search, texto.archive, texto.sourceType, texto.city, texto.country,
      texto.sortBy, texto.topic, texto.dateType, texto.fromYear, texto.throughYear
    ];
    substituir('.drawer .field label', rotulosCampos, document, false);
    document.getElementById('busca').placeholder = texto.searchPlaceholder;
    document.getElementById('anoDe').placeholder = texto.yearPlaceholder;
    document.getElementById('anoAte').placeholder = texto.yearPlaceholder;

    substituir('#ordenar option', [texto.catalogNumber, texto.year, texto.titleSort], document, false);
    substituir('#filtroTipoData option', [texto.all, texto.exactDate, texto.yearOnly, texto.century, texto.approximate, texto.noDate], document, false);
    document.querySelector('#filtroArquivo option').textContent = texto.all;
    document.querySelector('#filtroTipo option').textContent = texto.all;
    document.querySelector('#filtroCidade option').textContent = texto.allFem;
    document.querySelector('#filtroPais option').textContent = texto.all;
    document.querySelector('#filtroArea option').textContent = texto.allFem;
    document.querySelector('.legenda summary').textContent = texto.legend;
    document.querySelector('#vazio').textContent = texto.noResults;
    document.querySelector('#erro').innerHTML = texto.loadError.replace('fontes.json', '<code>fontes.json</code>');
    document.querySelector('.page-intro-figure .page-figure-caption').innerHTML = texto.ficheCaption;
    document.querySelector('[data-i18n="recordCount"]').textContent = texto.recordCount;
  } else {
    const traducao = TRADUCOES[idioma][pagina];
    if (!traducao) {
      console.error(`Não há tradução cadastrada para a página "${pagina}" (${idioma}).`);
      return;
    }
    const conteudo = document.querySelector('.content-page');
    conteudo.querySelector('.content-eyebrow').textContent = traducao.eyebrow;
    conteudo.querySelector('h2').textContent = traducao.heading;
    substituir('.page-figure-caption', [traducao.caption], conteudo);

    if (traducao.paragraphs) {
      substituir('.content-text > p:not(.ref-item)', traducao.paragraphs, conteudo);
    }
    if (traducao.listItems) substituir('.content-text ul:first-of-type li', traducao.listItems, conteudo, false);
    if (traducao.subheading) substituir('.content-text h3', [traducao.subheading], conteudo, false);
    if (traducao.contact) substituir('.contact-box', [traducao.contact], conteudo);
    if (traducao.partnerHeadings) substituir('.partner-cols h4', traducao.partnerHeadings, conteudo, false);
    if (traducao.archiveLinks) {
      const links = conteudo.querySelectorAll('.content-text > ul:last-of-type li');
      if (links.length === traducao.archiveLinks.length) {
        links.forEach((item, indice) => {
          const link = item.querySelector('a');
          item.firstChild.textContent = ` ${traducao.archiveLinks[indice]} `;
          if (!link) console.error('Link institucional ausente na lista de parceiros.');
        });
      } else {
        console.error('A quantidade de links institucionais não corresponde à tradução.');
      }
    }
    if (traducao.tableCaptions) substituir('.info-table caption', traducao.tableCaptions, conteudo, false);
    if (traducao.tableHeaders) {
      const cabecalhos = conteudo.querySelectorAll('.info-table thead th');
      if (cabecalhos.length === 12) {
        cabecalhos.forEach((celula, indice) => {
          celula.textContent = traducao.tableHeaders[indice];
        });
      } else {
        console.error('A quantidade de cabeçalhos das tabelas não corresponde à tradução.');
      }
    }
    if (traducao.tableRows) {
      const linhas = conteudo.querySelectorAll('.info-table:nth-of-type(2) tbody tr td:first-child');
      if (linhas.length === traducao.tableRows.length) {
        linhas.forEach((celula, indice) => {
          celula.textContent = traducao.tableRows[indice];
        });
      } else {
        console.error('A quantidade de tipos da tabela não corresponde à tradução.');
      }
    }
    if (traducao.tableTotals) {
      const totais = conteudo.querySelectorAll('.info-table tfoot tr td:first-child');
      if (totais.length === traducao.tableTotals.length) {
        totais.forEach((celula, indice) => {
          celula.textContent = traducao.tableTotals[indice];
        });
      }
    }
    if (traducao.metadataHeading) {
      const headings = conteudo.querySelectorAll('.content-text h3');
      if (headings.length === 1) headings[0].textContent = traducao.metadataHeading;
      else console.error('A quantidade de subtítulos de metadados não corresponde à tradução.');
      substituir('.meta-steps .txt b', traducao.metadataTitles, conteudo, false);
      substituir('.meta-steps .txt > span', traducao.metadataDescriptions, conteudo, false);
      const ultimoParagrafo = conteudo.querySelector('.content-text > p:last-of-type');
      if (ultimoParagrafo) ultimoParagrafo.textContent = traducao.finalParagraph;
    }
  }
}

traduzirInterface(IDIOMA_ATIVO);

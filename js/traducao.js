const IDIOMA = new URLSearchParams(window.location.search).get('lang');
const IDIOMA_ATIVO = ['en', 'es'].includes(IDIOMA) ? IDIOMA : 'pt';

const ROTULOS = {
  en: {
    siteTitle: 'Digital Humanities in the Atlantic World',
    subtitle: 'African and Afro-Brazilian Religions and Religious Practices',
    nav: ['About Us', 'Where We Are Going', 'About the Digital Mapping', 'Digital Curation', 'Partners, Institutional Websites and References', 'Copyright', 'GENERAL CATALOG'],
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
    siteTitle: 'Humanidades digitales en el mundo atlántico',
    subtitle: 'Religiones y religiosidades africanas y afrobrasileñas',
    nav: ['Quiénes somos', 'Hacia dónde vamos', 'Sobre el mapeo digital', 'Curaduría digital', 'Socios, sitios institucionales y referencias', 'Derechos de autor', 'CATÁLOGO GENERAL'],
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
        'We are a thematic digital repository resulting from the postdoctoral research project entitled “Digital Cartography of Historical Sources in the Atlantic World: Afro-Brazilian Religions and Religious Practices,” developed at the Graduate Program in History (PPGHIS), at the School of Philosophy and Human Sciences (FAFICH) of the Federal University of Minas Gerais (UFMG). It brings together primary and secondary sources on the history of religions and religious practices located across the Atlantic world.',
        'This repository is entitled “Digital Humanities in the Atlantic World: African and Afro-Brazilian Religions and Religious Practices.” It was organized by historian Prof. Dr. Erivaldo Sales Nunes, affiliated with the Federal Institute of Education, Science and Technology of Bahia (IFBA), Salvador campus. The project was supervised with the collaboration of Prof. Dr. Vanicléia Silva Santos (University of Pennsylvania/UFMG).',
        'The catalog was structured and stored in a worldwide digital address, with the technological contribution of Prof. Dr. Luiz Machado and research fellow Gabriel Borba, both members of the Digital Games program at the Federal Institute of Education, Science and Technology of Bahia (IFBA), Lauro de Freitas campus.',
        'The catalog brings together physical documents, mostly dating from the twentieth century, which were digitized as part of research carried out during a doctoral research period at Universidade Nova de Lisboa in 2015. These digital documents come from physical collections held in public historical archives and public and private libraries in Lisbon, Portugal.',
        'The historical sources consulted here represent the first stage in the diffusion of multi-referenced knowledge (museum, geographic, historical, anthropological, and digital), making it visible through storage on a responsive website.'
      ]
    },
    'onde-chegar': {
      eyebrow: 'Perspectives',
      heading: 'Where We Are Going',
      caption: '<strong>Baobab:</strong> The tree of life in Africa represents strength, ancestry, deep roots, and lasting growth. It embodies our destination: to stand firm and flourish.',
      paragraphs: [
        'This digital mapping initially aims to provide a catalog of historical sources on African and Afro-Brazilian religions and religious practices from historical archives in countries that are part of the Atlantic world: Brazil and Portugal. This corpus may expand as research continues, encompassing the Atlantic/Pacific world: Brazil, Peru, the United States of America, and Portugal.',
        'In due course, historical archives in the Brazilian cities of Salvador-BA, Santo Amaro da Purificação-BA, Rio de Janeiro-RJ, and Belo Horizonte-MG will become part of this database. The mapping may be expanded to include documents from archives/libraries in Lima/Peru, Providence/Rhode Island, New Orleans/Louisiana, and New York City/New York, located in the United States of America.'
      ],
      temporalHeading: 'Time Frame',
      temporalParagraphs: [
        'With regard to the time frame presented by the mapping, there are three distinct periods. The first, considered central, concerns sources from 1916 to 1966 (the first half of the twentieth century), since this period encompassed the studies examined in my doctoral thesis on the history and memory of Candomblé Congo-Angola in Bahia (Nunes, 2017).',
        'The second period focuses on the second half of the twentieth century, with sources discussing the liberation movements in Congo (1960) and Angola (1975), including the period of struggles for colonial independence and post-colonization (1980-1990).',
        'There is also a further period, represented by some documents dated to the eighteenth and nineteenth centuries. I added this period because I consider important the approaches concerning the processes of enslavement, customs, languages, and religious practices of the territories involved.',
        'I clarify that the sources are mostly concentrated on documents concerning the territories of Central Africa (the Democratic Republic of the Congo, the Republic of the Congo, and Angola). However, although this was not the scope of the research, some archives also made it possible to include documentary sources from West and East Africa.'
      ],
      sankofaCaption: 'An Adinkra bird that looks back while seeking an egg on its back — it means “go back and get it”. It represents the idea of learning from the past to build the future.'
    },
    'sobre-cdfhma': {
      eyebrow: 'Research Methodology',
      heading: 'About the Digital Mapping',
      caption: '<strong>Connected map of Africa:</strong> The terracotta-colored continent, crossed by a network of bright nodes and lines, represents territory mapped digitally; each node is a story, a data point, or a community.',
      paragraphs: [
        'In this mapping, it was possible to systematize and catalog <strong>129 historical sources</strong>, distributed across three public archives and two libraries, one public and one private. Of these, 30 refer to primary sources (cartography, iconography, manuscripts, civil and political proceedings, and reports), while 99 are secondary sources (catalogs, bibliographies, and printed materials — newspapers and bulletins).',
        'Public archives account for 72 sources, equivalent to 55.81% of the sources collected. The libraries account for 57 sources (44.19%). Among the institutions surveyed, according to Graph and Table 1, the AHU holds 28.68% (37), followed by the BFCHS at 24.81% (32) and the BNP at 19.38% (25). The ADBMNE accounts for 14.73% (19), and the ANTT for 12.40% (16).',
        'Among the source types systematized according to Table 2 and Graph 2, bibliographic sources stand out at 48.06% (62), followed by printed sources at 17.05% (22) and catalogs at 11.63% (15). Iconography represents 10.08% (13), while manuscripts and civil/political proceedings each represent 4.65% (6). Reports and cartography complete the collection at 3.1% (4) and 0.78% (1), respectively.',
        'Of the 129 historical sources, only seven digital objects (documents) are unavailable on the website. According to the catalog numbering, these are: <strong>ADBMNE</strong> — items 8 and 12; <strong>AHU</strong> — item 56; <strong>ANTT</strong> — items 66, 67, and 68; <strong>BNP</strong> — item 123.',
        'The sources collected made it necessary to catalog and organize access to the documents in a database, initially structured in Microsoft Excel spreadsheets. Each record was cataloged using the following data categories, or metadata:'
      ],
      tableCaptions: [
        'Table 1 — Documents cataloged in archives and libraries in Lisbon',
        'Table 2: Consolidation of Systematized Historical Sources'
      ],
      tableHeaders: [
        'Archives', 'Numbering', 'Qtd Docs', '%',
        'Source Types', 'ADBMNE', 'AHU', 'ANTT', 'BFCHS', 'BNP', 'Total', '(%)'
      ],
      tableRows: [
        'C= Cartography', 'CAT = Catalog', 'B= Bibliography', 'I= Iconography',
        'IMP = Printed material/Newspaper-Bulletin', 'M = Manuscript',
        'PPC = Political and Civil Proceedings', 'RELAT = Report'
      ],
      tableTotals: ['Total', 'Total sources'],
      metadataTitles: [
        'Document number in the cartography', 'Archive abbreviation consulted', 'Source type collected', 'Source title',
        'Number of pages', 'Area of interest/topic', 'Source year', 'Brief source description',
        'Link to source PDF', 'Reference code', 'City/Country'
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
      chartCaptions: [
        'Graph 1 — Archives/Libraries — Quantity of Documents Mapped',
        'Graph 2– Archives/Libraries — Quantity and (%) of Documents Mapped by Types'
      ],
      sourceLabels: [
        'Sources: ADBMNE, AHU, ANTT, BFCHS, BNP, 2015.',
        'Sources: ADBMNE, AHU, ANTT, BFCHS, BNP, 2015.',
        'Sources: ADBMNE, AHU, ANTT, BFCHS, BNP, 2015.',
        'Sources: ADBMNE, AHU, ANTT, BFCHS, BNP, 2015.'
      ]
    },
    'direitos-autorais': {
      eyebrow: 'Legal Matters',
      heading: 'Copyright',
      caption: '<strong>Protective hand over a shield:</strong> The open hand above the shield symbolizes care, guardianship, and protection—not ownership, but responsible stewardship.',
      paragraphs: [
        'For the preparation of this catalog/mapping, some clarifications about Copyright are necessary. Books and documents in historical archives, once they enter the public domain, may be used freely. Reproduction, distribution, and adaptation are permitted without prior authorization.',
        'In Brazil, Law No. 9,610/98 (the Copyright Act) guarantees authorship and the rights to use, benefit from, and distribute a work for 70 years after the author’s death; authorization is required during that period. Government documents produced by public bodies—such as minutes, laws, and official reports held in historical archives—are not protected by copyright and may be freely used in the public interest, subject to Law No. 13,709/2018 (the General Data Protection Law, LGPD).',
        'Regarding digitization and rights in copies, every cataloged source is identified by its sequential cartography number, archive name or abbreviation, source type and title, number of pages in the available file, subject area, year, summary description, archive reference code, and a link to the digitized document. Links may provide full or partial access. We also provide the institutional websites of the archives and libraries consulted, making it easier to locate and verify sources in their original collections.',
        'As this catalog was organized in 2026, all works/documents listed below in this digital mapping are subject to the following conditions:'
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
        'Defining where digital objects are kept through content repositories and the creation of metadata is a relevant step that will connect and continue the digitization and maintenance of the repository, here called “Digital Curation” (Gregório, Costa, Maciel, 2025).',
        'As a digital curator, I wish to ensure the preservation, quality, integrity, and continuity of digital objects throughout their life cycle. Every curator tells a story. In this repository, I sought to select, digitize, systematize, and disseminate documents on the history of African, Afro-Brazilian, and Amefrican religions and religious practices, dated to the first half of the twentieth century.',
        'In addition to being the digital curator, I completed a postdoctoral research period in History at the Federal University of Minas Gerais (UFMG). I completed a PhD in Social History at the Federal University of Bahia (UFBA), with a doctoral research period in Anthropology at Universidade Nova de Lisboa, Portugal. I am a Full Professor of History in Basic, Technical, and Technological Education at the Federal Institute of Education, Science and Technology of Bahia (IFBA).',
        'To access my academic background, please consult my Lattes CV at <a href="http://lattes.cnpq.br/1891027810023631" target="_blank" rel="noopener">http://lattes.cnpq.br/1891027810023631</a>. For my main publications, visit <a href="https://linktr.ee/erivaldonunes?utm_source=linktree_profile_share" target="_blank" rel="noopener">https://linktr.ee/erivaldonunes?utm_source=linktree_profile_share</a>.'
      ],
      subheading: 'Curator in Charge',
      contact: 'Contact us: <a href="mailto:cartdigitalfh@gmail.com">cartdigitalfh@gmail.com</a>'
    },
    parceiros: {
      eyebrow: 'Collaborative Network',
      heading: 'Partners, Institutional Websites and References',
      partnersHeading: 'Partners',
      caption: '<strong>Circle of joined hands:</strong> Seven hands joined in a ring—a symbol of partnership, alliance, and mutual trust. Each hand represents a partner.',
      paragraphs: [
        'The institutional partners listed here are connected to the doctoral research (2012–2017) and postdoctoral research (2025–2026), both conducted in Brazil, with a doctoral research period in Lisbon, Portugal, in 2015.',
        'Regarding institutional websites for searching and consulting historical sources, the archives and libraries included in this cartography can be accessed directly through the following links:'
      ],
      partnerHeadings: [
        'Funding Agency', 'Public and Private Universities',
        'Research Centers in Lisbon', 'Schools and Education Institute'
      ],
      subheading: 'Institutional Websites for Searching and Consulting Historical Sources',
      archiveLinks: [
        'Diplomatic Archives and Library, Ministry of Foreign Affairs:',
        'Overseas Historical Archive:',
        'National Archive of Torre do Tombo:',
        'Library of the School of Social Sciences and Humanities/Universidade Nova de Lisboa:',
        'National Library of Portugal:',
        'National Digital Library of Portugal:'
      ],
      referenceHeading: 'References',
      referenceIntro: 'Regarding the bibliographic references that supported the presentation text of this website/database, the following sources are highlighted:',
      referenceCaption: '<strong>Open book with two forms of knowledge:</strong> The left page has 16 Adinkra symbols (African writing/encoded knowledge); the right page has spirals (orality and the flow of narrated history).'
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
        'Somos un repositorio digital temático fruto del proyecto de investigación posdoctoral titulado «Cartografía Digital de Fuentes Históricas en el Mundo Atlántico: Religiones y religiosidades afrobrasileñas», desarrollado en el Programa de Posgrado en Historia (PPGHIS) de la Facultad de Filosofía y Ciencias Humanas (FAFICH) de la Universidad Federal de Minas Gerais (UFMG), que reúne fuentes primarias y secundarias sobre la historia de las religiones y religiosidades localizadas territorialmente en el mundo atlántico.',
        'Este repositorio se titula «Humanidades Digitales en el Mundo Atlántico: Religiones y religiosidades africanas y afrobrasileñas». Fue organizado por el historiador Prof. Dr. Erivaldo Sales Nunes, vinculado al Instituto Federal de Educación, Ciencia y Tecnología de Bahía (IFBA), campus Salvador. La supervisión del proyecto contó con la colaboración de la Profa. Dra. Vanicléia Silva Santos (University of Pennsylvania/UFMG).',
        'El modelo de creación del repositorio digital con base de datos se estructuró y almacenó en una dirección de la red de alcance mundial. Esa contribución tecnológica se realizó con la colaboración del Prof. Dr. Luiz Machado y del becario-investigador Gabriel Borba, integrantes del curso de Juegos Digitales del Instituto Federal de Educación, Ciencia y Tecnología de Bahía (IFBA), campus Lauro de Freitas.',
        'El catálogo reúne documentos físicos, en su mayoría del siglo XX, digitalizados durante investigaciones realizadas en una estancia doctoral en la Universidade Nova de Lisboa en 2015. Estos documentos digitales proceden de colecciones físicas conservadas en archivos históricos públicos y bibliotecas públicas y privadas de Lisboa, Portugal.',
        'Las fuentes históricas aquí consultadas representan la primera etapa de difusión de un conocimiento multirreferencial (museístico, geográfico, histórico, antropológico y digital), que se difunde mediante almacenamiento en un sitio web adaptable.'
      ]
    },
    'onde-chegar': {
      eyebrow: 'Perspectivas',
      heading: 'Hacia dónde vamos',
      caption: '<strong>Baobab:</strong> El árbol de la vida africano representa fuerza, ancestralidad, raíces profundas y crecimiento duradero. Es nuestro destino: mantenernos firmes y dar frutos.',
      paragraphs: [
        'Este mapeo digital busca ofrecer inicialmente un catálogo de fuentes históricas sobre religiones y religiosidades africanas y afrobrasileñas procedentes de archivos históricos de países que forman parte del mundo atlántico: Brasil y Portugal. Este conjunto podrá ampliarse a medida que avance la investigación, abarcando el mundo atlántico/pacífico: Brasil, Perú, Estados Unidos de América y Portugal.',
        'A su debido tiempo, los archivos históricos de las ciudades brasileñas de Salvador-BA, Santo Amaro da Purificação-BA, Río de Janeiro-RJ y Belo Horizonte-MG formarán parte de esta base de datos. El mapeo podrá ampliarse para incluir documentos de archivos/bibliotecas de Lima/Perú, Providence/Rhode Island, New Orleans/Louisiana y New York City/New York, situadas en los Estados Unidos de América.'
      ],
      temporalHeading: 'Recorte temporal',
      temporalParagraphs: [
        'En cuanto al recorte temporal que presenta el mapeo, hay tres momentos distintos. El primero, considerado central, comprende las fuentes del período entre 1916 y 1966 (primera mitad del siglo XX), pues esta temporalidad abarcaba los estudios examinados en mi tesis doctoral sobre la historia y la memoria del candomblé Congo-Angola en Bahía (Nunes, 2017).',
        'El segundo recorte temporal se concentra en la segunda mitad del siglo XX, con fuentes que abordan el movimiento de liberación en el Congo (1960) y en Angola (1975), e incluye el período de luchas por la independencia colonial y la poscolonización (1980-1990).',
        'También se contempla otro recorte temporal, que comprende algunos documentos fechados en los siglos XVIII y XIX. Añadí este recorte porque considero importantes los enfoques sobre los procesos de esclavización, las costumbres, las lenguas y las religiosidades de los territorios involucrados.',
        'Aclaro que las fuentes se concentran mayoritariamente en documentos relacionados con los territorios de África Central (República Democrática del Congo, República del Congo y Angola). Sin embargo, aunque no formaba parte del alcance de la investigación, en algunos archivos fue posible incluir fuentes documentales de África Occidental y Oriental.'
      ],
      sankofaCaption: 'Ave Adinkra que mira hacia atrás buscando un huevo en su dorso; significa «vuelve y recógelo». Representa la idea de aprender del pasado para construir el futuro.'
    },
    'sobre-cdfhma': {
      eyebrow: 'Metodología de la investigación',
      heading: 'Sobre el mapeo digital',
      caption: '<strong>Mapa conectado de África:</strong> El continente en tonos terracota, atravesado por una red de nodos y líneas luminosas, representa un territorio cartografiado digitalmente; cada nodo es una historia, un dato o una comunidad.',
      paragraphs: [
        'En este mapeo fue posible sistematizar y catalogar <strong>129 fuentes históricas</strong>, distribuidas en tres archivos públicos y dos bibliotecas, una pública y otra privada. De ellas, 30 se refieren a fuentes primarias (cartografía, iconografía, manuscritos, procesos civiles y políticos e informes), y 99 son fuentes secundarias (catálogos, bibliografías e impresos —periódicos y boletines).',
        'Los archivos públicos reúnen 72 fuentes, equivalentes al 55,81 % de las fuentes recopiladas. Las bibliotecas aportan 57 fuentes (44,19 %). Según el Gráfico y la Tabla 1, entre las instituciones investigadas el AHU concentra el 28,68 % (37), seguido por la BFCHS con el 24,81 % (32) y la BNP con el 19,38 % (25). El ADBMNE aporta el 14,73 % (19) y el ANTT el 12,40 % (16).',
        'Entre los tipos de fuentes sistematizados según la Tabla 2 y el Gráfico 2 destacan las fuentes bibliográficas, con el 48,06 % (62); los impresos, con el 17,05 % (22); y los catálogos, con el 11,63 % (15). La iconografía representa el 10,08 % (13), mientras que los manuscritos y los procesos políticos/civiles representan, cada uno, el 4,65 % (6). Los informes y la cartografía completan el conjunto con el 3,1 % (4) y el 0,78 % (1), respectivamente.',
        'De las 129 fuentes históricas, solo siete objetos digitales (documentos) no están disponibles en el sitio. Según la numeración del catálogo, son: <strong>ADBMNE</strong>: documentos 8 y 12; <strong>AHU</strong>: documento 56; <strong>ANTT</strong>: documentos 66, 67 y 68; <strong>BNP</strong>: documento 123.',
        'Las fuentes recopiladas hicieron necesario catalogar y organizar el acceso a los documentos mediante una base de datos, estructurada inicialmente en hojas de cálculo de Microsoft Excel. Cada registro se catalogó con las siguientes categorías de datos o metadatos:'
      ],
      tableCaptions: [
        'Tabla 1 — Documentos catalogados en archivos y bibliotecas de Lisboa',
        'Tabla 2: Consolidación de las Fuentes Históricas Sistematizadas'
      ],
      tableHeaders: [
        'Archivos', 'Numeración', 'Qtd Docs', '%',
        'Tipo de fuentes', 'ADBMNE', 'AHU', 'ANTT', 'BFCHS', 'BNP', 'Total', '(%)'
      ],
      tableRows: [
        'C= Cartografía', 'CAT = Catálogo', 'B= Bibliografía', 'I= Iconografía',
        'IMP = Impreso/Periódico-Boletín', 'M = Manuscrito',
        'PPC = Proceso político y civil', 'RELAT = Informe'
      ],
      tableTotals: ['Total', 'Total de fuentes'],
      metadataTitles: [
        'Número del documento en la cartografía', 'Sigla del archivo consultado', 'Tipo de fuente recopilada', 'Título de la fuente',
        'Número de páginas', 'Área de interés/temática', 'Año de la fuente', 'Descripción sumaria de la fuente',
        'Enlace de acceso a la fuente en PDF', 'Código de referencia', 'Ciudad/País'
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
      chartCaptions: [
        'Gráfico 1 – Archivos/Bibliotecas – Cantidad de Documentos Mapeados',
        'Gráfico 2– Archivos/Bibliotecas – Cantidad y (%) de Documentos Mapeados por Tipologías'
      ],
      sourceLabels: [
        'Fuentes: ADBMNE, AHU, ANTT, BFCHS, BNP, 2015.',
        'Fuentes: ADBMNE, AHU, ANTT, BFCHS, BNP, 2015.',
        'Fuentes: ADBMNE, AHU, ANTT, BFCHS, BNP, 2015.',
        'Fuentes: ADBMNE, AHU, ANTT, BFCHS, BNP, 2015.'
      ]
    },
    'direitos-autorais': {
      eyebrow: 'Aspectos legales',
      heading: 'Derechos de autor',
      caption: '<strong>Mano protectora sobre el escudo:</strong> La mano abierta sobre el escudo simboliza cuidado, tutela y protección; no posesión, sino custodia responsable.',
      paragraphs: [
        'Para elaborar este catálogo/mapeo, es necesario aclarar algunas cuestiones sobre los derechos de autor. Los libros y documentos de archivos históricos que pasan al dominio público pueden utilizarse libremente. Se permite su reproducción, distribución y adaptación sin autorización previa.',
        'En Brasil, la Ley n.º 9.610/98 (Ley de Derechos de Autor) garantiza la autoría y los derechos de uso, disfrute y distribución durante 70 años después de la muerte del autor; durante ese período se requiere autorización. Los documentos gubernamentales producidos por organismos públicos —como actas, leyes e informes oficiales conservados en archivos históricos— no están protegidos por derechos de autor y pueden utilizarse libremente por ser de interés público, siempre respetando la Ley n.º 13.709/2018 (Ley General de Protección de Datos, LGPD).',
        'En cuanto a la digitalización y los derechos sobre las copias, cada fuente catalogada se identifica con un número secuencial de la cartografía, el nombre o la sigla del archivo, el tipo y el título de la fuente, el número de páginas del archivo disponible, el área temática, el año, una descripción resumida, el código de referencia y un enlace al documento digitalizado. El acceso mediante los enlaces puede ser total o parcial. También ofrecemos los sitios institucionales de los archivos y bibliotecas consultados para facilitar la localización y verificación de las fuentes en sus colecciones originales.',
        'Dado que esta catalogación se organizó en 2026, todas las obras/documentos enumerados a continuación en este mapeo digital están sujetos a las siguientes condiciones:'
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
        'La definición de los espacios de custodia de los objetos digitales mediante repositorios de contenidos y la creación de metadatos es una etapa relevante que articulará y dará continuidad a la digitalización y al mantenimiento del repositorio, aquí denominado «Curaduría digital» (Gregório, Costa, Maciel, 2025).',
        'Como curador digital, deseo garantizar la preservación, la calidad, la integridad y la continuidad de los objetos digitales durante todo su ciclo de vida. Todo curador cuenta una historia. En este repositorio procuré seleccionar, digitalizar, sistematizar y difundir documentos sobre la historia de las religiones y religiosidades africanas, afrobrasileñas y amefricanas, fechados en la primera mitad del siglo XX.',
        'Además de ser el curador digital responsable, realicé una estancia posdoctoral en Historia en la Universidad Federal de Minas Gerais (UFMG). Concluí el doctorado en Historia Social en la Universidad Federal de Bahía (UFBA), con una estancia doctoral en Antropología en la Universidade Nova de Lisboa, Portugal. Soy Profesor Titular de Historia en la Educación Básica, Técnica y Tecnológica del Instituto Federal de Educación, Ciencia y Tecnología de Bahía (IFBA).',
        'Para acceder a mi trayectoria académica, consulte mi Currículo Lattes en <a href="http://lattes.cnpq.br/1891027810023631" target="_blank" rel="noopener">http://lattes.cnpq.br/1891027810023631</a>. Para consultar mis principales publicaciones, visite <a href="https://linktr.ee/erivaldonunes?utm_source=linktree_profile_share" target="_blank" rel="noopener">https://linktr.ee/erivaldonunes?utm_source=linktree_profile_share</a>.'
      ],
      subheading: 'Curador responsable',
      contact: 'Contacto: <a href="mailto:cartdigitalfh@gmail.com">cartdigitalfh@gmail.com</a>'
    },
    parceiros: {
      eyebrow: 'Red de colaboración',
      heading: 'Socios, sitios institucionales y referencias',
      partnersHeading: 'Socios',
      caption: '<strong>Círculo de manos unidas:</strong> Siete manos entrelazadas en una rueda, símbolo de cooperación, alianza y confianza mutua. Cada mano representa a un socio.',
      paragraphs: [
        'Los socios institucionales aquí mencionados están vinculados a las investigaciones de doctorado (2012–2017) y posdoctorado (2025–2026), ambas realizadas en Brasil, con una estancia doctoral en Lisboa, Portugal, en 2015.',
        'En cuanto a los sitios institucionales para buscar y consultar fuentes históricas, se puede acceder directamente a los archivos y bibliotecas que forman parte de esta cartografía mediante los siguientes enlaces:'
      ],
      partnerHeadings: [
        'Agencia de financiación', 'Universidades públicas y privadas',
        'Centros de investigación en Lisboa', 'Facultades e instituto de educación'
      ],
      subheading: 'Sitios institucionales para buscar y consultar fuentes históricas',
      archiveLinks: [
        'Archivo Diplomático y Biblioteca Ministerio de Asuntos Exteriores:',
        'Archivo Histórico Ultramarino:',
        'Archivo Nacional de Torre do Tombo:',
        'Biblioteca de la Facultad de Ciencias Sociales y Humanas/Universidade Nova de Lisboa:',
        'Biblioteca Nacional de Portugal:',
        'Biblioteca Nacional Digital de Portugal:'
      ],
      referenceHeading: 'Referencias',
      referenceIntro: 'En cuanto a las referencias bibliográficas que fundamentaron el texto de presentación de este sitio/base de datos, destaco las siguientes fuentes:',
      referenceCaption: '<strong>Libro abierto con dos formas de conocimiento:</strong> La página izquierda muestra 16 Adinkras (escritura africana/conocimiento codificado); la derecha, espirales (oralidad y flujo de la historia narrada).'
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
    'onde-chegar': ['Where we are going', 'Sankofa image'],
    'sobre-cdfhma': ['About the Digital Mapping', 'Graph 1: Distribution of Documents by Archives/Libraries', 'Graph 2: Quantity and percentage of sources by types'],
    'direitos-autorais': ['Copyright'],
    'curadoria-digital': ['Digital curation'],
    parceiros: ['Institutional partners and websites', 'Open book with two forms of knowledge'],
    referencias: ['References']
  },
  es: {
    home: ['Baúl del catálogo'],
    'quem-somos': ['Quiénes somos'],
    'onde-chegar': ['Hacia dónde vamos', 'Imagen de Sankofa'],
    'sobre-cdfhma': ['Sobre el mapeo digital', 'Gráfico 1: Distribución de documentos por archivos/bibliotecas', 'Gráfico 2: Cantidad y porcentaje de fuentes por tipologías'],
    'direitos-autorais': ['Derechos de autor'],
    'curadoria-digital': ['Curaduría digital'],
    parceiros: ['Socios institucionales y sitios web', 'Libro abierto con dos formas de conocimiento'],
    referencias: ['Referencias']
  }
};

function substituir(selector, valores, contexto = document, usarHtml = true) {
  const elementos = contexto.querySelectorAll(selector);
  if (elementos.length === 0 || valores.length === 0) return;
  const limite = Math.min(elementos.length, valores.length);
  if (elementos.length !== valores.length) {
    console.warn(`Traducción incompleta para "${selector}": se esperaban ${elementos.length} textos y hay ${valores.length}. Usando os ${limite} primeiros disponíveis.`);
  }
  for (let indice = 0; indice < limite; indice += 1) {
    const elemento = elementos[indice];
    if (usarHtml) elemento.innerHTML = valores[indice];
    else elemento.textContent = valores[indice];
  }
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
  const images = document.querySelectorAll('.page-intro-figure img, .page-figure img, .content-image-frame img, .chart-figure img');
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
    substituir(
      '.content-page > .content-wrap > .content-body-with-image:not(.temporal-block) > .page-figure > .page-figure-caption',
      [traducao.caption],
      conteudo
    );

    if (traducao.paragraphs) {
      substituir(
        '.content-body-with-image:not(.temporal-block) > .content-text > p:not(.ref-item):not(.chart-source):not(.table-source)',
        traducao.paragraphs,
        conteudo
      );
    }
    if (traducao.temporalParagraphs) {
      substituir('.temporal-heading', [traducao.temporalHeading], conteudo, false);
      substituir('.temporal-block .content-text > p', traducao.temporalParagraphs, conteudo);
      const sankofaCaption = conteudo.querySelector('.sankofa-caption');
      if (sankofaCaption) {
        sankofaCaption.textContent = traducao.sankofaCaption;
      }
    }
    if (traducao.listItems) substituir('.content-text ul:first-of-type li', traducao.listItems, conteudo, false);
    if (traducao.subheading) substituir('.content-text > h3:not(.partners-heading)', [traducao.subheading], conteudo, false);
    if (traducao.partnersHeading) substituir('.partners-heading', [traducao.partnersHeading], conteudo, false);
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
    if (traducao.referenceHeading) {
      const heading = conteudo.querySelector('.references-section > h3');
      if (heading) heading.textContent = traducao.referenceHeading;
      const intro = conteudo.querySelector('.reference-intro');
      if (intro) intro.textContent = traducao.referenceIntro;
      const caption = conteudo.querySelector('.references-section .page-figure-caption');
      if (caption) caption.innerHTML = traducao.referenceCaption;
    }
    if (traducao.chartCaptions) {
      substituir('.chart-figure figcaption', traducao.chartCaptions, conteudo, false);
      substituir('.chart-source, .table-source', traducao.sourceLabels, conteudo, false);
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
    }
  }
}

traduzirInterface(IDIOMA_ATIVO);

# BancoDeDadosCartografiaDigital
Projeto Banco de Dados Cartografia Digital Religiões Afro-brasileiras IFBA

Site **Humanidades Digitais no Mundo Atlântico: Religiões e Religiosidades Africanas e Afro-brasileiras**, repositório digital de fontes históricas organizado pelo Prof. Dr. Erivaldo Sales Nunes (IFBA) a partir de pesquisa pós-doutoral na UFMG.

## Páginas do site

| Página | Arquivo | O que representa |
| --- | --- | --- |
| Fichário Geral | `index.html` | Página principal: o catálogo com as 129 fontes históricas. Cada fonte aparece como uma ficha com número, arquivo de origem, tipo, título, descrição, área temática, ano, páginas, código de referência e link para o documento digitalizado. Permite buscar e filtrar por arquivo, tipo de fonte, cidade, país, área temática, tipo de data e intervalo de anos, além de ordenar e consultar a legenda de siglas. |
| Quem Somos | `paginas/quem-somos.html` | Apresentação do repositório: título, organizador, origem no projeto de pós-doutorado na UFMG, supervisão, equipe técnica do IFBA (Lauro de Freitas) e os arquivos e bibliotecas de Lisboa onde os documentos foram digitalizados em 2015. |
| Para Onde Vamos | `paginas/onde-chegar.html` | Perspectivas do projeto: o recorte geográfico atual (Brasil e Portugal) e a possível ampliação para outros arquivos no Brasil, Peru e Estados Unidos. Inclui a seção **Recorte Temporal**, que explica os três períodos cobertos pelas fontes. |
| Sobre o Mapeamento Digital | `paginas/sobre-cdfhma.html` | Metodologia da pesquisa: números do mapeamento (fontes por arquivo e por tipo), tabelas e gráficos, documentos indisponíveis e a descrição dos 11 metadados usados na catalogação. |
| Curadoria Digital | `paginas/curadoria-digital.html` | O conceito de curadoria digital adotado no projeto e a apresentação do curador responsável (formação, Currículo Lattes, publicações e contato). |
| Parceiros, Sites Institucionais e Referências | `paginas/parceiros.html` | Instituições parceiras (agência de fomento, universidades, centros de pesquisa e faculdades), links para os sites dos arquivos e bibliotecas consultados e as referências bibliográficas usadas nos textos do site. |
| Direitos Autorais | `paginas/direitos-autorais.html` | Esclarecimentos sobre domínio público, Lei de Direitos Autorais e LGPD, e as condições de acesso (integral ou parcial) às obras e documentos catalogados. |
| Referências (redirecionamento) | `paginas/referencias.html` | Página antiga mantida só para não quebrar links: redireciona para a seção de Referências em Parceiros. |

Todas as páginas compartilham o mesmo cabeçalho, com seleção de idioma (português, espanhol e inglês) e de tamanho da letra (médio ou grande), e o mesmo menu de navegação. A página atual e o idioma são mantidos ao navegar.

## Organização dos arquivos

- `index.html`: fichário geral e filtros do catálogo.
- `paginas/`: páginas institucionais do projeto.
- `css/site.css`: estilos compartilhados (fontes, cores, layout e escala de tamanho da letra).
- `js/fichario.js`: busca, filtros e apresentação dos registros do fichário.
- `js/traducao.js`: textos em inglês e espanhol das páginas e da interface, e o seletor de tamanho da letra.
- `fontes.json`: dados das fontes catalogadas (em português).
- `fontes-en.json` e `fontes-es.json`: títulos, descrições e áreas temáticas das fontes em inglês e espanhol.

Abra `index.html` para acessar o fichário e navegar entre as páginas. Nas versões em inglês e espanhol, as fichas do catálogo aparecem traduzidas e mostram também o título original em português.

let FONTES = [];

const TIPO_LEGENDA = {
  C: 'Cartografia',
  B: 'Bibliografia',
  I: 'Iconografia',
  F: 'Fotografia',
  D: 'Documento oficial',
  M: 'Manuscrito',
  A: 'Áudio/Depoimento oral',
  IMP: 'Impresso/Jornal-Boletim',
  PPC: 'Processo Político e Civil',
  CAT: 'Catálogo',
  RELAT: 'Relatório'
};

const ARQUIVO_LEGENDA = {
  "ADBMNE": "Arquivo Diplomático e Biblioteca do Ministério dos Negócios Estrangeiros",
  "AHU": "Arquivo Histórico Ultramarino",
  "ANTT": "Arquivo Nacional Torre do Tombo",
  "BFCHS": "Biblioteca da Faculdade de Ciências Humanas e Sociais da Universidade Nova de Lisboa",
  "BNP": "Biblioteca Nacional de Portugal",
};

const grid = document.getElementById('grid');
const vazio = document.getElementById('vazio');
const erroEl = document.getElementById('erro');
const contagem = document.getElementById('contagem');
const busca = document.getElementById('busca');
const filtroArquivo = document.getElementById('filtroArquivo');
const filtroTipo = document.getElementById('filtroTipo');
const filtroArea = document.getElementById('filtroArea');
const filtroCidade = document.getElementById('filtroCidade');
const filtroPais = document.getElementById('filtroPais');
const filtroTipoData = document.getElementById('filtroTipoData');
const anoDe = document.getElementById('anoDe');
const anoAte = document.getElementById('anoAte');
const ordenar = document.getElementById('ordenar');
const legendaCorpo = document.getElementById('legendaCorpo');
const idioma = document.documentElement.lang;
const textosCatalogo = {
  en: {
    year: 'Year',
    pages: 'Pages',
    city: 'City',
    country: 'Country',
    archiveCode: 'Archive ref.',
    openFile: 'Open digitized file →',
    unavailable: 'Link unavailable',
    sourceTypes: 'Source types',
    archives: 'Archives'
  },
  es: {
    year: 'Año',
    pages: 'Págs.',
    city: 'Ciudad',
    country: 'País',
    archiveCode: 'Ref. del archivo',
    openFile: 'Abrir archivo digitalizado →',
    unavailable: 'Enlace no disponible',
    sourceTypes: 'Tipos de fuente',
    archives: 'Archivos'
  }
};
const textoCatalogo = textosCatalogo[idioma] || {
  year: 'Ano',
  pages: 'Págs.',
  city: 'Cidade',
  country: 'País',
  archiveCode: 'Cód. no arquivo',
  openFile: 'Abrir arquivo digitalizado →',
  unavailable: 'Link não disponibilizado',
  sourceTypes: 'Tipos de fonte',
  archives: 'Arquivos'
};

function popularSelect(select, valores){
  select.querySelectorAll('option:not(:first-child)').forEach(o => o.remove());
  [...new Set(valores)].sort().forEach(v=>{
    const opt = document.createElement('option');
    opt.value = v; opt.textContent = v;
    select.appendChild(opt);
  });
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[s]));
}

function renderizar(){
  const termo = busca.value.trim().toLowerCase();
  const arq = filtroArquivo.value;
  const tipo = filtroTipo.value;
  const area = filtroArea.value;
  const cidade = filtroCidade.value;
  const pais = filtroPais.value;
  const tipoData = filtroTipoData.value;
  const deVal = anoDe.value.trim() ? parseInt(anoDe.value, 10) : null;
  const ateVal = anoAte.value.trim() ? parseInt(anoAte.value, 10) : null;

  let lista = FONTES.filter(f=>{
    const texto = `${f.titulo} ${f.descricao} ${f.palavrasChave}`.toLowerCase();
    if (termo && !texto.includes(termo)) return false;
    if (arq && f.arquivo !== arq) return false;
    if (tipo && f.tipo !== tipo) return false;
    if (area && f.area !== area) return false;
    if (cidade && f.cidade !== cidade) return false;
    if (pais && f.pais !== pais) return false;
    if (tipoData && f.anoTipo !== tipoData) return false;
    if (deVal !== null || ateVal !== null){
      if (f.anoInicio === null || f.anoFim === null) return false;
      if (deVal !== null && f.anoFim < deVal) return false;
      if (ateVal !== null && f.anoInicio > ateVal) return false;
    }
    return true;
  });

  const criterio = ordenar.value;
  lista.sort((a,b)=>{
    if (criterio === 'ano'){
      const ai = a.anoInicio === null ? Infinity : a.anoInicio;
      const bi = b.anoInicio === null ? Infinity : b.anoInicio;
      return ai - bi;
    }
    if (criterio === 'titulo') return a.titulo.localeCompare(b.titulo, 'pt-BR');
    return a.id - b.id;
  });

  grid.innerHTML = '';
  contagem.textContent = lista.length;
  vazio.style.display = (lista.length || !FONTES.length) ? 'none' : 'block';
  if (!FONTES.length) vazio.style.display = 'none';
  vazio.style.display = (FONTES.length && !lista.length) ? 'block' : 'none';

  lista.forEach((f, idx)=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.style.setProperty('--tipo-color', `var(--c-${f.tipoCod}, var(--brass))`);
    card.style.animationDelay = `${idx * 0.04}s`;

    card.innerHTML = `
      <div class="catalog-no">Nº ${String(f.id).padStart(4,'0')} · ${escapeHtml(f.arquivo)}</div>
      <span class="tipo-tag">${escapeHtml(f.tipo)}</span>
      <h3>${escapeHtml(f.titulo)}</h3>
      <p class="desc">${escapeHtml(f.descricao)}</p>
      <div class="tema">${escapeHtml(f.area)}</div>
      <div class="meta-row">
        <span><em>${textoCatalogo.year}</em>${escapeHtml(f.ano)}</span>
        <span><em>${textoCatalogo.pages}</em>${escapeHtml(f.paginas)}</span>
        ${f.cidade ? `<span><em>${textoCatalogo.city}</em>${escapeHtml(f.cidade)}</span>` : ''}
        ${f.pais ? `<span><em>${textoCatalogo.country}</em>${escapeHtml(f.pais)}</span>` : ''}
        ${f.codigoDocumento ? `<span><em>${textoCatalogo.archiveCode}</em>${escapeHtml(f.codigoDocumento)}</span>` : ''}
      </div>
      ${(f.linkDisponivel !== false && f.link)
        ? `<a class="link-arquivo" href="${escapeHtml(f.link)}" target="_blank" rel="noopener">${textoCatalogo.openFile}</a>`
        : `<span class="link-indisponivel">${textoCatalogo.unavailable}</span>`}
    `;
    grid.appendChild(card);
  });
}

[busca, filtroArquivo, filtroTipo, filtroArea, filtroCidade, filtroPais, filtroTipoData, anoDe, anoAte, ordenar].forEach(el=>{
  el.addEventListener('input', renderizar);
  el.addEventListener('change', renderizar);
});

async function carregarDados(){
  try{
    const resp = await fetch('fontes.json', { cache: 'no-store' });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    FONTES = await resp.json();
    popularSelect(filtroArquivo, FONTES.map(f=>f.arquivo));
    popularSelect(filtroTipo, FONTES.map(f=>f.tipo));
    popularSelect(filtroArea, FONTES.map(f=>f.area));
    popularSelect(filtroCidade, FONTES.map(f=>f.cidade).filter(Boolean));
    popularSelect(filtroPais, FONTES.map(f=>f.pais).filter(Boolean));
    renderizarLegenda();
    renderizar();
  }catch(e){
    console.error('Falha ao carregar fontes.json:', e);
    erroEl.style.display = 'block';
  }
}

function renderizarLegenda(){
  const tiposUsados = [...new Set(FONTES.map(f=>f.tipoCod).filter(Boolean))].sort();
  const arquivosUsados = [...new Set(FONTES.map(f=>f.arquivo).filter(Boolean))].sort();

  const blocoTipos = `
    <div class="legenda-grupo">
      <h4>${textoCatalogo.sourceTypes}</h4>
      ${tiposUsados.map(cod => `
        <div class="legenda-item">
          <span class="swatch" style="background:var(--c-${cod}, var(--brass))"></span>
          <span class="sigla">${escapeHtml(cod)}</span>
          <span>${escapeHtml(TIPO_LEGENDA[cod] || '(adicionar legenda)')}</span>
        </div>
      `).join('')}
    </div>`;

  const blocoArquivos = `
    <div class="legenda-grupo">
      <h4>${textoCatalogo.archives}</h4>
      ${arquivosUsados.map(sigla => `
        <div class="legenda-item">
          <span class="sigla">${escapeHtml(sigla)}</span>
          <span>${escapeHtml(ARQUIVO_LEGENDA[sigla] || '(adicionar legenda)')}</span>
        </div>
      `).join('')}
    </div>`;

  legendaCorpo.innerHTML = blocoTipos + blocoArquivos;
}

carregarDados();

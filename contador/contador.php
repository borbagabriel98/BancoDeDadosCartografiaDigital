<?php
// Contador de visitantes do site.
// POST (enviado por js/contador.js): soma 1 ao total.
// GET (abrir no navegador): mostra quantas pessoas já entraram no site.

$arquivo = __DIR__ . '/visitas.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $f = fopen($arquivo, 'c+');
    if ($f && flock($f, LOCK_EX)) {
        $total = (int) stream_get_contents($f);
        ftruncate($f, 0);
        rewind($f);
        fwrite($f, (string) ($total + 1));
        fflush($f);
        flock($f, LOCK_UN);
    }
    if ($f) {
        fclose($f);
    }
    http_response_code(204);
    exit;
}

header('Content-Type: text/plain; charset=utf-8');
header('Cache-Control: no-store');
$total = is_file($arquivo) ? (int) file_get_contents($arquivo) : 0;
echo $total . ($total === 1 ? " pessoa\n" : " pessoas\n");

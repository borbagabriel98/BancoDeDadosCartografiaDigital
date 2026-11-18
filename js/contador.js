// Conta cada navegador uma única vez (marca guardada no localStorage).
(function () {
  try {
    if (localStorage.getItem("visitaContada")) return;
    localStorage.setItem("visitaContada", "1");
  } catch (e) {}
  var url = new URL("../contador/contador.php", document.currentScript.src).href;
  if (navigator.sendBeacon) navigator.sendBeacon(url);
  else fetch(url, { method: "POST", keepalive: true });
})();

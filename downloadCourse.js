await(async () => {
  window.cache = window.cache || {};
  const cacheData = async (key, fnForData) => window.cache[key] || (window.cache[key] = await fnForData());
  const fetchWithCache = async (...params) => cacheData(JSON.stringify(params), () => fetch(...params).then((r) => r.text()));
  const mapAsync = async (arr, fn) => {
    const resultArr = new Array(arr.length).fill(undefined);
    // eslint-disable-next-line no-await-in-loop
    for (let i = 0; i < arr.length; i++) { resultArr[i] = await fn(arr[i], i); }
    return resultArr;
  };

  const links = window.links || (window.links = [...document.querySelectorAll('.sidemenu-box a')].map((l) => (l.href.includes('cframe') ? l.href : `${l.href}&cframe=1`)).filter((l) => l.includes('content.php')));
  window.resps = await mapAsync(links, (link) => fetchWithCache(link));
  document.body.innerHTML = '<div/>';
  const div = document.body.firstElementChild;
  window.resps.map((r) => { const div1 = document.createElement('div'); div1.innerHTML = r; div.appendChild(div1); });
})();
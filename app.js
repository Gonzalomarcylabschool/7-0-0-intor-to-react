const newEl = (text) => {
  const el = document.createElement('div');
  el.innerHTML = `<h1>Hello World${text}</h1>`;
  document.body.appendChild(el);
  return el;
}
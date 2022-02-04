export function render(content) {
  const root = document.querySelector('#root');
  if (root) root.innerHTML = content
  return root;
}

const checkQuantityElement = () => {
  const categoriesRef = document.querySelector('#categories');
  console.log('Количество списков:', categoriesRef.children.length);

  const titleHRef = document.querySelector('h2');
  console.log('Категория:', titleHRef.textContent);

  const itemRef = document.querySelector('.item ul');
  console.log('Количество элементов:', itemRef.children.length);

  return;
};

console.log(checkQuantityElement());

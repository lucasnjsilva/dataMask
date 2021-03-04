export function Date(value) {
  let i = 0;
  const v = value.toString();
  const pattern = '##/##/####';

  return pattern.replace(/#/g, () => v[i++] || '');
}

export function Phone(value) {
  let i = 0;
  const v = value.toString();
  const pattern = '(##) #####-####';

  return pattern.replace(/#/g, () => v[i++] || '');
}

export function CPF(value) {
  let i = 0;
  const v = value.toString();
  const pattern = '###.###.###-##';

  return pattern.replace(/#/g, () => v[i++] || '');
}

export function RG(value) {
  let i = 0;
  const v = value.toString();
  const pattern = '#.###.###';

  return pattern.replace(/#/g, () => v[i++] || '');
}
export function NewDate(value) {
  let i = 0;
  const v = value.toString();
  const pattern = '##/##/####';
  
  if (Number.isInteger(value) && v.length === 8) {
    return pattern.replace(/#/g, () => v[i++] || '');
  } else {
    return "Invalid type or number.";
  }
}

export function Phone(value) {
  let i = 0;
  const v = value.toString();
  const pattern = '(##) #####-####';

  if (Number.isInteger(value) && v.length === 11) {
    return pattern.replace(/#/g, () => v[i++] || '');
  } else {
    return "Invalid type or number.";
  }
}

export function CPF(value) {
  let i = 0;
  const v = value.toString();
  const pattern = '###.###.###-##';

  if (Number.isInteger(value) && v.length === 11) {
    return pattern.replace(/#/g, () => v[i++] || '');
  } else {
    return "Invalid type or number.";
  }
}

export function RG(value) {
  let i = 0;
  const v = value.toString();
  const pattern = '#.###.###';

  return pattern.replace(/#/g, () => v[i++] || '');
}
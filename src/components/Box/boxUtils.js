export const alignBoxUtil = (prop) => {
  if (prop === 'center') {
    return 'center';
  }
  if (prop === 'start') {
    return 'flex-start';
  }
  if (prop === 'end') {
    return 'flex-end';
  }
  if (prop === 'stretch') {
    return 'stretch';
  }
  if (prop === 'baseline') {
    return 'baseline';
  }
  return null;
};

export const justifyBoxUtil = (prop) => {
  if (prop === 'center') {
    return 'center';
  }
  if (prop === 'start') {
    return 'flex-start';
  }
  if (prop === 'end') {
    return 'flex-end';
  }
  if (prop === 'between') {
    return 'space-between';
  }
  if (prop === 'around') {
    return 'space-around';
  }
  if (prop === 'evenly') {
    return 'space-evenly';
  }
  return null;
};

export const directionUtil = (prop) => {
  if (prop === 'row') {
    return 'row';
  }
  if (prop === 'row-reverse') {
    return 'row-reverse';
  }
  if (prop === 'col') {
    return 'column';
  }
  if (prop === 'col-reverse') {
    return 'column-reverse';
  }
  return null;
};

export const centerUtil = () => ({
  justifyContent: 'center',
  alignItems: 'center',
});

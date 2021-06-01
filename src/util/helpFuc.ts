import { Frame } from '../types';

export const processData = (series: Frame[]) => {
  let sum = 0;
  series.map(serie => {
    sum += serie.fields[0].values.buffer.reduce((total, i) => total + i, 0);
  });

  return sum;
};

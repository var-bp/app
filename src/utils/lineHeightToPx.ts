const lineHeightToPx = (
  lineHeight: number,
  fontSize: string,
  unit: string = 'px',
): string | number => {
  const result: number = parseInt(fontSize, 10) * lineHeight;
  return isNaN(result) ? lineHeight : `${result}${unit}`;
};

export default lineHeightToPx;

export enum FontWeight {
  Light = 300,
  Normal = 400,
  Medium = 500,
  Bold = 700,
}

export const FontFamily: {[key in FontWeight]: string} = {
  [FontWeight.Light]: 'Roboto-Light',
  [FontWeight.Normal]: 'Roboto-Regular',
  [FontWeight.Medium]: 'Roboto-Medium',
  [FontWeight.Bold]: 'Roboto-Bold',
};

// https://ant.design/docs/spec/font#Font-Scale-&-Line-Height
export enum FontSize {
  XXS = '12px',
  XS = '14px',
  S = '16px',
  M = '20px',
  L = '24px',
  XL = '30px',
  XXL = '38px',
}

// https://ant.design/docs/spec/font#Font-Scale-&-Line-Height
export const LineHeight: {[key in FontSize]: string} = {
  [FontSize.XXS]: '20px',
  [FontSize.XS]: '22px',
  [FontSize.S]: '24px',
  [FontSize.M]: '28px',
  [FontSize.L]: '32px',
  [FontSize.XL]: '38px',
  [FontSize.XXL]: '46px',
};

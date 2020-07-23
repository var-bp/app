// import {Platform} from 'react-native';

// const IS_ANDROID: boolean = Platform.OS === 'android';
// const IS_IOS: boolean = Platform.OS === 'ios';

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

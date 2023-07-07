import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
const remSize = entireScreenWidth / 380;
EStyleSheet.build({ $rem: remSize });

export const calculateSize = (size) => {
    return Math.round(size * remSize);
};
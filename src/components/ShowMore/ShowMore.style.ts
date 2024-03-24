import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import padding from '../../styles/padding';
import radius from '../../styles/radius';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    padding: padding.medium,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.full,
  },
  title: {
    color: colors.text.primary,
  },
});

export default styles;

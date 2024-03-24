import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import radius from '../../styles/radius';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.text.primary,
    fontSize: 16,
  },
  dimension: {
    color: colors.text.secondary,
    fontSize: 15,
  },
});

export default styles;

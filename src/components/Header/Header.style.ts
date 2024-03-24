import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.background.secondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.title.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;

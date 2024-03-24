import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: colors.title.primary,
    fontSize: 20,
  },
  detail: {
    color: colors.text.secondary,
    fontSize: 15,
    marginBottom: 12,
  },
});

export default styles;

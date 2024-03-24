import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';
import radius from '../../../styles/radius';
import padding from '../../../styles/padding';

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
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: radius.large,
  },
});

export default styles;

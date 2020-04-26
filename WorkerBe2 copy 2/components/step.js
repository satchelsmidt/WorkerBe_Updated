import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Block, theme, Checkbox } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { goals } from '../components/testData';

const { width, height } = Dimensions.get('screen');

function Step(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Block style={styles.step}>
      <Block style={styles.stepHeader}>
        <Block>
          <Checkbox
            color='#E1B80D'
            initialValue={props.step.step_check}
            onChange={() => {
              // Update value in DB.
            }}
          />
        </Block>
        <Block style={styles.stepHeaderText}>
          <Text
            style={{fontWeight: 'bold', fontSize: 30, width: width * 0.65}}
          >{props.step.step_name}</Text>
        </Block>
        <TouchableOpacity
          onPress={() => setOpen(open ? false : true)}
        >
          <Ionicons
            name={(open === true ? 'ios-arrow-up' : 'ios-arrow-down')}
            size={35}
            color={'gray'}
          />
        </TouchableOpacity>
      </Block>
      {open ? (
        <Block style={{justifyContent: 'center', marginTop: 10}}>
          <Text style={{fontSize: 18}}
          >{props.step.step_desc}</Text>
        </Block>
      ) : (
        null
      )}
    </Block>
  );
}

const styles = StyleSheet.create({
  step: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    borderRadius: 8,
    marginTop: 25,
    overflow: 'hidden',
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default Step;

import * as React from 'react';
import 'normalize.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Counter from '../../../src/components/organisms/counter/Counter';
import { counterActions } from "../../../src/actions"

storiesOf('organisms', module)
  .add('Counter', () => {
    return <Counter value={1} add={counterActions.add} increment={counterActions.increment} />
  });

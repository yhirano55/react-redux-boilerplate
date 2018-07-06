import * as React from 'react';
import 'normalize.css';
import { storiesOf } from '@storybook/react';

import Greeting from '../../src/components/atoms/Greeting';

storiesOf('atoms', module).add('Greeting', () => <Greeting name="React" />);

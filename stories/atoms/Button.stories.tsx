import * as React from 'react';
import 'normalize.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/atoms/Button';

storiesOf('atoms', module).add('Button', () => <Button onClick={action('clicked')} text="Hello" />);

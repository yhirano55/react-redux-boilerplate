import { storiesOf } from '@storybook/react';
import * as React from 'react';
import 'normalize.css';

import DefaultLayout from '../../src/components/templates/DefaultLayout';

storiesOf('templates', module).add('DefaultLayout', () => <DefaultLayout><h1>Hello, DefaultLayout</h1></DefaultLayout>);

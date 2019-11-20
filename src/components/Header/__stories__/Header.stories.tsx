import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Header from '..'

storiesOf('Header', module).add('Default', () => (
	<Header siteTitle={text('siteTitle', 'E-commerce V2')} />
))

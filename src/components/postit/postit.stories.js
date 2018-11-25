import React from 'react'
import { storiesOf } from '@storybook/react'
import Postit from './index'


storiesOf('Components/Postit', module)
    .add('default', () =>(
       <Postit />
    ))
   
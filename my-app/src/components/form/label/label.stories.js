import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './index'

storiesOf('Components/Form/Label', module)
    .add('default', () =>(
       <Label>Children Here</Label> 
    ))
   
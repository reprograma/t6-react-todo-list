import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './index'

storiesOf('Components/Form/Input', module)
    .add('default', () =>(
       <Input type='text' placeholder='Placeholder Here' required /> 
    ))
   
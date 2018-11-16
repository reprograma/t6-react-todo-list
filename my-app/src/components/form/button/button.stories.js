import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Components/Form/Button', module)
    .add('default', () =>(
       <Button>Children Here</Button> 
    ))
    .add('with disabled', () =>(
      <Button disabled >Children Here</Button> 
   ))
   
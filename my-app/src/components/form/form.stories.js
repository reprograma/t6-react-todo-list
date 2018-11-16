import React from 'react'
import { storiesOf } from '@storybook/react'
import Form from './index'


storiesOf('Components/Form', module)
    .add('default', () =>(
       <Form title='Title Here' text='Text Here'>
            <Form.Label>Nome</Form.Label>
            <Form.Input type='text' />
       </Form> 
    ))
   
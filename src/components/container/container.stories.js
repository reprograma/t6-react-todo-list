import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from './index'

storiesOf('Components/Container', module)
    .add('default', () =>(
       <Container>
            Children Here
       </Container> 
    ))
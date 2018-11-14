import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Link from './index'


storiesOf('Components/Form/Link', module)
    .addDecorator(StoryRouter())
    .add('default', () =>(
       <Link href='/'>Link here</Link> 
    ))
    
   
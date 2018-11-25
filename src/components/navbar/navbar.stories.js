import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Navbar from './index'


storiesOf('Components/Navbar', module)
    .addDecorator(StoryRouter())
    .add('default', () =>(
       <Navbar /> 
    ))
    
   
import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Login from './index'

storiesOf('Pages/Login', module)
    .addDecorator(StoryRouter())
    .add('default', () =>(
       <Login />
    ))



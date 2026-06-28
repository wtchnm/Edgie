/* @refresh reload */
import { Route, Router } from '@solidjs/router'
import { render } from 'solid-js/web'

import { Home } from './Home'

import './index.css'

const root = document.querySelector('#root')
if (!root) {
	throw new Error('Root element not found.')
}

render(
	() => (
		<Router>
			<Route component={Home} path='/' />
		</Router>
	),
	root
)

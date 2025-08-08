/* @refresh reload */
import {Route, Router} from '@solidjs/router'
import {render} from 'solid-js/web'
import {Home} from './Home'
import './index.css'

const root = document.getElementById('root')
if (!root) {
	throw new Error('Root not found.')
}

render(
	() => (
		<Router>
			<Route component={Home} path='/' />
		</Router>
	),
	root
)

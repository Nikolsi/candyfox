import * as ReactDOM from 'react-dom'

// import styles
import './assets/styles/main.scss'

import { App } from './components/App'

// TODO: use routing component a main entry point.
ReactDOM.render(App(), document.getElementById('candyfox-application-host') as HTMLElement)

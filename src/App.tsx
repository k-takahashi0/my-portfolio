import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopPage from './components/pages/TopPage'
import ProfilePage from './components/pages/ProfilePage'
import SkillsPage from './components/pages/SkillsPage'
import WorksPage from './components/pages/WorksPage'

const App: React.FC = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route path="/" component={TopPage} exact />
				<Route path="/top" component={TopPage} />
				<Route path="/profile" component={ProfilePage} />
				<Route path="/skills" component={SkillsPage} />
				<Route path="/works" component={WorksPage} />
			</Switch>
		</BrowserRouter>
	)
}
export default App

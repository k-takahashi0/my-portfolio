import * as React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import GenericTemplate from '../templates/GenericTemplate'

interface SkillsPageProps {
	children?: React.ReactChild
}

const SkillsPage: React.FC<SkillsPageProps> = () => {
	return (
		<>
			<GenericTemplate title="Skills">
				<List>
					<React.Fragment key="1">
						<ListItem divider={true}>
							<ListItemText primary="HTML" />
						</ListItem>
					</React.Fragment>
					<React.Fragment key="2">
						<ListItem divider={true}>
							<ListItemText primary="CSS" />
						</ListItem>
					</React.Fragment>
					<React.Fragment key="3">
						<ListItem divider={true}>
							<ListItemText primary="JavaScript" />
						</ListItem>
					</React.Fragment>
					<React.Fragment key="4">
						<ListItem divider={true}>
							<ListItemText primary="PHP" />
						</ListItem>
					</React.Fragment>
					<React.Fragment key="5">
						<ListItem divider={true}>
							<ListItemText primary="Python" />
						</ListItem>
					</React.Fragment>
					<React.Fragment key="6">
						<ListItem divider={true}>
							<ListItemText primary="SQL" />
						</ListItem>
					</React.Fragment>
					<React.Fragment key="7">
						<ListItem divider={true}>
							<ListItemText primary="AWS" />
						</ListItem>
					</React.Fragment>
				</List>
			</GenericTemplate>
		</>
	)
}
export default SkillsPage

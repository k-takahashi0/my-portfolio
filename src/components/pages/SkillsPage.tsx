import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import GenericTemplate from '../templates/GenericTemplate'

interface SkillsPageProps {
	children?: React.ReactChild
}
interface RenderTree {
	id: string
	name: string
	children?: RenderTree[]
}

const data: RenderTree[] = [
	{
		id: 'frontend',
		name: 'Frontend',
		children: [
			{
				id: '1',
				name: 'HTML',
			},
			{
				id: '2',
				name: 'CSS',
			},
			{
				id: '3',
				name: 'JavaScript',
			},
		],
	},
	{
		id: 'backend',
		name: 'Backend',
		children: [
			{
				id: '1',
				name: 'PHP',
			},
			{
				id: '2',
				name: 'Python',
			},
			{
				id: '3',
				name: 'SQL',
			},
		],
	},
	{
		id: 'devOps',
		name: 'DevOps',
		children: [
			{
				id: '1',
				name: 'AWS',
			},
		],
	},
]

const useStyles = makeStyles({
	root: {
		height: 110,
		flexGrow: 1,
		maxWidth: 400,
	},
})

const SkillsPage: React.FC<SkillsPageProps> = () => {
	const classes = useStyles()

	const renderTree = (category: RenderTree) => (
		<TreeItem key={category.id} nodeId={category.id} label={category.name}>
			{Array.isArray(category.children)
				? category.children.map((skill) => renderTree(skill))
				: null}
		</TreeItem>
	)

	return (
		<>
			<GenericTemplate title="Skills">
				<TreeView
					className={classes.root}
					defaultCollapseIcon={<ExpandMoreIcon />}
					defaultExpandIcon={<ChevronRightIcon />}>
					{data.map((category) => renderTree(category))}
				</TreeView>
			</GenericTemplate>
		</>
	)
}
export default SkillsPage

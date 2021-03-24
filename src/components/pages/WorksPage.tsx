import * as React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import GenericTemplate from '../templates/GenericTemplate'

interface WorksPageProps {
	children?: React.ReactChild
}
type SearchString = string
type SearchResult = book.Items[] | null

const useStyles = makeStyles({
	title: {
		marginTop: 40,
		marginBottom: 20,
	},
	searchText: {
		marginLeft: 15,
	},
	result: {
		marginTop: 20,
		marginLeft: 5,
	},
})

const WorksPage: React.FC<WorksPageProps> = () => {
	const classes = useStyles()

	const [searchString, changeSearchString] = React.useState<SearchString>('')
	const [searchResult, changeSearchResult] = React.useState<SearchResult>(
		null
	)
	const handleOnSearchButton = async () => {
		const url = 'https://www.googleapis.com/books/v1/volumes'
		const params = { q: searchString, maxResults: 10 }
		try {
			const result = await axios.get(url, { params })
			if (result.data.totalItems >= 1) {
				changeSearchResult(result.data.items)
			} else {
				window.alert('検索結果は0件でした')
			}
		} catch (err) {
			console.log(err)
			window.alert('書籍検索でエラーが発生しました')
		}
	}
	return (
		<>
			<GenericTemplate title="Works">
				<Typography
					component="h2"
					variant="h6"
					color="inherit"
					noWrap
					className={classes.title}>
					1. GoogleのAPIを用いて書籍検索をやってみた
					<div id="tag">
						<Chip label="React" />
						<Chip label="TypeScript" />
					</div>
				</Typography>
				<TextField
					onChange={(
						event: React.ChangeEvent<
							HTMLInputElement | HTMLTextAreaElement
						>
					) => changeSearchString(event.target.value)}
					className={classes.searchText}
				/>
				<Button
					variant="contained"
					color="secondary"
					type="submit"
					onClick={handleOnSearchButton}
					disabled={!searchString}>
					書籍検索
				</Button>
				<div id="result">
					<Typography
						component="h2"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.result}></Typography>
					<List>
						{searchResult &&
							searchResult.length > 0 &&
							searchResult.map((item: book.Items) => {
								return (
									<React.Fragment key={item.id}>
										<ListItem divider={true}>
											<ListItemText
												primary={item.volumeInfo.title}
											/>
										</ListItem>
									</React.Fragment>
								)
							})}
					</List>
				</div>
			</GenericTemplate>
		</>
	)
}
export default WorksPage

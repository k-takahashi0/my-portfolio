import * as React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import GenericTemplate from '../templates/GenericTemplate'

interface WorksPageProps {
	children?: React.ReactChild
}
type SearchString = string
type SearchResult = book.Items[] | null

const WorksPage: React.FC<WorksPageProps> = () => {
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
				<TextField
					onChange={(
						event: React.ChangeEvent<
							HTMLInputElement | HTMLTextAreaElement
						>
					) => changeSearchString(event.target.value)}
				/>
				<Button
					variant="contained"
					color="secondary"
					type="submit"
					onClick={handleOnSearchButton}
					disabled={!searchString}>
					書籍検索
				</Button>
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
			</GenericTemplate>
		</>
	)
}
export default WorksPage

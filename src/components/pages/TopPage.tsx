import * as React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import GenericTemplate from '../templates/GenericTemplate'

const top = [
	'ここはKohei Takahashiのポートフォリオサイトです。',
	'私のプロフィールやスキル、やってみたことをまとめています。',
	'まだまだ発展途上のサイトですので今後ブラッシュアップしていきます。',
]

class TopPage extends React.Component {
	render() {
		return (
			<>
				<GenericTemplate title="Top">
					<List>
						{top &&
							top.length > 0 &&
							top.map((item, index) => {
								return (
									<React.Fragment key={index}>
										<ListItem divider={true}>
											<ListItemText primary={item} />
										</ListItem>
									</React.Fragment>
								)
							})}
					</List>
				</GenericTemplate>
			</>
		)
	}
}
export default TopPage

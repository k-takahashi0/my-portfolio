import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import GenericTemplate from '../templates/GenericTemplate'

class TopPage extends React.Component {
	render() {
		return (
			<>
				<GenericTemplate title="Top">
					<Typography
						component="h2"
						variant="h5"
						color="inherit"
						noWrap>
						<br />
						ここはKohei Takahashiのポートフォリオサイトです。
						<br />
						私のプロフィールやスキル、やってみたことをまとめています。
						<br />
						まだまだ発展途上のサイトですので今後ブラッシュアップしていきます。
					</Typography>
				</GenericTemplate>
			</>
		)
	}
}
export default TopPage

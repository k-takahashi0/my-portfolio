import * as React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import GenericTemplate from '../templates/GenericTemplate'

interface ProfilePageProps {
	children?: React.ReactChild
}

const profile = [
	{
		label: '名前',
		val: '高橋 晃平',
	},
	{
		label: '出身',
		val: '宮城県',
	},
	{
		label: '趣味',
		val: '津軽三味線',
	},
	{
		label: '好きな色',
		val: '緑',
	},
	{
		label: '好きな食べ物',
		val: '魚全般',
	},
]

const ProfilePage: React.FC<ProfilePageProps> = () => {
	return (
		<>
			<GenericTemplate title="Profile">
				<List>
					{profile &&
						profile.length > 0 &&
						profile.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<ListItem divider={true}>
										<ListItemText
											primary={`${item.label}： ${item.val}`}
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
export default ProfilePage

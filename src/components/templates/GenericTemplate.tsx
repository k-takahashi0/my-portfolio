import React from 'react'
import {
	makeStyles,
	createStyles,
	createMuiTheme,
	Theme,
} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import BuildIcon from '@material-ui/icons/Build'
import WorkIcon from '@material-ui/icons/Work'

import { Link } from 'react-router-dom'

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'Noto Sans JP',
			'Lato',
			'游ゴシック Medium',
			'游ゴシック体',
			'Yu Gothic Medium',
			'YuGothic',
			'ヒラギノ角ゴ ProN',
			'Hiragino Kaku Gothic ProN',
			'メイリオ',
			'Meiryo',
			'ＭＳ Ｐゴシック',
			'MS PGothic',
			'sans-serif',
		].join(','),
	},
})

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
		},
		appBar: {
			backgroundColor: '#bdd4a7f2',
			color: '#000',
		},
		menuButton: {
			marginLeft: -12,
			marginRight: 20,
		},
		list: {
			width: 150,
		},
		link: {
			textDecoration: 'none',
			color: theme.palette.text.secondary,
		},
		content: {
			flex: 1,
			backgroundColor: '#f2f3cb',
		},
		appBarSpacer: theme.mixins.toolbar,
		container: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
		footer: {
			backgroundColor: '#bdd4a7f2',
			color: '#000',
			marginTop: 'auto',
		},
	})
)

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'© '}
			Kohei Takahashi {new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export interface GenericTemplateProps {
	children?: React.ReactNode
	title: string
}
const GenericTemplate: React.FC<GenericTemplateProps> = ({
	children,
	title,
}) => {
	const classes = useStyles()
	type State = {
		['left']: boolean
	}
	const [state, setState] = React.useState<State>({
		['left']: false,
	})
	const toggleDrawer = (anchor: 'left', open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return
		}
		setState({ ...state, [anchor]: open })
	}

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="inherit"
					className={classes.appBar}>
					<Toolbar>
						<IconButton
							className={classes.menuButton}
							color="inherit"
							aria-label="Menu"
							onClick={toggleDrawer('left', true)}>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="left"
							open={state.left}
							onClose={toggleDrawer('left', false)}>
							<div
								tabIndex={0}
								role="presentation"
								onClick={toggleDrawer('left', false)}
								onKeyDown={toggleDrawer('left', false)}>
								<div className={classes.list}>
									<List>
										<Link to="/" className={classes.link}>
											<ListItem button>
												<ListItemIcon>
													<HomeIcon />
												</ListItemIcon>
												<ListItemText primary="Top" />
											</ListItem>
										</Link>
										<Link
											to="/profile"
											className={classes.link}>
											<ListItem button>
												<ListItemIcon>
													<PersonIcon />
												</ListItemIcon>
												<ListItemText primary="Profile" />
											</ListItem>
										</Link>
										<Link
											to="/skills"
											className={classes.link}>
											<ListItem button>
												<ListItemIcon>
													<BuildIcon />
												</ListItemIcon>
												<ListItemText primary="Skills" />
											</ListItem>
										</Link>
										<Link
											to="/works"
											className={classes.link}>
											<ListItem button>
												<ListItemIcon>
													<WorkIcon />
												</ListItemIcon>
												<ListItemText primary="Works" />
											</ListItem>
										</Link>
									</List>
								</div>
							</div>
						</Drawer>{' '}
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap>
							Kohei Takahashiのポートフォリオサイトへようこそ！
						</Typography>
					</Toolbar>
				</AppBar>
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Typography
							component="h2"
							variant="h5"
							color="inherit"
							noWrap>
							{title}
						</Typography>
						{children}
					</Container>
				</main>
				<footer className={classes.footer}>
					<Copyright />
				</footer>
			</div>
		</ThemeProvider>
	)
}

export default GenericTemplate

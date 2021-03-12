import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import BuildIcon from '@material-ui/icons/Build'
import WorkIcon from '@material-ui/icons/Work'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

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
		},
		toolbar: {
			paddingRight: 24,
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			backgroundColor: '#bdd4a7f2',
			color: '#000',
		},
		title: {
			flexGrow: 1,
		},
		pageTitle: {
			marginBottom: theme.spacing(1),
		},
		appBarSpacer: theme.mixins.toolbar,
		content: {
			flexGrow: 9,
			height: '100vh',
			overflow: 'auto',
			position: 'relative',
			backgroundColor: '#f2f3cb',
			flexBasis: '10px',
		},
		container: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
		link: {
			textDecoration: 'none',
			color: theme.palette.text.secondary,
		},
		copyRight: {
			position: 'absolute',
			bottom: '20px',
			left: '45.5%',
		},
		list: {
			marginTop: '17px',
		},
		menu: {
			flexGrow: 1,
			height: '100vh',
			overflow: 'auto',
			flexBasis: '10px',
			backgroundColor: '#edf572',
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

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="absolute" className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							className={classes.title}>
							Kohei Takahashiのポートフォリオサイトへようこそ！
						</Typography>
					</Toolbar>
				</AppBar>
				<div className={classes.menu}>
					<div className={classes.appBarSpacer} />
					<List className={classes.list}>
						<Link to="/" className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText primary="Top" />
							</ListItem>
						</Link>
						<Link to="/profile" className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<PersonIcon />
								</ListItemIcon>
								<ListItemText primary="Profile" />
							</ListItem>
						</Link>
						<Link to="/skills" className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<BuildIcon />
								</ListItemIcon>
								<ListItemText primary="Skills" />
							</ListItem>
						</Link>
						<Link to="/works" className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<WorkIcon />
								</ListItemIcon>
								<ListItemText primary="Works" />
							</ListItem>
						</Link>
					</List>
				</div>
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Typography
							component="h2"
							variant="h5"
							color="inherit"
							noWrap
							className={classes.pageTitle}>
							{title}
						</Typography>
						{children}
					</Container>
					<div className={classes.copyRight}>
						<Copyright />
					</div>
				</main>
			</div>
		</ThemeProvider>
	)
}

export default GenericTemplate

import * as React from 'react'
import {
	withStyles,
	Theme,
	createStyles,
	makeStyles,
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import GenericTemplate from '../templates/GenericTemplate'

interface SkillsPageProps {
	children?: React.ReactChild
}

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: '#a6a7a5f2',
			color: theme.palette.common.black,
			fontSize: 16,
		},
		body: {
			fontSize: 14,
		},
	})
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.action.hover,
			},
		},
	})
)(TableRow)

function createData(env: string, period: number, level: string) {
	return { env, period, level }
}

const rows = {
	frontend: [
		createData('HTML', 7, 'Webページを作成することができる。'),
		createData('CSS', 7, 'Webページのスタイリングができる。'),
		createData(
			'JavaScript',
			7,
			'EFO(入力フォーム最適化)、Webスクレイピングプログラムを作成することができる。'
		),
	],
	backend: [
		createData(
			'PHP',
			6,
			'Facebook APIを用いたプログラム、Marketo(マーケティングオートメーションツール)APIを用いたプログラム、Webスクレイピングプログラムを作成することができる。'
		),
		createData(
			'Java',
			0.5,
			'リファレンスを見ながらAndroid Studioを用いて簡単なネイティブアプリを作成することができる。'
		),
		createData(
			'Python',
			3,
			'PDFスクレイピング、Excel生成プログラムを作成することができる。'
		),
		createData(
			'MySQL',
			3,
			'CRUD、結合を用いたSQL文を作成することができる。'
		),
	],
	other: [
		createData(
			'AWS',
			5,
			'使用したことがあるサービスはEC2、RDS、S3、CloudWatch、Lambda等。'
		),
	],
}

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
	tableCell: {
		width: '10%',
	},
	tableCellLevel: {
		width: '90%',
	},
	category: {
		marginTop: 20,
	},
})

const SkillsPage: React.FC<SkillsPageProps> = () => {
	const classes = useStyles()

	return (
		<>
			<GenericTemplate title="Skills">
				<div className={classes.category}>
					<Typography
						component="h2"
						variant="h6"
						color="inherit"
						noWrap>
						Frontend
					</Typography>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell
										className={classes.tableCell}>
										環境
									</StyledTableCell>
									<StyledTableCell
										className={classes.tableCell}>
										期間(年)
									</StyledTableCell>
									<StyledTableCell
										className={classes.tableCellLevel}>
										レベル
									</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.frontend.map((row) => (
									<StyledTableRow key={row.env}>
										<StyledTableCell
											component="th"
											scope="row">
											{row.env}
										</StyledTableCell>
										<StyledTableCell>
											{row.period}
										</StyledTableCell>
										<StyledTableCell>
											{row.level}
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
				<div className={classes.category}>
					<Typography
						component="h2"
						variant="h6"
						color="inherit"
						noWrap>
						Backend
					</Typography>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell
										className={classes.tableCell}>
										環境
									</StyledTableCell>
									<StyledTableCell
										className={classes.tableCell}>
										期間(年)
									</StyledTableCell>
									<StyledTableCell
										className={classes.tableCellLevel}>
										レベル
									</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.backend.map((row) => (
									<StyledTableRow key={row.env}>
										<StyledTableCell
											component="td"
											scope="row">
											{row.env}
										</StyledTableCell>
										<StyledTableCell>
											{row.period}
										</StyledTableCell>
										<StyledTableCell>
											{row.level}
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
				<div className={classes.category}>
					<Typography
						component="h2"
						variant="h6"
						color="inherit"
						noWrap>
						Other
					</Typography>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell
										className={classes.tableCell}>
										環境
									</StyledTableCell>
									<StyledTableCell
										className={classes.tableCell}>
										期間(年)
									</StyledTableCell>
									<StyledTableCell
										className={classes.tableCellLevel}>
										レベル
									</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.other.map((row) => (
									<StyledTableRow key={row.env}>
										<StyledTableCell
											component="th"
											scope="row">
											{row.env}
										</StyledTableCell>
										<StyledTableCell>
											{row.period}
										</StyledTableCell>
										<StyledTableCell>
											{row.level}
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</GenericTemplate>
		</>
	)
}
export default SkillsPage

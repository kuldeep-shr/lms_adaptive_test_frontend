import { FC, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// library
import {
	Box,
	Button,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid2,
	LinearProgress,
	Radio,
	RadioGroup,
	Rating,
	Typography,
} from '@mui/material'

// components
import Header from '../header'

// api
import { generateTestQuestion, submitQuestion } from '../../api/test'

// context
import { AppContext } from '../../context/app-context'

// types
import { Question } from '../../types'

const TestPage: FC = () => {
	const router = useRouter()
	const {
		state: { testUrl = '' },
	} = useContext(AppContext)

	const [data, setData] = useState<Array<Question>>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [answer, setAnswer] = useState<{
		question: string
		answer: string
	}>()

	useEffect(() => {
		setLoading(true)
		generateTestQuestion(testUrl).then((d) => {
			if (d && d._id) {
				setData([d])
				setLoading(false)
			}
		})
	}, [])

	const submit = ({
		question,
		answer,
	}: {
		question: string
		answer: string
	}) => {
		setLoading(true)
		submitQuestion({ testUrl, question, answer }).then((ans) => {
			if (ans && ans.testCompleted) {
				router.push('/dashboard/test/success')
			} else {
				generateTestQuestion(testUrl).then((d) => {
					if (d && d._id) {
						setData([d])
						setLoading(false)
					}
				})
			}
		})
	}

	return (
		<>
			<Header />
			<Grid2
				container
				direction="column"
				gap={2}
				sx={{
					padding: '20px',
				}}
			>
				<Typography variant="h6">Online Tests One</Typography>
				<Divider />
				{loading ? (
					<Box sx={{ width: '100%' }}>
						<LinearProgress
							sx={{
								height: '80px',
								marginBottom: '16px',
							}}
						/>
						<LinearProgress
							sx={{
								height: '200px',
							}}
						/>
					</Box>
				) : data && data.length ? (
					data.map(({ _id, questionText, options, weightage }) => (
						<Grid2 key={_id} container direction="column">
							<Grid2
								key={_id}
								container
								gap={4}
								sx={{
									justifyContent: 'space-between',
								}}
							>
								<Typography variant="body1" style={{ margin: 0 }}>
									{questionText}
								</Typography>
								<Box>
									<Typography
										variant="caption"
										component="legend"
										style={{ margin: 0 }}
									>
										Difficulty
									</Typography>
									<Rating name="read-only" value={weightage / 2} readOnly />
								</Box>
							</Grid2>
							<FormControl>
								<RadioGroup
									aria-labelledby="demo-radio-buttons-group-label"
									defaultValue="female"
									name="radio-buttons-group"
								>
									{options.map(({ option }, _) => (
										<FormControlLabel
											key={_}
											value={option}
											label={option}
											checked={answer?.answer === option}
											control={<Radio />}
											onChange={() =>
												setAnswer({ question: _id, answer: option })
											}
										/>
									))}
								</RadioGroup>
							</FormControl>
						</Grid2>
					))
				) : (
					'Loading'
				)}
				<Typography color="#3b3b3bd2" variant="caption">
					Choose wisely ✌️
				</Typography>
				<Button
					disabled={!answer || loading}
					variant="contained"
					onClick={() => {
						submit(answer)
					}}
				>
					Submit
				</Button>
			</Grid2>
		</>
	)
}

export default TestPage

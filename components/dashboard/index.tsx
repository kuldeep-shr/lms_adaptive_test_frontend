import { FC, useContext } from 'react'
import { useRouter } from 'next/navigation'

// library
import {
	Grid2,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import StartIcon from '@mui/icons-material/Start'

// components
import Header from '../header'

// types
import { Props } from './types'

// api
import { generateTests } from '../../api/test'

// context
import { AppContext } from '../../context/app-context'

const Dashboard: FC<Props> = (props: Props) => {
	const router = useRouter()
	const { dispatch } = useContext(AppContext)

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
				<Typography variant="h6">Popular Tests</Typography>
				<Grid2 container direction="column" gap={4}>
					<List>
						<ListItem
							style={{
								width: '400px',
								borderBottom: '1px solid #c0c0c0',
								borderLeft: '1px solid #c0c0c0',
								marginBottom: '16px',
							}}
						>
							<ListItemText
								primary="Online Test One"
								secondary={'Description on online Test One'}
							/>
							<ListItemIcon
								onClick={() =>
									generateTests().then((d) => {
										dispatch({
											type: 'ADD_TEST_URL',
											payload: { testUrl: d.testUrl },
										})
										router.push('/dashboard/test/')
									})
								}
							>
								<StartIcon />
							</ListItemIcon>
						</ListItem>
					</List>
				</Grid2>
			</Grid2>
		</>
	)
}

export default Dashboard

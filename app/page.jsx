import { Typography, Grid2 } from '@mui/material'

// components
import Header from '../components/header'

export default async function Index() {
	return (
		<main>
			<Header />
			<Grid2
				container
				direction="column"
				gap={2}
				sx={{
					padding: '20px',
					height: 'calc(100dvh - 65px)',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="h1">Online Test App</Typography>
				<Typography variant="subtitle1">
					Best Online App For Aptitude Test
				</Typography>
			</Grid2>
		</main>
	)
}

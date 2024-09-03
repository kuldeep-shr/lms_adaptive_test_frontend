import { FC } from 'react'

// library
import { Grid2, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Fingerprint from '@mui/icons-material/Fingerprint'

const SuccessPage: FC = () => {
	return (
		<Grid2
			container
			direction="column"
			height={'100dvh'}
			gap={4}
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Typography variant="h1">🎊 Yippe!</Typography>
			<Typography variant="h6">Test Completed</Typography>
			<IconButton size="large" aria-label="fingerprint" href="/dashboard">
				<Fingerprint style={{ fontSize: '40px' }} />
			</IconButton>
			<Typography variant="caption">Dashboard</Typography>
		</Grid2>
	)
}

export default SuccessPage

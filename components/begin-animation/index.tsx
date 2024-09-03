import { FC } from 'react'

// library
import { Grid2, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Fingerprint from '@mui/icons-material/Fingerprint'

// types
import { Props } from './types'

const BeginAnimation: FC<Props> = (props: Props) => {
	const { onAnimate } = props

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
			<Typography variant="h1">Online Test App</Typography>
			<IconButton size="large" aria-label="fingerprint" onClick={onAnimate}>
				<Fingerprint style={{ fontSize: '40px' }} />
			</IconButton>
			<Typography variant="caption">Begin</Typography>
		</Grid2>
	)
}

export default BeginAnimation

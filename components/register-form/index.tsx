import { FC, useContext, useState } from 'react'

// library
import { Button, Grid2, Link, TextField, Typography } from '@mui/material'

// api
import { register } from '../../api/auth'

// context
import { AppContext } from '../../context/app-context'

const LoginForm: FC = () => {
	const [name, setName] = useState<string>()
	const [email, setEmail] = useState<string>()
	const [password, setPassword] = useState<string>()

	const { dispatch } = useContext(AppContext)

	const onSubmit = () => {
		if (name && email && password) {
			const payload = { name, email, password, isAdmin: false }

			register(payload).then((d) => {
				const user = d.data
				dispatch({ type: 'SET_USER_CREDENTIALS', payload: { user } })
			})
		}
	}

	return (
		<Grid2
			container
			direction="column"
			height={'100dvh'}
			gap={8}
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Typography variant="h3">Register</Typography>
			<Grid2
				container
				direction="column"
				width={{ width: '100%', maxWidth: '350px' }}
				gap={4}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TextField
					label="Name"
					type="text"
					variant="outlined"
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
					fullWidth
				/>
				<TextField
					label="Email"
					type="email"
					variant="outlined"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
					fullWidth
				/>
				<TextField
					label="Password"
					variant="outlined"
					placeholder="Password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					fullWidth
				/>
				<Button variant="contained" onClick={onSubmit} fullWidth>
					REGISTER
				</Button>
			</Grid2>
			<Grid2
				container
				direction="column"
				gap={1}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="caption">or</Typography>
				<Link href="/login" underline="always">
					Login
				</Link>
			</Grid2>
		</Grid2>
	)
}

export default LoginForm

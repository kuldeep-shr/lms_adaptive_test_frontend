import { FC, useState, useContext } from 'react'

// library
import { Button, Grid2, Link, TextField, Typography } from '@mui/material'

// context
import { AppContext } from '../../context/app-context'

// api
import { login } from '../../api/auth'

const LoginForm: FC = () => {
	const { dispatch } = useContext(AppContext)

	const [email, setEmail] = useState<string>()
	const [password, setPassword] = useState<string>()

	const onSubmit = () => {
		if (email && password) {
			const payload = { name, email, password, isAdmin: false }

			login(payload).then((d) => {
				const user = d.data
				dispatch({
					type: 'SET_USER_CREDENTIALS',
					payload: { user: { name: user.email, ...user } },
				})
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
			<Typography variant="h3">Login</Typography>
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
					LOGIN
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
				<Link href="/register" underline="always">
					Register
				</Link>
			</Grid2>
		</Grid2>
	)
}

export default LoginForm

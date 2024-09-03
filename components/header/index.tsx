'use client'

import { FC, useContext } from 'react'

// library
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'

// icons
import MenuIcon from '@mui/icons-material/Menu'

// context
import { AppContext } from '../../context/app-context'

const Header: FC = () => {
	const { state, dispatch } = useContext(AppContext)

	const onLogout = () => {
		dispatch({ type: 'REMOVE_USER_CREDENTIALS', payload: { logout: true } })
	}

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Online Test App | {state.user?.name} 🐣
					</Typography>
					{state.user ? (
						<Button color="inherit" onClick={onLogout}>
							Logout
						</Button>
					) : (
						<Button color="inherit" href="/login">
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header

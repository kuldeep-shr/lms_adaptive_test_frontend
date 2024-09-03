'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

// components
import Dashboard from '../../components/dashboard'

// context
import { AppContext } from '../../context/app-context'

export default function DashboardPage() {
	const router = useRouter()
	const { state } = useContext(AppContext)

	if (!state.user) {
		router.push('/login')
	}

	return (
		<main>
			<Dashboard />
		</main>
	)
}

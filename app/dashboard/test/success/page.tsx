'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

// components

// context
import { AppContext } from '../../../../context/app-context'
import SuccessPage from '../../../../components/success-page'

export default function DashboardPage() {
	const router = useRouter()
	const { state } = useContext(AppContext)

	if (!state.user) {
		router.push('/login')
	}

	return (
		<main>
			<SuccessPage />
		</main>
	)
}

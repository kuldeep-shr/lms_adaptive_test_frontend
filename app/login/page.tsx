'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'

// components
import LoginForm from '../../components/login-form'
import BeginAnimation from '../../components/begin-animation'

// context
import { AppContext } from '../../context/app-context'

export default function Login() {
	const router = useRouter()
	const { state } = useContext(AppContext)

	const [formVisible, setFormVisible] = useState<boolean>(false)

	if (state.user) {
		router.push('/dashboard')
	}

	return (
		<main>
			{formVisible ? (
				<LoginForm />
			) : (
				<BeginAnimation onAnimate={() => setFormVisible(true)} />
			)}
		</main>
	)
}

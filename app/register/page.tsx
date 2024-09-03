'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'

// components
import RegisterForm from '../../components/register-form'
import BeginAnimation from '../../components/begin-animation'

// context
import { AppContext } from '../../context/app-context'

export default function Register() {
	const router = useRouter()
	const { state } = useContext(AppContext)

	const [formVisible, setFormVisible] = useState<boolean>(false)

	if (state.user) {
		router.push('/dashboard')
	}

	return (
		<main>
			{formVisible ? (
				<RegisterForm />
			) : (
				<BeginAnimation onAnimate={() => setFormVisible(true)} />
			)}
		</main>
	)
}

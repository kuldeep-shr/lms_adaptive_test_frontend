import axios, { AxiosError } from 'axios'
import { User } from '../types'

type RegisterPayload = {
	name: string
	email: string
	password: string
	isAdmin: boolean
}

type LoginPayload = {
	email: string
	password: string
}

type RegisterResponse = User

type LoginResponse = Pick<User, 'email' | 'token'>

export const register = (
	payload: RegisterPayload
): Promise<{ data: RegisterResponse }> => {
	return axios('http://localhost:8080/auth/user/register', {
		method: 'POST',
		data: payload,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:8080',
		},
	})
}

export const login = (
	payload: LoginPayload
): Promise<{ data: LoginResponse }> => {
	return axios('http://localhost:8080/auth/user/login', {
		method: 'POST',
		data: payload,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:8080',
		},
	})
}

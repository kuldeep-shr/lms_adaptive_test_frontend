export type User = {
	name: string
	email: string
	token: string
}

export type Question = {
	_id: string
	questionText: string
	options: Array<{ option: string }>
	weightage: number
}

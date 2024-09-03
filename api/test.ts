import { fetchData } from '.'
import { Question } from '../types'

type TestsResponse = {
	testUrl: string
	isExpired: boolean
}

type QuestionResponse = Question

type SubmitAnswerResponse = {
	percentage: number
	score: number
	testCompleted: boolean
	totalObtainedScore: number
}

export const generateTests = (): Promise<TestsResponse> => {
	return fetchData('http://localhost:8080/user/tests/')
}

export const generateTestQuestion = (
	testUrl: string
): Promise<QuestionResponse> => {
	return fetchData(`http://localhost:8080/user/tests/${testUrl}/start`)
}

export const submitQuestion = ({
	testUrl,
	question,
	answer,
}: {
	testUrl: string
	question: string
	answer: string
}): Promise<SubmitAnswerResponse> => {
	return fetchData(
		`http://localhost:8080/user/${testUrl}/questions/${question}/answer`,
		{
			method: 'POST',
			data: {
				option: answer,
				isAttempted: true,
			},
		}
	)
}

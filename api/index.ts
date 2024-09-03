import axios from 'axios'

// Retrieve the object from storage
const retrievedObject = localStorage.getItem('userObject')

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080',
	timeout: 5000,
	headers: {
		ContentType: 'application/json',
		Authorization: `Bearer ${JSON.parse(retrievedObject)?.token}`,
	},
})

export const fetchData = async (url, options = {}) => {
	try {
		const response = await axiosInstance(url, options)
		return response.data
	} catch (error) {
		console.error('Error retrieving data:', error)
		throw new Error('Could not get data')
	}
}

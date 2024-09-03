import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import Providers from '../components/Providers'
import { Roboto } from 'next/font/google'
import { AppProvider } from '../context/app-context'

const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '700'],
})

export const viewport = {
	themeColor: '#673ab7',
}

export const metadata = {
	title: 'Todo App',
	description: 'An example of NextJS app with 100% accessible lighthouse score',

	manifest: '/static/manifest.json',
}

export default function RootLayout(props) {
	return (
		<html lang="en-gb" className={roboto.className}>
			<body>
				<AppRouterCacheProvider>
					<Providers>
						<AppProvider>{props.children}</AppProvider>
					</Providers>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}

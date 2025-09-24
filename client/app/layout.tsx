import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ChildProps } from '@/types';
import { FC } from 'react';
import Navbar from '@/components/shared/navbar';
import { Toggle } from '@/components/ui/toggle';
import { ThemeProvider } from '@/components/provider/theme-provider';

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Seleor e-commerce',
	description: 'Seleor e-commerce website built with Next.js',
	icons: { icon: '/favicon.png' },
};

const RootLayout: FC<ChildProps> = ({ children }) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${montserrat.className}`} suppressHydrationWarning>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />

					<main className='container max-w-6xl mt-24'>{children}</main>
					<Toggle />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;

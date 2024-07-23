// styles
import '@/app/_styles/globals.css';
import { Josefin_Sans } from 'next/font/google';

// components
import Header from './_components/Header';
import { ReservationProvider } from './_context/ReservationContext';

export const metadata = {
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.',
};

const fontStyle = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontStyle.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

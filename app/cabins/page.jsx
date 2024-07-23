import { Suspense } from 'react';
import Filter from '../_components/Filter';
import Spinner from '../_components/Spinner';
import CabinList from '../_components/CabinList';
import ReservationReminder from '../_components/ReservationReminder';

// Use this revalidate tool when you have data that changes from time to time but not constantly.
// revalidate only works for statically generated pages
// the value for revalidate has to be a number in seconds.
// This is the route level revalidation
export const revalidate = 3600; // 1hr

export const metadata = {
  title: 'Cabins',
};

export default function Page({ searchParams }) {
  // searchParams is a default prop that comes with Page.js/jsx
  // it is an object that contains the query parameters from the URL
  // By adding searchParams this page becomes a dynamically generated page.
  // This means that the page will be generated every time the searchParams change.
  const filter = searchParams?.capacity ?? 'all';

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      {/* The key prop is using to help re-render the fallback for the suspense component each time key/filter is different video 465  */}
      <Suspense key={filter} fallback={<Spinner />}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

// import { unstable_noStore as noStore } from 'next/cache';
import CabinCard from './CabinCard';
import { getCabins } from '../_lib/data-service';

// To use revalidate in the component level you would use the fetch api. In this case I'm using getCabins which is connecting to supabase.
// So in this example from video 459 I use Next.js noStore function.

async function CabinList({ filter }) {
  // Using noStore would make the list that displays all the cabins the only dynamic part of the cabins page.
  // making it partial prerendering.
  //noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;

  if (filter === 'all') displayedCabins = cabins;

  if (filter === 'small')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

  if (filter === 'medium')
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );

  if (filter === 'large')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;

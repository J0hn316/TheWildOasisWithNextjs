'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Button from './Button';

function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const displayActiveFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filter) {
    // Use a separate API- URLSearchParams. that provides a few methods that manipulate the URL query parameters.
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    // Use the useRouter hook to set up programmatic navigation between routes with usePathname.
    // setting scroll 'optional' to false ensures that the page will not scroll to the top of the page.
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={displayActiveFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={displayActiveFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={displayActiveFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={displayActiveFilter}
      >
        8&mdash;guest 12
      </Button>
    </div>
  );
}

export default Filter;

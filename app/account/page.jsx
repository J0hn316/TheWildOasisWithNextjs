import { auth } from '../_lib/auth';

export const metadata = {
  title: 'Guest',
};

export default async function Page() {
  const session = await auth();

  // session.user.name returns the full name of user. To just display the first name do the following.
  const firstName = session.user.name.split(' ').at(0);

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome {firstName}
    </h2>
  );
}

import { fetchMetadata } from '@twistr/utils/fetchMetadata';
import { useContext, useEffect, useState } from 'react';
import { getPublicKey } from 'nostr-tools';
import { RelayContext } from './relaysProvider';
import Image from 'next/image';

export const NostrProfile = ({ privkey }: { privkey: string }) => {
  const [pool, relays]: any = useContext(RelayContext);
  const [profile, setProfile]: any = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const result: any = await fetchMetadata(getPublicKey(privkey), pool, relays);
      const json = JSON.parse(result.content);
      setProfile(json);
    };

    getProfile().catch(console.error);
  }, [privkey, pool, relays]);

  return (
    <div className="group block flex-shrink-0 rounded-md bg-white p-2 shadow-md ring-1 ring-zinc-200">
      <div className="flex items-center">
        <div className="relative h-10 w-10 rounded-full ring-1 ring-zinc-100">
          <Image src={profile?.picture} alt={'avatar'} fill={true} className="rounded-full object-cover" priority />
        </div>
        <div className="ml-2 flex flex-col gap-1">
          <p className="font-medium leading-none text-zinc-700 group-hover:text-zinc-900">
            {profile?.display_name || profile?.name}
          </p>
          <p className="text-xs font-medium leading-none text-zinc-500 group-hover:text-zinc-700">
            {getPublicKey(privkey).substring(0, 7) + '...'}
          </p>
        </div>
      </div>
    </div>
  );
};

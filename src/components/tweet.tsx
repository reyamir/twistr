import { privateKeyAtom } from '@twistr/stores/key';
import { useAtomValue } from 'jotai';
import { getPublicKey, getEventHash, signEvent } from 'nostr-tools';
import { useContext, useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { RelayContext } from './relaysProvider';

export const Tweet = ({ tweet }: { tweet: string }) => {
  const [sync, setSync] = useState(false);
  const [pool, relays]: any = useContext(RelayContext);
  const privKey = useAtomValue(privateKeyAtom);

  const syncToNostr = useCallback(
    async (tweet: string) => {
      if (privKey) {
        const event: any = {
          content: tweet,
          created_at: Math.floor(Date.now() / 1000),
          kind: 1,
          pubkey: getPublicKey(privKey),
          tags: [],
        };
        event.id = getEventHash(event);
        event.sig = signEvent(event, privKey);

        // publish note
        pool.publish(event, relays);
        // update state
        setSync(true);
      } else {
        toast.error('You need to provide private key');
      }
    },
    [privKey, pool, relays]
  );

  return (
    <div className="inline-flex rounded border border-zinc-100 px-4 py-3">
      <div className="flex w-full flex-col justify-between gap-4 sm:flex-row">
        <div>{tweet}</div>
        <button
          onClick={() => syncToNostr(tweet)}
          className="inline-flex h-8 transform items-center justify-center rounded bg-blue-500 px-2.5 leading-none text-white shadow-blue-500/50 hover:shadow-lg active:translate-y-1"
        >
          {sync ? 'Synced' : 'Sync'}
        </button>
      </div>
    </div>
  );
};

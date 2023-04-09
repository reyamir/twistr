'use client';
import { tweetsAtom } from '@twistr/stores/tweets';
import { useAtomValue } from 'jotai';

export const Tweets = () => {
  const tweets = useAtomValue(tweetsAtom);

  if (tweets.length > 0) {
    return (
      <div className="h-full w-full p-4 lg:p-6">
        <div className="flex flex-col gap-4">
          {tweets.map((tweet, index) => (
            <div key={index} className="inline-flex rounded border border-zinc-100 px-4 py-3">
              <div>{tweet}</div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p>No tweet found</p>
      </div>
    );
  }
};

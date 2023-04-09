'use client';
import { tweetsAtom } from '@twistr/stores/tweets';
import { useAtomValue } from 'jotai';
import { Tweet } from './tweet';

export const Tweets = () => {
  const tweets = useAtomValue(tweetsAtom);

  if (tweets.length > 0) {
    return (
      <div className="h-full w-full p-4 lg:p-6">
        <div className="flex flex-col gap-4">
          {tweets.map((tweet, index) => (
            <Tweet key={index} tweet={tweet} />
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

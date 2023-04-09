'use client';
import { tweetsAtom } from '@twistr/stores/tweets';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

export const TwitterHandleInput = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const setTweetsAtom = useSetAtom(tweetsAtom);

  const fetchTweets = () => {
    setLoading(true);
    let username: string = value;

    if (username.match(/^[A-Za-z0-9_]{1,15}$/)) {
      // remove @ if present
      while (username.charAt(0) === '@') {
        username = username.substring(1);
      }
      fetch(`https://twistr-api-production.up.railway.app/user/${username}`)
        .then((res) => res.json())
        .then((data) => (setTweetsAtom(data.data), setLoading(false)));
    }
  };

  return (
    <div className="flex flex-col">
      <input
        placeholder="Ex: reyamir_"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-2 h-10 w-full rounded px-2 text-sm ring-1 ring-zinc-300 placeholder:text-zinc-500"
      />
      <button
        type="button"
        onClick={() => fetchTweets()}
        className="mb-1 inline-flex h-9 w-full items-center justify-center rounded bg-zinc-900 px-2 text-sm font-medium text-zinc-100 ring-1 ring-zinc-950"
      >
        {loading ? (
          <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          'Search & fetch tweets'
        )}
      </button>
    </div>
  );
};

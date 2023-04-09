'use client';
import { privateKeyAtom } from '@twistr/stores/key';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { NostrProfile } from './nostrProfile';

export const PrivateKeyInput = () => {
  const [value, setValue] = useState('');
  const [key, setKey]: any = useAtom(privateKeyAtom);

  const saveKey = () => {
    setKey(value);
  };

  const deleteKey = () => {
    setKey('');
  };

  if (key) {
    return (
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-zinc-500">
          Nostr Profile{' '}
          <button onClick={() => deleteKey()} className="text-red-500">
            (logout)
          </button>
        </span>
        <NostrProfile privkey={key} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <input
          name="privateKey"
          placeholder="Private key..."
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mb-2 h-10 w-full rounded px-2 text-sm ring-1 ring-zinc-300 placeholder:text-zinc-500"
        />
        <button
          type="button"
          onClick={() => saveKey()}
          className="mb-1 inline-flex h-9 w-full items-center justify-center rounded bg-zinc-900 px-2 text-sm font-medium text-zinc-100 ring-1 ring-zinc-950"
        >
          Save
        </button>
        <span className="text-xs italic text-red-500">* private key will be saved in local storage</span>
      </div>
    );
  }
};

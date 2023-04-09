'use client';
import { PrivateKeyInput } from '@twistr/components/privateKeyInput';
import { Tweets } from '@twistr/components/tweets';
import { TwitterHandleInput } from '@twistr/components/twitterHandleInput';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="grid h-screen w-screen grid-cols-4">
      <div className="col-span-1 border-r border-zinc-100 bg-zinc-50">
        <div className="flex h-full flex-col justify-between px-4 py-4 lg:px-6">
          <div className="flex flex-col gap-8">
            <PrivateKeyInput />
            <TwitterHandleInput />
          </div>
          <div>
            <p className="text-sm font-bold text-zinc-800">Github:</p>
            <nav className="flex items-center gap-2">
              <Link href="https://github.com/reyamir/twistr" className="text-sm text-zinc-500">
                twistr
              </Link>
              <Link href="https://github.com/reyamir/twistr-api" className="text-sm text-zinc-500">
                twistr-api
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="h=full col-span-3 overflow-y-auto">
        <Tweets />
      </div>
      <Toaster position="top-center" reverseOrder={false} gutter={8} containerClassName="" containerStyle={{}} />
    </main>
  );
}

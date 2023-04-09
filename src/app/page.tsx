import { PrivateKeyInput } from '@twistr/components/privateKeyInput';
import { Tweets } from '@twistr/components/tweets';
import { TwitterHandleInput } from '@twistr/components/twitterHandleInput';

export default function Home() {
  return (
    <main className="grid h-screen w-screen grid-cols-4">
      <div className="col-span-1 border-r border-zinc-100 bg-zinc-50">
        <div className="flex h-full flex-col gap-8 px-4 py-8 lg:px-6">
          <PrivateKeyInput />
          <TwitterHandleInput />
        </div>
      </div>
      <div className="col-span-3">
        <Tweets />
      </div>
    </main>
  );
}

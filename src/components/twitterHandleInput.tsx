export const TwitterHandleInput = () => {
  return (
    <div className="flex flex-col">
      <input
        placeholder="Ex: @reyamir_"
        type="text"
        className="mb-2 h-10 w-full rounded px-2 text-sm ring-1 ring-zinc-300 placeholder:text-zinc-500"
      />
      <button
        type="button"
        className="mb-1 inline-flex h-9 w-full items-center justify-center rounded bg-zinc-900 px-2 text-sm font-medium text-zinc-100 ring-1 ring-zinc-950"
      >
        Search & fetch tweets
      </button>
    </div>
  );
};
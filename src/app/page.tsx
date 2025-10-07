import Input from '@/components/Input/Input';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-semibold text-center sm:text-left">
          Input Types Demo
        </h1>

        <div className="grid gap-6 w-full sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Text. Not clearable</label>
            <Input type="text" placeholder="Enter text..." />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="Enter password..." clearable />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="example@email.com" clearable />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Number</label>
            <Input type="number" placeholder="123" clearable />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Telephone</label>
            <Input type="tel" placeholder="+380..." clearable />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">URL</label>
            <Input type="url" placeholder="https://example.com" clearable />
          </div>
        </div>
      </main>
    </div>
  );
}

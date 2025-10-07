'use client';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import Toast from '@/components/Toast/Toast';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  } | null>(null);

  const showToast = (
    message: string,
    type: 'success' | 'error' | 'info' | 'warning'
  ) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-950 text-white">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center sm:text-left">
          🎨 Component Showcase
        </h1>

        <section className="w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6 text-blue-500 text-center sm:text-left">
            Input Types Demo
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 w-full">
            <div>
              <p className="mb-2 text-sm font-medium">Text (not clearable)</p>
              <Input type="text" placeholder="Enter text..." />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Password</p>
              <Input
                type="password"
                placeholder="Enter password..."
                clearable
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Email</p>
              <Input type="email" placeholder="example@email.com" clearable />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Number</p>
              <Input type="number" placeholder="123" clearable />
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            Sidebar Menu Demo
          </h2>
          <button
            onClick={() => setMenuOpen(true)}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Open Menu
          </button>

          <SidebarMenu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            items={[
              { label: 'Home' },
              {
                label: 'Projects',
                children: [
                  { label: 'Frontend' },
                  { label: 'Backend' },
                  { label: 'Mobile' },
                ],
              },
              {
                label: 'Settings',
                children: [{ label: 'Account' }, { label: 'Security' }],
              },
            ]}
          />
        </section>

        <section className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            Toast Notifications Demo
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => showToast('Operation successful!', 'success')}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition cursor-pointer"
            >
              Show Success
            </button>
            <button
              onClick={() => showToast('Something went wrong!', 'error')}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
            >
              Show Error
            </button>
            <button
              onClick={() => showToast('Check this info.', 'info')}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Show Info
            </button>
            <button
              onClick={() => showToast('Warning! Be careful.', 'warning')}
              className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition cursor-pointer"
            >
              Show Warning
            </button>
          </div>
        </section>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </main>
    </div>
  );
}

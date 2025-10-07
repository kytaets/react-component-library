'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export default function SidebarMenu({
  isOpen,
  onClose,
  items,
}: SidebarMenuProps) {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-neutral-900 shadow-xl z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between p-4 border-b dark:border-neutral-800">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              {items.map((item) => (
                <div key={item.label} className="mb-2">
                  <button
                    className="w-full flex justify-between items-center py-2 px-3 rounded hover:bg-gray-100 
                    dark:hover:bg-neutral-800 transition cursor-pointer"
                    onClick={() => item.children && toggleMenu(item.label)}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <FontAwesomeIcon
                        icon={
                          openMenus.includes(item.label)
                            ? faChevronDown
                            : faChevronRight
                        }
                        className="text-gray-500"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {item.children && openMenus.includes(item.label) && (
                      <motion.div
                        className="ml-4 mt-1 border-l border-gray-200 dark:border-neutral-700 pl-3"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {item.children.map((sub) => (
                          <button
                            key={sub.label}
                            className="w-full text-left py-1.5 px-2 rounded hover:bg-gray-100 
                            dark:hover:bg-neutral-800 text-sm transition cursor-pointer"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

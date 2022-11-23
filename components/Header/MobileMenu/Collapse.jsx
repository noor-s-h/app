import { Disclosure } from '@headlessui/react'
import ChevronIcon from 'icons/ChevronIcon'
import { AnimatePresence, motion } from 'framer-motion'

export default function Collapse({ title, children }) {
  return (
    <Disclosure as="li">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between">
            {title}
            <ChevronIcon open={open} />
          </Disclosure.Button>
          <AnimatePresence initial={false}>
            {open && (
              <Disclosure.Panel
                static
                as={motion.ul}
                initial={{ opacity: 0, height: 0, y: -32 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="overflow-hidden"
              >
                <ul className="mt-4 flex flex-col gap-4 border-l pl-4">
                  {children}
                </ul>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
}

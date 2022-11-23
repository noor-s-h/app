import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import BurgerIcon from 'icons/BurgerIcon'

export default function MenuDropDown({ open, children }) {
  return (
    <>
      <Popover.Button className="[&:not(:focus-visible)]:focus:outline-none">
        <BurgerIcon open={open} />
      </Popover.Button>
      <AnimatePresence initial={false}>
        {open && (
          <Popover.Panel
            static
            as={motion.ul}
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -32,
              transition: { duration: 0.2 },
            }}
            className="top-17 absolute inset-x-0 flex flex-col gap-4 border-b bg-white p-4"
          >
            {children}
          </Popover.Panel>
        )}
      </AnimatePresence>
    </>
  )
}

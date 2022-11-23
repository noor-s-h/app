import { useRef, useCallback } from 'react'
import { Popover } from '@headlessui/react'
import ChevronIcon from 'icons/ChevronIcon'
import { AnimatePresence, motion } from 'framer-motion'

export default function Dropdown({ title, children }) {
  const buttonRef = useRef(null)

  const handleToggle = useCallback(() => {
    buttonRef?.current?.click()
  }, [])

  return (
    <Popover as="li" className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            ref={buttonRef}
            onMouseEnter={handleToggle}
            onMouseLeave={handleToggle}
            className="flex [&:not(:focus-visible)]:focus:outline-none"
          >
            {title}
            <ChevronIcon open={open} />
          </Popover.Button>
          <AnimatePresence initial={false}>
            {open && (
              <Popover.Panel
                static
                as={motion.div}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{
                  opacity: 0,
                  y: -8,
                  x: '-60%',
                  transition: { duration: 0.2 },
                }}
                className="absolute left-1/2 whitespace-nowrap  pt-4"
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
              >
                <ul className="flex flex-col gap-4 rounded border bg-white p-4 shadow-sm">
                  {children}
                </ul>
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  )
}

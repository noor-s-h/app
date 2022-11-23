import { Popover } from '@headlessui/react'
import { Fragment } from 'react'
import Menu from './Menu'
import useMediaQuery from 'hooks/useMediaQuery'
import MenuDropDown from './MenuDropDown'
import AuthButton from '../Shared/AuthButton'

export default function MobileMenu({ menus, authmenus }) {
  const isMobile = useMediaQuery('(max-width: 640px)')

  return (
    isMobile && (
      <Popover as={Fragment}>
        {({ open }) => (
          <>
            <MenuDropDown open={open}>
              <Menu menus={menus} />
              <div className="mt-2 flex flex-col gap-4">
                <AuthButton authmenus={authmenus} />
              </div>
            </MenuDropDown>
          </>
        )}
      </Popover>
    )
  )
}

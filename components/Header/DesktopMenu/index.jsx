import useMediaQuery from 'hooks/useMediaQuery'

import AuthButton from '../Shared/AuthButton'
import Menu from './Menu'

export default function DesktopMenu({ menus, authmenus }) {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  return (
    isDesktop && (
      <>
        <Menu menus={menus} />

        <div className="flex gap-6">
          <AuthButton authmenus={authmenus} />
        </div>
      </>
    )
  )
}

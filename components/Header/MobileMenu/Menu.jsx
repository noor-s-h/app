import { Popover } from '@headlessui/react'
import Collapse from './Collapse'
import SubMenu from '../Shared/SubMenu'

export default function Menu({ menus }) {
  return menus.map(({ title, url, submenus }, index) =>
    submenus ? (
      <Collapse key={index} title={title}>
        <SubMenu submenus={submenus} />
      </Collapse>
    ) : (
      <li key={index}>
        <Popover.Button as="a" href={url} className="flex">
          {title}
        </Popover.Button>
      </li>
    )
  )
}

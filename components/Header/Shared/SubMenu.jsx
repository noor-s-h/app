import { Popover } from '@headlessui/react'

export default function SubMenu({ submenus }) {
  return submenus.map(({ title, url }, index) => (
    <li key={index}>
      <Popover.Button as="a" href={url} className="flex">
        {title}
      </Popover.Button>
    </li>
  ))
}

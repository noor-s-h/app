import Dropdown from './Dropdown'
import SubMenu from '../Shared/SubMenu'

export default function Menu({ menus }) {
  return (
    <ul className="flex items-center gap-8">
      {menus.map(({ title, url, submenus }, index) =>
        submenus ? (
          <Dropdown key={index} title={title}>
            <SubMenu submenus={submenus} />
          </Dropdown>
        ) : (
          <li key={index}>
            <a href={url} className="flex">
              {title}
            </a>
          </li>
        )
      )}
    </ul>
  )
}

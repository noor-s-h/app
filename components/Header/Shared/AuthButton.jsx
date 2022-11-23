export default function AuthButton({ authmenus }) {
  return (
    <>
      {authmenus.map(({ title, url, style }, index) => {
        const className =
          style === 'outline'
            ? 'border bg-white text-gray-900'
            : 'bg-gray-800 text-gray-100'
        return (
          <button key={index} href={url} className={`text-sm rounded-md px-4 py-2 shadow-sm ${className}`}>
            {title}
          </button>
        )
      })}
    </>
  )
}

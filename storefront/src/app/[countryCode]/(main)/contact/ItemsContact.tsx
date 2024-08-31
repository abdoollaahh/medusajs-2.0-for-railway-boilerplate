const MailIcon: React.FC = () => (
  <svg
    className="w-8 h-8 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
    />
  </svg>
)

const PhoneIcon: React.FC = () => (
  <svg
    className="w-8 h-8 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
    />
  </svg>
)

const ItemsContact = () => {
  const contactOptions = [
    {
      label: "Sales",
      href: "tel:61409517333",
      icon: <MailIcon />,
      title: "+61 409 517 333",
    },
  ]

  return (
    <div className="grid grid-cols-6 gap-4 sm:gap-8">
      <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-2 sm:p-8  flex gap-4 ">
        <div className="p-5 border text-2xl rounded-2xl">
          <MailIcon />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-light">General Queries</h3>
          <a href="info@space-car.ch" target="_blank" rel="noreferrer">
            <h3 className="text-2xl font-light">info@space-car.ch</h3>
          </a>
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-2 sm:p-8  flex gap-4 ">
        <div className="p-5 border text-2xl rounded-2xl">
          <MailIcon />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-light">Product Queries</h3>
          <a href="info@space-car.ch" target="_blank" rel="noreferrer">
            <h3 className="text-2xl font-light">info@space-car.ch</h3>
          </a>
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-2 sm:p-8  flex gap-4 ">
        <div className="p-5 border text-2xl rounded-2xl">
          <PhoneIcon />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-light">Sales</h3>
          <a href="info@space-car.ch" target="_blank" rel="noreferrer">
            <h3 className="text-2xl font-light">999 999 999</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ItemsContact

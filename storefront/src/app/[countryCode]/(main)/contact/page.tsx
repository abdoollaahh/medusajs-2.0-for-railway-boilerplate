import { HeaderContact, ItemsContact } from "."
import { NextPage } from "next"

const ContactPage: NextPage = () => {
  return (
    <div>
      <div className="wrapper px-8 md:px-12 py-6 sm:py-12 lg:py-16  flex flex-col gap-6 sm:gap-16">
        <HeaderContact />
        <ItemsContact />
      </div>
    </div>
  )
}

export default ContactPage

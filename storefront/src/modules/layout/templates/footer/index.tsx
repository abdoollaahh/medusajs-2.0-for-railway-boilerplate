import { Text } from "@medusajs/ui"
import Logo from "/public/images/logoWhite.svg"
import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full bg-[#19355E]">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-10">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              <Image src={Logo} alt="Logo" width={200} />
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            <div className="flex flex-col gap-y-2">
              <span className="text-lg text-white">Socials</span>
              <ul className="grid grid-cols-1 gap-y-2 txt-small text-ui-fg-muted">
                <li>
                  <a
                    href="https://www.facebook.com/share/xcz631K38SAyKYpA/?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    Facebook{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/space_car.cernier?igsh=MXhhcGFxYmt2Zndj&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="wa.me/41767979217s"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Space-Car. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}

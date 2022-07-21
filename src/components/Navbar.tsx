import { ReactNode } from "react"
import { SignInLink } from "./SignInLink"

type NavbarProps = {
    /**
     * Takes one or multiple NavbarLinks.
     */
    children: ReactNode | ReactNode[]
}

export default function Navbar({ children }: NavbarProps) {
    return (
        <nav>
            <ul className="flex max-w-xl gap-2 p-3 mx-auto bg-slate-50 rounded-xl">
                <div className="flex flex-1 ">
                    {children}
                </div>
                <div className="flex flex-shrink ">
                    <SignInLink />
                </div>
            </ul>
        </nav>
    )
}
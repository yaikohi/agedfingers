import { trpc } from "../utils/trpc";
import Link from "next/link";

export const SignInLink = () => {
    const session = trpc.useQuery(["auth.getSession"]);
    const url = session.data ? "/api/auth/signin" : "/api/auth/signout"
    const content = session.data ? "sign out" : "sign in"

    return (
        <>
            <Link href={url}><a className="p-2 mx-2 hover:text-purple-400 hover:underline">{content}</a></Link>
        </>
    )
}

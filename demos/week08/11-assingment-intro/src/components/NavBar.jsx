import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center bg-raisinBlack p-4 border-b border-mindaro shadow-lg">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-mindaro rounded-full"></div>
                <h1 className="text-2xl font-bold text-mindaro">somewhat interesting</h1>
            </div>
            <div className="flex gap-6 text-lg">
                <Link href="/" className="hover:text-mindaro transition-colors">home</Link>
                <Link href="/posts/add-post" className="hover:text-mindaro transition-colors">add post</Link>
                <Link href="/posts" className="hover:text-mindaro transition-colors">posts</Link>
            </div>
        </nav>
    );
}
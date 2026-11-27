import Link from "next/link";
export function SiteFooter() { return <footer className="bg-[#29351f] py-12 text-white"><div className="container grid gap-8 md:grid-cols-3">
 <div><div className="text-xl font-bold">Solan Bamboo Furniture</div><p className="mt-3 max-w-sm text-sm leading-6 text-white/70">Traditional bamboo furniture, thoughtfully handcrafted in Himachal Pradesh.</p></div>
 <div><div className="font-semibold">Explore</div><div className="mt-3 grid gap-2 text-sm text-white/75"><Link href="/shop">Shop products</Link><Link href="/about">About us</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact</Link></div></div>
 <div><div className="font-semibold">Visit us</div><p className="mt-3 text-sm leading-6 text-white/70">Dharja, Solan, Himachal Pradesh 173223, India<br/>Add verified phone, hours and map link before launch.</p></div>
 </div><div className="container mt-10 border-t border-white/15 pt-5 text-xs text-white/50">© {new Date().getFullYear()} Solan Bamboo Furniture. All rights reserved.</div></footer>; }

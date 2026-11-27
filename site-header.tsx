import Link from "next/link";
const links = [["Home","/"],["About","/about"],["Shop","/shop"],["Gallery","/gallery"],["FAQs","/faqs"],["Contact","/contact"]];
export function SiteHeader() {
 return <header className="sticky top-0 z-40 border-b border-stone-200 bg-[#fbfbf7]/95 backdrop-blur">
  <div className="container flex min-h-20 items-center justify-between gap-5">
   <Link href="/" className="text-lg font-bold tracking-tight text-bamboo-900">SOLAN <span className="font-normal">BAMBOO</span><span className="block text-[10px] font-semibold tracking-[.25em] text-bamboo-700">FURNITURE</span></Link>
   <nav className="hidden items-center gap-6 text-sm md:flex">{links.map(([label,href])=><Link key={href} className="hover:text-bamboo-700" href={href}>{label}</Link>)}</nav>
   <Link className="btn text-sm" href="/contact">Enquire now</Link>
  </div>
 </header>;
}

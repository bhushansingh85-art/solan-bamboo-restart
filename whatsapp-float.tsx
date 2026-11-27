export function WhatsAppFloat() {
 const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
 if (!number || number.includes("X")) return null;
 const url = `https://wa.me/${number}?text=${encodeURIComponent("Hello, I would like to enquire about Solan Bamboo Furniture.")}`;
 return <a href={url} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 rounded-full bg-[#247b45] px-5 py-3 font-semibold text-white shadow-lg">WhatsApp ↗</a>;
}

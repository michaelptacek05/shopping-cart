'use client'

import { usePathname } from "next/navigation"



export default function ProductsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">{usePathname()}</h1>
        </div>
    )
}
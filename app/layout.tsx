import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ContractorTax — Track Business Expenses Automatically',
  description: 'Scan receipts, categorize expenses for tax deductions, and get quarterly tax estimates. Built for independent contractors and freelancers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0b6d04f9-6f92-4def-aade-4c338362efa8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}

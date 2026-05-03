export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Independent Contractors &amp; Freelancers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Business Expenses<br />
          <span className="text-[#58a6ff]">from Receipts Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Snap a photo of any receipt. Our AI scans, categorizes, and tracks every deductible expense — then generates your quarterly tax estimates so you never overpay.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No contracts. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📷</div>
            <h3 className="font-semibold text-white mb-1">Receipt OCR Scanning</h3>
            <p className="text-sm text-[#8b949e]">Upload or snap a photo — AI extracts vendor, amount, date, and category instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🗂️</div>
            <h3 className="font-semibold text-white mb-1">Smart Categorization</h3>
            <p className="text-sm text-[#8b949e]">Expenses auto-sorted into IRS Schedule C categories: office, travel, software, meals, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Quarterly Tax Estimates</h3>
            <p className="text-sm text-[#8b949e]">Know exactly what you owe each quarter. Export reports for your accountant or QuickBooks.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited receipt scans</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI expense categorization</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Quarterly tax estimates</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CSV &amp; QuickBooks export</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Mileage tracker included</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which expense categories are supported?</h3>
            <p className="text-sm text-[#8b949e]">All IRS Schedule C categories including office supplies, software subscriptions, travel, meals (50%), home office, professional services, and equipment depreciation.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate is the receipt scanning?</h3>
            <p className="text-sm text-[#8b949e]">Our OCR achieves 95%+ accuracy on clear receipt photos. You can always review and correct any field before saving — every edit improves future scans.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I export data for my accountant?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Export a full expense report as CSV or a QuickBooks-compatible file at any time. Reports are organized by category and quarter, ready for tax filing.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#6e7681]">
        © {new Date().getFullYear()} ContractorTax. Built for freelancers who hate overpaying taxes.
      </footer>
    </main>
  )
}

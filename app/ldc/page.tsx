"use client";
export default function LDCPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        LDC Complete Preparation Guide
      </h1>

      <p className="mb-4">
        For MPSC & Departmental LDC Exams (Paper I + Paper II)
      </p>

      <ul className="list-disc pl-5 mb-6">
        <li>Exact exam pattern (400 marks)</li>
        <li>6 full-length mock tests</li>
        <li>Descriptive English included</li>
        <li>Score & cutoff strategy</li>
      </ul>

      <p className="text-xl font-semibold mb-4">
        ₹249 only · Instant Access
      </p>

      <button
        className="bg-black text-white px-6 py-3 rounded"
        onClick={() => {
          window.location.href = "PASTE_RAZORPAY_LINK_HERE";
        }}
      >
        Get Instant Access
      </button>
    </main>
  );
}

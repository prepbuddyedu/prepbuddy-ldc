"use client";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Payment Successful!
      </h1>

      <p className="mb-4">
        Thank you for purchasing the PrepBuddy LDC Complete Preparation Guide.
      </p>

      <p className="mb-6">
        Click the button below to download your PDF.
      </p>

      <a
        href="https://drive.google.com/file/d/1PdMW_Bosfd9ACV_4n3_dpCtgkDMp4Yy_/view?usp=sharing"
        className="inline-block bg-black text-white px-6 py-3 rounded mb-6"
      >
        Download Your PDF
      </a>

      <p className="text-sm text-gray-600">
        For personal use only. Please do not share this material.
      </p>
    </main>
  );
}

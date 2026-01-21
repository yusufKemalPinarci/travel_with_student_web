import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy (Gizlilik Politikası)</h1>
      
      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Travel with Student. We value your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and share information when you use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. Data Collection</h2>
          <p className="mb-4">
            We collect the minimum amount of personal information necessary to provide our services and ensure trust and safety in our community. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Verification:</strong> Email address, phone number, and for Student Guides, university enrollment documents.</li>
            <li><strong>Profile Information:</strong> Name, profile photo, and biography.</li>
            <li><strong>Transaction Data:</strong> Booking history and payment details (processed securely by our third-party payment providers).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. KVKK & GDPR Compliance</h2>
          <p className="mb-4">
            We operate in strict compliance with the Personal Data Protection Law (KVKK) in Turkey and the General Data Protection Regulation (GDPR) for our European users.
          </p>
          <p>
            You have the right to access, correct, delete, or restrict the processing of your personal data at any time. To exercise these rights, please contact our Data Protection Officer at privacy@travelwithstudent.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Sharing</h2>
          <p className="mb-4">
            Travel with Student respects your data privacy. We do not sell your personal data to third parties. Data is shared only in the following specific circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Between Users:</strong> Contact information (First Name, rudimentary contact details) is shared between the Student Guide and the Traveler only <strong>after</strong> a booking is confirmed to facilitate communication.</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect the rights and safety of our community.</li>
          </ul>
        </section>

        <p className="text-sm text-slate-500 pt-8 border-t border-slate-200">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

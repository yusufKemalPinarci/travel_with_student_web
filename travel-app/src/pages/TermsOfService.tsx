import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <h1 className="text-3xl font-bold mb-8">Terms of Service (Kullanım Koşulları)</h1>
      
      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Platform Nature & Role</h2>
          <p className="mb-4">
            Travel with Student acts strictly as an <strong>intermediary platform</strong> connecting independent Student Guides with Travelers. We provide the technical infrastructure to facilitate these connections.
          </p>
          <p>
            We are not a tour operator, travel agency, or employer of the Student Guides. The contract for the tour or experience is directly between the Student Guide and the Traveler.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. Liability Disclaimer</h2>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <p className="font-medium text-slate-900 mb-2">Important Notice</p>
            <p className="text-sm">
              Travel with Student is <strong>NOT responsible</strong> for the conduct, safety, quality, or legality of the tours provided by Student Guides. While we implement verification processes (such as email and phone verification), we cannot guarantee the behavior of any user. Users participate in experiences at their own risk.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. User Conduct & Safety</h2>
          <p className="mb-4">
            To maintain a safe and respectful community, all users must adhere to the following rules:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be respectful and inclusive. Discrimination, harassment, or hate speech of any kind will not be tolerated.</li>
            <li>Respect personal boundaries and local laws.</li>
            <li>Misrepresentation of identity or credentials is strictly prohibited.</li>
          </ul>
          <p className="mt-4 text-red-600 font-medium">
            Violation of these terms will result in immediate account suspension or permanent ban without refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Payments & Refunds</h2>
          <p className="mb-4">
            All payments are processed securely through our authorized payment providers. 
          </p>
          <p>
            Travelers are charged at the time of booking confirmation. Student Guides receive their payout (minus the platform service fee) 24 hours after the successful completion of the tour. Refund policies are determined by the cancellation policy selected by the Guide (Flexible, Moderate, or Strict).
          </p>
        </section>

        <p className="text-sm text-slate-500 pt-8 border-t border-slate-200">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

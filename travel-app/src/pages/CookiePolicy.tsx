import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <h1 className="text-3xl font-bold mb-8">Cookie Preferences (Çerez Politikası)</h1>
      
      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">What are cookies?</h2>
          <p className="mb-4">
            Cookies are small text files stored on your device when you visit our website. We use them to make your experience smoother and more personalized.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">How We Use Cookies</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">1. Essential Cookies</h3>
              <p>
                These are strictly necessary for the website to function. They handle key mechanics like:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                 <li>Logging you in and keeping your session secure (Auth Tokens).</li>
                 <li>Remembering your security settings.</li>
                 <li>Routing and navigation.</li>
              </ul>
            </div>

            <div>
               <h3 className="text-lg font-bold text-slate-800 mb-2">2. Analytics & Performance Cookies</h3>
               <p>
                 We use these to understand how visitors interact with our site, helping us improve the platform.
               </p>
               <ul className="list-disc pl-6 mt-2 space-y-1">
                 <li>Counting visits and traffic sources.</li>
                 <li>Seeing which pages are most popular.</li>
                 <li>Identify technical issues or errors on pages.</li>
               </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Managing Preferences</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact the functionality of our website, such as staying logged in.
          </p>
        </section>
      </div>
    </div>
  );
}

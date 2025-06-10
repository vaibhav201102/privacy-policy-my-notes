import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Introduction</h2>
              <p>This Privacy Policy describes how My Notes Application collects, uses, and protects your information when you use our to-do list platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To-do list items and completion status</li>
                <li>Optional user preferences or settings (e.g., theme, layout)</li>
                <li>Device and usage data (used for improving app performance)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To store and display your to-do items</li>
                <li>To improve user experience and application performance</li>
                <li>To offer features like reminders or sorting options</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Security</h2>
              <p>We implement standard security practices to protect your data from unauthorized access or misuse. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
              <p>If you have any questions or feedback, feel free to contact us:</p>
              <p className="mt-2">Email: vaibhavjoshi25098@gmail.com</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with a new effective date.</p>
              <p className="mt-2">Last updated: June 10, 2025</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

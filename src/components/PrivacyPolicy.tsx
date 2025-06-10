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
              <p>This Privacy Policy outlines how Quiz Application collects, uses, and protects your personal data when you use our platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                {/* <li>Account information (email, username, password)</li> */}
                <li>Account information (email, username, password)</li>
                <li>Quiz performance, scores, and progress tracking</li>
                <li>Device information and usage analytics</li>
                <li>Any additional profile details you choose to share</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide a personalized quiz experience</li>
                <li>To track and display your progress</li>
                <li>To enhance app performance and usability</li>
                <li>To send updates or important notifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Security</h2>
              <p>We take appropriate measures to ensure the security of your personal information against unauthorized access or misuse.</p>
            </section>

            {/* <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access, update, or delete your personal data</li>
                <li>Request corrections to incorrect information</li>
                <li>Opt-out of non-essential communications</li>
              </ul>
            </section> */}

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
              <p>If you have any questions or concerns, feel free to reach out:</p>
              <p className="mt-2">Email: vaibhavjoshi25098@gmail.com</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Updates to This Policy</h2>
              <p>We may revise this policy periodically. Any updates will be posted on this page.</p>
              <p className="mt-2">Last updated: February 16, 2025</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

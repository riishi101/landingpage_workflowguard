import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="text-sm text-workflowguard-purple font-medium mb-4">
            Privacy Policy
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            This privacy policy explains how we handle any information collected
            when you use this Framer template.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy describes our policies and procedures on the
              collection, use, and disclosure of your information when you use
              the Service and tells you about your privacy rights and how the
              law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Information We Collect
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2.1 Information You Provide to Us
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                While using our Service, we may ask you to provide us with
                certain personally identifiable information that can be used to
                contact or identify you ("Personal Data").
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Email address</li>
                <li>• First name and last name</li>
                <li>• Usage data</li>
                <li>• Account preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2.2 Information We Collect Automatically
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you access or use our Service, we automatically collect
                certain information.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Device information</li>
                <li>• IP address</li>
                <li>• Browser type</li>
                <li>• Operating system</li>
                <li>• Access times</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the collected data for various purposes:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• To provide and maintain our Service</li>
              <li>• To notify you about changes to our Service</li>
              <li>• To provide customer support</li>
              <li>• To gather analysis or valuable information</li>
              <li>• To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Your Data Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• The right to access your personal data</li>
              <li>• The right to correct your personal data</li>
              <li>• The right to delete your personal data</li>
              <li>• The right to restrict processing of your personal data</li>
              <li>• The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              6. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-4">
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:privacy@workflowguard.com"
                  className="text-workflowguard-purple hover:underline"
                >
                  privacy@workflowguard.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

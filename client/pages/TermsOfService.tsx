import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="text-sm text-workflowguard-purple font-medium mb-4">
            Terms of Service
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Read about something
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Information Collection and Use
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect personal information such as your name, email
              address, and usage data when you sign up for or interact with our
              design templates. This information is used solely to improve our
              services and provide you with a better user experience.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We take the security of your personal information seriously and
              employ industry-standard measures to protect it from unauthorized
              access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our design templates may include links to third-party websites or
              services. Please note that we do not control or endorse the
              content or privacy practices of these third parties.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be reflected on this page, and we
              encourage you to review this Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions or concerns about these Terms of
              Service, please contact us:
            </p>
            <div className="mt-4">
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:terms@workflowguard.com"
                  className="text-workflowguard-purple hover:underline"
                >
                  terms@workflowguard.com
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

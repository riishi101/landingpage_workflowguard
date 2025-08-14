import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does WorkflowGuard integrate with HubSpot?",
      answer:
        "WorkflowGuard integrates seamlessly with HubSpot through official APIs. Simply connect your HubSpot account with our secure OAuth integration, and we'll automatically discover and begin monitoring all your workflows within minutes.",
    },
    {
      question: "What happens when a workflow fails?",
      answer:
        "When a workflow fails, WorkflowGuard immediately sends real-time notifications via email, Slack, or SMS (depending on your preferences). We also provide detailed failure logs, suggested fixes, and can automatically retry failed workflows based on your configuration.",
    },
    {
      question: "Can I monitor workflows across multiple HubSpot accounts?",
      answer:
        "Yes! WorkflowGuard supports monitoring across multiple HubSpot accounts and portals. You can manage all your workflows from a single dashboard, with role-based access controls to ensure team members see only relevant data.",
    },
    {
      question: "How does the backup and recovery feature work?",
      answer:
        "WorkflowGuard automatically creates snapshots of your workflow configurations and data states. If a workflow fails or gets corrupted, you can restore it to any previous working state with just one click. We maintain 30 days of backup history for all plans.",
    },
    {
      question: "Is my HubSpot data secure with WorkflowGuard?",
      answer:
        "Absolutely. We use enterprise-grade security with 256-bit SSL encryption, SOC 2 Type II compliance, and never store your actual contact data. We only access workflow metadata and execution logs necessary for monitoring and alerting.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 email support for all plans, with priority support for Pro and Team plans. Team plan customers also get dedicated success managers and phone support. Our average response time is under 2 hours for all inquiries.",
    },
    {
      question: "Can I customize which notifications I receive?",
      answer:
        "Yes, WorkflowGuard offers granular notification settings. You can customize alerts by workflow type, severity level, time of day, and delivery method. Set up different notification rules for different team members based on their responsibilities.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! We offer a 14-day free trial for all plans with no credit card required. During the trial, you'll have full access to all features so you can see how WorkflowGuard protects your workflows before committing.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            FAQ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about WorkflowGuard and how it protects
            your HubSpot workflows.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-workflowguard-purple focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-6">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:support@workflowguard.com"
            className="inline-flex items-center text-workflowguard-purple hover:text-workflowguard-purple/80 font-semibold"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}

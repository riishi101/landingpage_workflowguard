import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Cake, Calendar } from "lucide-react";

const setupSteps = [
  {
    step: 1,
    title: "Welcome to WorkflowGuard!",
    description: "Congratulations on installing WorkflowGuard! We're excited to help you safeguard your HubSpot automations. Let's get your account connected.",
    image: null,
    tip: "Make sure you have the necessary permissions to access workflows in your HubSpot account.",
  },
  {
    step: 2,
    title: "Connect Your HubSpot Account",
    description: "To begin monitoring your HubSpot workflows, you need to grant WorkflowGuard access to your HubSpot portal. This allows us to read your workflow definitions for versioning and to perform rollbacks when needed.",
    image: "/connect your hubspot account.png",
  },
  {
    step: 3,
    title: "Grant WorkflowGuard Permissions",
    description: "After clicking 'Connect to HubSpot' in the previous step, you'll be redirected to HubSpot's authorization screen. Here, you'll select the HubSpot account you wish to connect and approve the necessary permissions for WorkflowGuard to operate.",
    image: "/Grant WorkflowGuard Permissions.png",
  },
  {
    step: 4,
    title: "Your HubSpot Account is Connected!",
    description: "Great job! Your HubSpot account is now linked with WorkflowGuard. You'll automatically see all available workflows from your connected HubSpot portal. Now, simply select the workflows you wish to protect and begin monitoring.",
    image: "/Your HubSpot Account is Connected!.png",
  },
  {
    step: 5,
    title: "Manage Your Connected HubSpot Portals",
    description: "You can always review and manage your connected HubSpot accounts or add a new WorkflowGuard in profile settings. This section allows you to check connection status, disconnect a portal, or reconnect if needed.",
    image: "/Manage Your Connected HubSpot Portals.png",
  },
];

export default function BlogSetupGuide() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <header className="mb-12 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                HubSpot Setup Guide: Get Started with WorkflowGuard
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                This guide will walk you through the essential steps to connect your HubSpot account and begin protecting your invaluable workflows with WorkflowGuard's robust version control and monitoring features.
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>By Sam Jones on July 17, 2024</span>
              </div>
            </header>

            <div className="space-y-16">
              {setupSteps.map((item) => (
                <section key={item.step} className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                  <div className="flex items-center sm:items-start space-x-4 sm:space-x-0 sm:flex-col sm:space-y-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-workflowguard-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    {item.step !== setupSteps.length && (
                      <div className="hidden sm:block w-px h-16 bg-gray-200 mx-auto mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                    
                    {item.tip && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3 mb-6">
                        <Cake className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-blue-800">Cake Tip</h5>
                          <p className="text-sm text-blue-700">{item.tip}</p>
                        </div>
                      </div>
                    )}

                    {item.image && (
                      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 p-2 sm:p-4">
                        <img
                          src={item.image}
                          alt={`Step ${item.step}: ${item.title}`}
                          className="w-full h-auto rounded-md shadow-sm"
                        />
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

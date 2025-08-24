import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Safeguard Your HubSpot Workflows.
            <br />
            <span className="text-workflowguard-purple">
              Never Lose Progress Again.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Seamlessly monitor, protect, and optimize your HubSpot workflow
            performance with real-time alerts, comprehensive analytics, and
            automated backup solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="https://app-na2.hubspot.com/oauth/authorize?client_id=5e6a6429-8317-4e2a-a9b5-46e8669f72f6&redirect_uri=https://api.workflowguard.pro/api/auth/hubspot/callback&scope=automation%20oauth"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button
                size="lg"
                className="bg-workflowguard-purple hover:bg-workflowguard-purple/90 text-white px-8 py-4 text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="border-workflowguard-purple text-workflowguard-purple hover:bg-workflowguard-purple hover:text-white px-8 py-4 text-lg transition-all duration-200"
            >
              Learn More
            </Button>
          </div>

          <div className="bg-workflowguard-light-purple/20 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  WorkflowGuard Dashboard
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src="/WorkflowGuard Dashboard (1).png"
                  alt="WorkflowGuard Dashboard Overview showing workflow monitoring interface with active workflows, uptime metrics, and workflow management features"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

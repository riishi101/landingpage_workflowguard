import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function BlogSetupGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            HubSpot Setup Guide: Get Started with WorkflowGuard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            This guide will walk you through the essential steps to connect your
            HubSpot account and begin protecting your invaluable workflows with
            WorkflowGuard's robust version control and monitoring features.
          </p>
          <p className="text-sm text-gray-500">Mar 22, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Welcome to WorkflowGuard!
            </h2>
            <p className="text-gray-700 mb-0">
              Congratulations on choosing WorkflowGuard! We're excited to help
              you safeguard your HubSpot automations. Let's get your account set
              up so you can start monitoring and protecting your workflows
              immediately.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Goal: Set Up
            </h3>
            <p className="text-gray-600 mb-4">
              Make sure you have the necessary permissions to access workflows
              in your HubSpot account.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Connect Your HubSpot Account
            </h3>
            <p className="text-gray-600 mb-6">
              To begin monitoring your HubSpot workflows, you'll need to grant
              WorkflowGuard access to your HubSpot portal. This allows us to
              read your workflow definitions for monitoring and to perform
              rollbacks when needed.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border flex items-center space-x-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ffe4464dadbca415cbe1a78d74f0e913a%2Febd9c14db1b14379ba8e30c0d0d7c88c?format=webp&width=800"
                    alt="WorkflowGuard Logo"
                    className="w-8 h-8"
                  />
                  <span className="text-lg font-semibold">⟷</span>
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">H</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600">
                Connecting <strong>WorkflowGuard</strong> to{" "}
                <strong>HubSpot</strong>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Choose an account
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Demo</div>
                    <div className="text-sm text-gray-600">
                      Developer test account (1)
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Demo1</div>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Acme</div>
                    <div className="text-sm text-gray-600">
                      Production environment (default)
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    acme-demo.hubspot.com
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button className="bg-workflowguard-purple hover:bg-workflowguard-purple/90">
                  Next step →
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your HubSpot Account is Connected!
            </h3>
            <p className="text-gray-600 mb-6">
              Great job! Your HubSpot account is now linked with WorkflowGuard.
              You'll automatically see all available workflows from your
              connected HubSpot portal. Now, simply select the workflows you
              want to protect and begin monitoring.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span>
                    WorkflowGuard is now monitoring your workflows for changes
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">
                    📊 Manage and view your CRM data
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    View contacts, companies, deals, tickets, and custom objects
                  </div>
                  <div className="text-sm text-gray-700">
                    ⚙️ Manage your workflow settings
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    View and modify your workflow settings and configuration
                  </div>
                  <div className="text-sm text-gray-700">
                    📈 View analytics and reports
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    Access your analytics dashboard and create reports
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Select Workflows to Protect
            </h3>
            <p className="text-gray-600 mb-6">
              Choose which workflows you want WorkflowGuard to monitor and
              protect.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  You Can Choose Professional Plan Features, allowing you to
                  monitor up to 100 workflows and maintain 30 days of history
                  for each.
                </h4>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center">
                    <input type="checkbox" checked className="mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Customer Onboarding
                      </div>
                      <div className="text-sm text-gray-600">Marketing</div>
                    </div>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Lead Nurturing - Sales
                      </div>
                      <div className="text-sm text-gray-600">Marketing</div>
                    </div>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Email Campaign Follow-up
                      </div>
                      <div className="text-sm text-gray-600">Sales</div>
                    </div>
                  </div>
                  <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    Inactive
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">
                        New Pipeline Automation
                      </div>
                      <div className="text-sm text-gray-600">Sales</div>
                    </div>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Customer Feedback Loop
                      </div>
                      <div className="text-sm text-gray-600">
                        Customer Service
                      </div>
                    </div>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Active
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Selected 1 of 5 workflows. Your PRO subscription will allow
                monitoring of up to 100.
              </p>

              <div className="mt-6 text-center">
                <Button className="bg-workflowguard-purple hover:bg-workflowguard-purple/90">
                  Skip for now
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Manage Your Connected HubSpot Portals
            </h3>
            <p className="text-gray-600 mb-6">
              You can always review and manage your connected HubSpot accounts
              directly within WorkflowGuard's profile settings. This section
              allows you to check connection status, disconnect, or reconnect to
              HubSpot if needed.
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                HubSpot Account Connection
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Portal</span>
                  <span className="text-gray-900">Demo Portal</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Hub ID</span>
                  <span className="text-gray-900">123456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Email</span>
                  <span className="text-gray-900">demo@example.com</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">User name</span>
                  <span className="text-gray-900">Demo User</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <Button
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  Disconnect
                </Button>
                <Button
                  variant="outline"
                  className="border-workflowguard-purple text-workflowguard-purple hover:bg-workflowguard-purple hover:text-white"
                >
                  Reconnect to HubSpot
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

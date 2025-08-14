import { TrendingUp, Shield, Activity } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      number: "156",
      label: "Workflows monitored",
      description: "Active workflow monitoring",
      icon: Activity,
      color: "bg-blue-500",
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "System reliability",
      icon: Shield,
      color: "bg-green-500",
    },
    {
      number: "500",
      label: "Active automations",
      description: "Running automations",
      icon: TrendingUp,
      color: "bg-workflowguard-purple",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-workflowguard-purple uppercase tracking-wide mb-2">
            Trusted by teams
          </h2>
          <p className="text-3xl font-bold text-gray-900">
            Powering workflow reliability across organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  All systems operational
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: 2 minutes ago
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">30-day uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">156ms</div>
                <div className="text-sm text-gray-600">Avg response time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-sm text-gray-600">Issues this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

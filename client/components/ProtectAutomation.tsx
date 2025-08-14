import {
  Shield,
  BarChart3,
  AlertTriangle,
  Clock,
  CheckCircle,
  Settings,
} from "lucide-react";

export default function ProtectAutomation() {
  const features = [
    {
      icon: Shield,
      title: "Automated Workflow Control",
      description:
        "Take full control of your automation workflows. Manage, orchestrate, and monitor with precision.",
      color: "bg-workflowguard-purple",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Monitoring",
      description:
        "Get deep insights into workflow performance, success rates, and potential optimization opportunities.",
      color: "bg-workflowguard-purple",
    },
    {
      icon: AlertTriangle,
      title: "Real-time Notifications",
      description:
        "Instant alerts when workflows fail, performance degrades, or manual intervention is required.",
      color: "bg-workflowguard-purple",
    },
    {
      icon: Clock,
      title: "Workflow Analytics",
      description:
        "Track execution times, success rates, and resource usage across all your automated processes.",
      color: "bg-workflowguard-purple",
    },
    {
      icon: CheckCircle,
      title: "Issue Detection & Resolution",
      description:
        "Automatically detect workflow issues and provide guided resolution steps to minimize downtime.",
      color: "bg-workflowguard-purple",
    },
    {
      icon: Settings,
      title: "Advanced Configuration",
      description:
        "Fine-tune your workflows with advanced settings, custom rules, and intelligent optimization.",
      color: "bg-workflowguard-purple",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Protect Your Automation.
            <br />
            <span className="text-workflowguard-purple">
              Simplify Your Operations.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            WorkflowGuard provides the infrastructure to ensure your HubSpot
            workflows are always running smoothly, efficiently, and without
            interruption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-200 border border-gray-100"
            >
              <div
                className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-6`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

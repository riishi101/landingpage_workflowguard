import { AlertTriangle, History, Users } from "lucide-react";

export default function WorkflowSafety() {
  const workflowEntries = [
    {
      date: "June 29, 2025, 10:00",
      time: "AM EST",
      type: "Go-To-Market Send",
      initiator: "John Doe",
      notes: "Refreshed email content to align with Q2 campaign",
      action: "View Details",
    },
    {
      date: "June 24, 2025, 10:00",
      time: "AM EST",
      type: "Go-To-Market Send",
      initiator: "John Doe",
      notes: "Refreshed email content to align with Q2 campaign",
      action: "View Details",
    },
    {
      date: "June 20, 2025, 10:00",
      time: "AM EST",
      type: "Go-To-Market Send",
      initiator: "John Doe",
      notes: "Refreshed email content to align with Q2 campaign",
      action: "View Details",
    },
    {
      date: "June 19, 2025, 3:30",
      time: "PM EST",
      type: "Daily Backup",
      initiator: "System",
      notes: "No activity detected",
      action: "View Details",
    },
    {
      date: "June 19, 2025, 11:45",
      time: "AM EST",
      type: "Manual Snapshot",
      initiator: "Jane Smith",
      notes: "Added new welcome email sequence",
      action: "View Details",
    },
    {
      date: "June 18, 2025, 11:45",
      time: "AM EST",
      type: "Manual Snapshot",
      initiator: "Jane Smith",
      notes: "Added new welcome email sequence",
      action: "View Details",
    },
    {
      date: "June 18, 2025, 11:45",
      time: "AM EST",
      type: "Manual Snapshot",
      initiator: "Jane Smith",
      notes: "Added new welcome email sequence",
      action: "View Details",
    },
  ];

  const riskPoints = [
    {
      icon: AlertTriangle,
      title: "Broken Workflows",
      description:
        "One wrong change can break critical workflows, stopping lead generation and revenue flow instantly.",
    },
    {
      icon: History,
      title: "No Version History",
      description:
        "HubSpot doesn't track workflow changes, making it impossible to see what changed or when.",
    },
    {
      icon: Users,
      title: "Team Confusion",
      description:
        "Multiple team members making changes without coordination leads to conflicts and errors.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            HubSpot Workflows Are
            <br />
            Critical. Are They Truly Safe?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Without proper version control and monitoring, your most important
            marketing automations are vulnerable to costly mistakes and data
            loss.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/WorkflowGuard Workflow History (1).png"
              alt="WorkflowGuard Workflow History interface showing Customer Onboarding workflow with detailed version history, snapshots, and change tracking"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Risk Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {riskPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-workflowguard-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <point.icon className="h-8 w-8 text-workflowguard-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

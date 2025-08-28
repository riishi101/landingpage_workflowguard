import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Shield, AlertTriangle, BarChart3, Clock, Lock, PlayCircle, Layers, Zap, Activity, FileCheck2 } from "lucide-react";

export default function CaseStudy() {
  const snapshot = [
    { label: "Role", value: "Designer/Developer" },
    { label: "Company", value: "WorkflowGuard (HubSpot App)" },
    { label: "Duration", value: "3 weeks (concept → polish)" },
  ];

  const safetyNet = [
    {
      icon: Shield,
      title: "Automated Workflow Control",
      desc:
        "Centralized controls to pause, resume, and version workflows safely without losing work.",
      bullets: [
        "Granular enable/disable per workflow",
        "Safe staging before production rollout",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      desc:
        "Continuous checks with instant alerts before issues snowball into revenue-impacting failures.",
      bullets: [
        "Heartbeat + anomaly detection",
        "Noise‑reduced notifications",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Diagnostics",
      desc:
        "Success rates, trend lines, and anomaly detection to pinpoint weak links fast.",
      bullets: [
        "Per‑workflow success trends",
        "Root‑cause context on failures",
      ],
    },
    {
      icon: Lock,
      title: "Backups & Rollbacks",
      desc:
        "Snapshot-based backups with one-click rollback to a healthy state when needed.",
      bullets: [
        "Automatic snapshots before edits",
        "One‑click restore with diff view",
      ],
    },
  ];

  const challenges = [
    {
      title: "High Stakes, Zero Cushion",
      points: [
        "Campaigns depend on complex, chained workflows",
        "Silent failures create data drift and missed SLAs",
        "No native safety net for bulk changes",
      ],
    },
    {
      title: "Limited Observability",
      points: [
        "Sparse logs and opaque error states",
        "Hard to correlate failures across workflows",
        "Slow, manual root-cause analysis",
      ],
    },
    {
      title: "Recovery Is Risky",
      points: [
        "Backups are manual and inconsistent",
        "Rollback requires rework and guesswork",
        "Downtime impacts pipeline and revenue",
      ],
    },
  ];

  const steps = [
    {
      icon: Lock,
      title: "Seamless HubSpot Integration",
      desc: "Connect securely via OAuth—no API keys, scripts, or custom infrastructure required.",
    },
    {
      icon: Layers,
      title: "Instantaneous Discovery & Protection",
      desc: "On connect, workflows are discovered and protection is enabled with a click to guard critical automations.",
    },
    {
      icon: Zap,
      title: "Automated Backups, Zero Manual Effort",
      desc: "Real‑time versioning captures every change and enables one‑click rollback whenever needed.",
    },
  ];

  const results = [
    { value: "95%", label: "Downtime Reduction", sub: "Prevented silent failures before impact" },
    { value: "40%", label: "Efficiency Gain", sub: "Less time diagnosing and re-running flows" },
    { value: "100%", label: "Backup Coverage", sub: "Versioned snapshots of protected workflows" },
    { value: "30%", label: "Cost Savings", sub: "Lower rework and incident overhead" },
  ];

  const qualitative = [
    "Complete Peace of Mind: The constant anxiety of a broken workflow is gone. Deploy new automations confidently—any mistake can be instantly undone.",
    "Faster Troubleshooting: The audit log shows who changed what and when, and rollback provides an immediate fix.",
    "Better Outcomes: Increased efficiency and zero downtime ensure consistent lead capture, smooth sales processes, and a seamless customer journey.",
  ];

  const conclusion = [
    "One-click backups before risky changes",
    "Automated recovery paths with context",
    "Proactive security and governance",
    "Transparent analytics for leadership",
    "Operational guardrails for scale",
    "Designed for non-technical operators",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-workflowguard-purple font-medium mb-4">
              Case Study
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-workflowguard-purple">WorkflowGuard</span> — The Ultimate Safety Net
              <span className="block"> for HubSpot Workflows</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive case study showcasing how WorkflowGuard provides automated backups, real-time monitoring, and one-click rollbacks for HubSpot workflows.
            </p>
          </div>

          <div className="mt-12">
            <img
              src="/Dribbble Shot Desk - 18 (1).png"
              alt="WorkflowGuard - The ultimate safety net for hubspot workflow"
              className="w-full rounded-2xl border border-gray-200 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              {snapshot.map((s, idx) => (
                <div key={idx} className="flex items-start justify-between border-b border-gray-200 pb-4">
                  <span className="text-workflowguard-purple text-sm uppercase tracking-wide font-medium">{s.label}</span>
                  <span className="text-gray-900 font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Overview</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>WorkflowGuard is a specialized Software-as-a-Service (SaaS) application designed for teams that rely on complex automations within HubSpot. It serves as a vital safety net, providing a simple and powerful solution to a common and costly problem: the accidental modification or deletion of HubSpot workflows.</p>
                <p>In the fast-paced world of digital marketing and sales operations, automation is the lifeblood of efficiency and scale. For thousands of businesses, HubSpot workflows power everything from lead nurturing and sales sequences to data hygiene and customer onboarding. It’s a powerful tool—but its complexity and interconnected nature also represent its greatest vulnerability. WorkflowGuard neutralizes that risk with continuous backups, proactive monitoring, and one‑click rollbacks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Net Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            WorkflowGuard: Your HubSpot Workflow Safety Net
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            With challenges mounting, teams often look for a simple "undo" for HubSpot workflows—something easy to implement, always-on, and able to recover from mistakes instantly. That search leads to WorkflowGuard. It provides automated backups and version control, real-time monitoring with alerts, detailed analytics to optimize performance, and a one‑click rollback that restores a healthy version in seconds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyNet.map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg bg-workflowguard-purple/10 text-workflowguard-purple p-2">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">{f.desc}</p>
                    {f.bullets && (
                      <ul className="mt-3 space-y-2 text-gray-700">
                        {f.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-workflowguard-purple mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            The Challenge: A High‑Stakes Environment Without a Safety Net
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((c, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4 text-gray-900 font-semibold">
                  <AlertTriangle className="h-5 w-5 text-amber-600" /> {c.title}
                </div>
                <ul className="space-y-3 text-gray-700">
                  {c.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-workflowguard-purple" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            The Implementation: My Personal Solution, Deployed in Minutes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Like many HubSpot users, the pain of broken automations was the spark to build WorkflowGuard. The implementation had to be effortless, fast, and fully automated—no new chores. Connect the portal, enable protection, and the system begins capturing versions and monitoring health in the background.
          </p>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-workflowguard-purple text-white font-semibold">{i + 1}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <s.icon className="h-5 w-5 text-workflowguard-purple" />
                      <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hi‑Fi Screens (textual cards to avoid placeholders) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Hi‑Fi Screens: Purposeful & Polished
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Comprehensive Monitoring Dashboard",
                desc: "Clear status for every workflow with failure hotspots and throughput trends.",
                bullets: [
                  "KPI tiles for uptime, incidents, and queued tasks",
                  "Trend graphs with hover details",
                  "Filter by team, tag, or integration",
                ],
                image: "/Web 1440 - 2.png",
                imageAlt: "WorkflowGuard comprehensive monitoring dashboard showing workflow status and analytics"
              },
              {
                title: "One‑Click Workflow Rollbacks",
                desc: "Restore a previous snapshot with confirmation and diff preview.",
                bullets: [
                  "Snapshot list with timestamps and authors",
                  "Inline change summary",
                  "Guardrails before destructive actions",
                ],
                image: "/Web 1440 - 5.png",
                imageAlt: "Workflow rollback interface showing version control and restore options"
              },
              {
                title: "Workflow Backups Timeline",
                desc: "Automatic snapshots before edits, scheduled exports, and retention policy.",
                bullets: [
                  "Daily and on‑change snapshots",
                  "Export to secure storage",
                  "Retention window with policy badges",
                ],
                image: "/Web 1440 - 3.png",
                imageAlt: "Workflow backups timeline showing automated snapshot management"
              },
              {
                title: "Alerts & Incident Details",
                desc: "Actionable context, quick links, and suggested remediations.",
                bullets: [
                  "Root‑cause hints based on patterns",
                  "Links to impacted objects",
                  "Collaborative notes for handoffs",
                ],
                image: "/Web 1440 - 4.png",
                imageAlt: "Alerts and incident management interface with detailed context"
              },
            ].map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-200 bg-gradient-to-br from-workflowguard-purple/5 to-white p-6 md:p-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="inline-flex items-center rounded-md bg-workflowguard-purple/10 text-workflowguard-purple px-2 py-1 text-xs font-medium">Live Screenshot</div>
                    <h3 className="mt-3 text-xl font-semibold text-gray-900">{card.title}</h3>
                    <p className="mt-2 text-gray-600">{card.desc}</p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                      {card.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-workflowguard-purple mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="w-full rounded-xl border border-gray-200 shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            The Results: Quantifying Peace of Mind
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <div className="text-4xl font-bold text-workflowguard-purple">{r.value}</div>
                <div className="mt-2 font-semibold text-gray-900">{r.label}</div>
                <div className="mt-1 text-sm text-gray-600">{r.sub}</div>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-lg md:text-xl font-semibold text-gray-900">Qualitative Benefits</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualitative.map((q, i) => (
              <div key={i} className="flex items-start gap-2 rounded-lg border border-workflowguard-purple/20 bg-workflowguard-purple/5 p-4">
                <FileCheck2 className="h-5 w-5 text-workflowguard-purple" />
                <span className="text-gray-800">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Conclusion: Beyond an App, It's an Essential Partner
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                WorkflowGuard transforms how teams approach HubSpot workflow management. What started as a personal solution to prevent costly automation failures has evolved into an essential tool that provides peace of mind and operational excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The results speak for themselves: 95% downtime reduction, 40% efficiency gains, and complete backup coverage. But beyond the metrics, WorkflowGuard delivers something invaluable—the confidence to innovate and scale without fear of breaking critical automations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {conclusion.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 rounded-lg border border-workflowguard-purple/20 bg-white p-4">
                    <div className="w-2 h-2 rounded-full bg-workflowguard-purple mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

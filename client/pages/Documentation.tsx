import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
} from "lucide-react";

export default function Documentation() {
  const features = [
    {
      icon: Shield,
      title: "Automated Workflow Control",
      description:
        "Take full control of your automation workflows. Manage, orchestrate, and monitor with precision.",
      items: [
        "Real-time monitoring",
        "Automated backups",
        "Version control",
        "Alert notifications",
      ],
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description:
        "Get deep insights into workflow performance, success rates, and potential optimization opportunities.",
      items: [
        "Performance metrics",
        "Success rate tracking",
        "Optimization suggestions",
        "Custom reports",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description:
        "Continuous monitoring ensures your workflows are always running smoothly without interruption.",
      items: [
        "Continuous uptime",
        "Instant alerts",
        "Proactive monitoring",
        "System health checks",
      ],
    },
  ];

  const benefits = [
    {
      title: "Reduce Downtime",
      description:
        "Minimize workflow interruptions with proactive monitoring and instant alerts.",
      impact: "95% reduction in workflow downtime",
    },
    {
      title: "Improve Efficiency",
      description:
        "Optimize your automation processes with data-driven insights and recommendations.",
      impact: "40% increase in workflow efficiency",
    },
    {
      title: "Enhanced Security",
      description:
        "Protect your valuable workflows with enterprise-grade security and backup solutions.",
      impact: "100% data protection guarantee",
    },
    {
      title: "Cost Savings",
      description:
        "Reduce operational costs by preventing workflow failures and optimizing performance.",
      impact: "30% reduction in operational costs",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      content:
        "WorkflowGuard has been a game-changer for our marketing team. We no longer worry about workflows failing silently.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Growth Solutions",
      content:
        "The comprehensive monitoring and instant alerts have saved us countless hours. Our workflow reliability has improved by 99%.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Operations",
      company: "InnovateCorp",
      content:
        "Outstanding platform! The dashboard gives us incredible insights into our automation performance.",
      rating: 5,
    },
  ];

  const useCases = [
    {
      title: "Marketing Automation",
      description:
        "Protect your lead nurturing, email campaigns, and customer onboarding workflows.",
      features: [
        "Lead scoring",
        "Email sequences",
        "Customer journeys",
        "Campaign tracking",
      ],
    },
    {
      title: "Sales Operations",
      description:
        "Ensure your sales processes run smoothly with automated deal progression and follow-ups.",
      features: [
        "Deal automation",
        "Follow-up sequences",
        "Lead assignment",
        "Pipeline management",
      ],
    },
    {
      title: "Customer Success",
      description:
        "Maintain customer satisfaction with automated support workflows and retention campaigns.",
      features: [
        "Support tickets",
        "Onboarding flows",
        "Retention campaigns",
        "Feedback collection",
      ],
    },
  ];

  const stats = [
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      sublabel: "Enterprise reliability",
    },
    { value: "156ms", label: "Average Response", sublabel: "Lightning fast" },
    {
      value: "500+",
      label: "Protected Workflows",
      sublabel: "Across all industries",
    },
    { value: "24/7", label: "Monitoring", sublabel: "Never sleep support" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-workflowguard-purple/10 rounded-full text-workflowguard-purple text-sm font-medium mb-6">
              <span>📖 Complete Documentation</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              WorkflowGuard
              <br />
              <span className="text-workflowguard-purple">Complete Guide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Everything you need to know about protecting your HubSpot
              workflows with WorkflowGuard. From setup to advanced features,
              this comprehensive guide covers it all.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-workflowguard-purple mb-3">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make WorkflowGuard the
              essential tool for HubSpot workflow protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-14 h-14 bg-workflowguard-purple rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-700"
                    >
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how WorkflowGuard transforms your workflow management and
              delivers measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {benefit.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WorkflowGuard adapts to your specific needs across different
              departments and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-workflowguard-purple/5 to-workflowguard-purple/10 rounded-xl p-10 border border-workflowguard-purple/20"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-8">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-workflowguard-purple rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from teams using WorkflowGuard
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-8 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-workflowguard-purple rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quick Implementation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with WorkflowGuard in just a few simple steps. No
              complex setup required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-workflowguard-purple rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Connect HubSpot
              </h3>
              <p className="text-gray-600">
                Securely connect your HubSpot account with our one-click
                integration process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-workflowguard-purple rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Select Workflows
              </h3>
              <p className="text-gray-600">
                Choose which workflows you want to monitor and protect from our
                intuitive dashboard.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-workflowguard-purple rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Start Monitoring
              </h3>
              <p className="text-gray-600">
                Sit back and relax while WorkflowGuard monitors your workflows
                24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

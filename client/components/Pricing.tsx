import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, ChevronDown } from "lucide-react";

interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number;
}

const currencies: Currency[] = [
  { code: "USD", symbol: "$", name: "US Dollar", rate: 1 },
  { code: "GBP", symbol: "£", name: "Pound Sterling", rate: 0.79 },
  { code: "AUD", symbol: "$A", name: "Australian Dollar", rate: 1.53 },
  { code: "CAD", symbol: "$C", name: "Canadian Dollar", rate: 1.37 },
  { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  { code: "INR", symbol: "₹", name: "Indian Rupee", rate: 83.12 },
];

export default function Pricing() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencies[0],
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const convertPrice = (usdPrice: number): string => {
    const convertedPrice = usdPrice * selectedCurrency.rate;
    return Math.round(convertedPrice).toString();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const plans = [
    {
      name: "Starter Plan",
      usdPrice: 19,
      period: "/month",
      description: "For individuals and small teams getting started with workflow protection.",
      features: [
        "Up to 10 workflows protected",
        "Workflow selection",
        "Dashboard overview",
        "Basic version history (30 days)",
        "Manual backups only",
        "Basic rollback",
        "Simple comparison of versions",
        "Email support",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Professional Plan",
      usdPrice: 49,
      period: "/month",
      description: "For growing businesses that need comprehensive protection and history.",
      features: [
        "Up to 35 workflows protected",
        "Enhanced dashboard",
        "Complete version history (90 days)",
        "Automated backups",
        "Change notifications",
        "Advanced rollback",
        "Side-by-side version comparison",
        "Compliance reporting",
        "Audit trails",
        "Priority WhatsApp support",
      ],
      buttonText: "Start 21-Day Free Trial",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise Plan",
      usdPrice: 99,
      period: "/month",
      description: "For large organizations requiring advanced security and unlimited scale.",
      features: [
        "Unlimited workflows protected",
        "Real-time change notifications",
        "Approval workflows",
        "Advanced compliance reporting",
        "Complete audit trails",
        "Custom retention policies",
        "Advanced security features",
        "24/7 WhatsApp support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Simple pricing plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your team. Start with our free trial and
            upgrade when you're ready.
          </p>

          {/* Currency Selector */}
          <div className="flex justify-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>
                  {selectedCurrency.symbol} {selectedCurrency.name} (
                  {selectedCurrency.code})
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                        selectedCurrency.code === currency.code
                          ? "bg-workflowguard-purple/10 text-workflowguard-purple"
                          : "text-gray-700"
                      }`}
                    >
                      <div className="font-medium">
                        {currency.symbol} {currency.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {currency.code}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-workflowguard-purple text-white shadow-2xl scale-105"
                  : "bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {selectedCurrency.symbol}
                    {convertPrice(plan.usdPrice)}
                  </span>
                  <span
                    className={`text-xl ml-1 ${
                      plan.popular ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check
                      className={`h-5 w-5 mr-3 ${
                        plan.popular ? "text-white" : "text-green-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-workflowguard-purple hover:bg-gray-100"
                    : plan.buttonVariant === "outline"
                      ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                      : "bg-workflowguard-purple text-white hover:bg-workflowguard-purple/90"
                }`}
                variant={plan.popular ? "default" : plan.buttonVariant}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            The Professional plan includes a 21-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ Data encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
}

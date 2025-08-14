import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "WorkflowGuard has been a game-changer for our marketing team. We no longer worry about workflows failing silently. The real-time monitoring gives us complete peace of mind.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      avatar: "SJ",
    },
    {
      rating: 5,
      text: "The comprehensive monitoring and instant alerts have saved us countless hours. Our workflow reliability has improved by 99% since implementing WorkflowGuard.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Growth Solutions",
      avatar: "MC",
    },
    {
      rating: 5,
      text: "Outstanding platform! The dashboard gives us incredible insights into our automation performance. We can now optimize workflows before issues occur.",
      author: "Emily Rodriguez",
      role: "Marketing Operations",
      company: "InnovateCorp",
      avatar: "ER",
    },
    {
      rating: 5,
      text: "WorkflowGuard's automated backup and recovery features are phenomenal. We've never lost workflow progress since we started using it 6 months ago.",
      author: "David Park",
      role: "IT Director",
      company: "Streamline Co.",
      avatar: "DP",
    },
    {
      rating: 5,
      text: "The analytics and reporting capabilities are top-notch. We now have full visibility into our workflow performance and can make data-driven optimizations.",
      author: "Lisa Thompson",
      role: "Revenue Operations",
      company: "ScaleUp Ventures",
      avatar: "LT",
    },
    {
      rating: 5,
      text: "Integration was seamless and the support team is exceptional. WorkflowGuard has become an essential part of our HubSpot infrastructure.",
      author: "James Wilson",
      role: "Marketing Manager",
      company: "Digital Dynamics",
      avatar: "JW",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What HubSpot Users
            <br />
            <span className="text-workflowguard-purple">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of marketing teams who trust WorkflowGuard to protect
            their automation investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-workflowguard-purple rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center">{renderStars(5)}</div>
            <span className="text-gray-600 font-medium ml-2">
              4.9/5 from 500+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ffe4464dadbca415cbe1a78d74f0e913a%2Febd9c14db1b14379ba8e30c0d0d7c88c?format=webp&width=800"
                alt="WorkflowGuard Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">
                WorkflowGuard
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/blog/setup-guide"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/faq"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://app-na2.hubspot.com/oauth/authorize?client_id=5e6a6429-8317-4e2a-a9b5-46e8669f72f6&redirect_uri=https://api.workflowguard.pro/api/auth/hubspot/callback&scope=automation%20oauth"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="default"
                className="bg-workflowguard-purple hover:bg-workflowguard-purple/90 text-white px-6 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

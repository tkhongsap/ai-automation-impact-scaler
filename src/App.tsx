import React from 'react';
import { BarChart2, Zap, DollarSign, TrendingUp, Box, Users } from 'lucide-react';

const App: React.FC = () => {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
    // Add your logic here, e.g., redirect to a sign-up page
  };

  const handleBookDemo = () => {
    console.log("Book a Demo clicked");
    // Add your logic here, e.g., open a calendar for booking
  };

  const handleStartFreeTrial = () => {
    console.log("Start Your Free Trial clicked");
    // Add your logic here, e.g., redirect to a free trial sign-up page
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-4">Scale your impact, online or on Main Street.</h1>
          <p className="text-xl mb-8">Revolutionize your marketing strategy with AI-powered automation and smart profit maximization.</p>
          <div className="space-x-4">
            <button 
              className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 ease-in-out hover:bg-gray-800"
              onClick={handleGetStarted}
            >
              Get Started Free
            </button>
            <button 
              className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 ease-in-out hover:bg-gray-100"
              onClick={handleBookDemo}
            >
              Book a Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-600">No credit card required. 5,000+ brands and agencies already using our platform.</p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Powerful Features for Marketing and Pricing Optimization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-purple-600" />}
              title="AI-Powered Automation"
              description="Create high-performing, personalized campaigns at scale with intelligent automation."
            />
            <FeatureCard 
              icon={<BarChart2 className="w-8 h-8 text-purple-600" />}
              title="Performance Tracking"
              description="Make data-driven decisions with comprehensive, real-time insights across all channels."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-8 h-8 text-purple-600" />}
              title="Predictive Modeling"
              description="Reduce risk and increase confidence with AI-powered campaign performance forecasts."
            />
            <FeatureCard 
              icon={<Box className="w-8 h-8 text-purple-600" />}
              title="Multi-Channel Synergy"
              description="Create cohesive, efficient campaigns that reach customers across all relevant platforms."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-purple-600" />}
              title="Self-Service Platform"
              description="Empower your team to create sophisticated campaigns without extensive technical knowledge."
            />
            <FeatureCard 
              icon={<DollarSign className="w-8 h-8 text-purple-600" />}
              title="Smart Profit Maximization"
              description="Optimize pricing strategies in real-time to maximize revenue and profit margins."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your marketing and pricing strategy?</h2>
          <p className="text-xl mb-8">Join thousands of successful brands and agencies today.</p>
          <button 
            className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-bold transition-colors duration-200 ease-in-out hover:bg-gray-100"
            onClick={handleStartFreeTrial}
          >
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-200 ease-in-out hover:scale-105">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-4">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;
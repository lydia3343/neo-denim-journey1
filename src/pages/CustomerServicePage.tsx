import { motion } from 'framer-motion';
import DigitalCustomerService from '../components/DigitalCustomerService';

const CustomerServicePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="container mx-auto px-6 py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Digital Customer Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Welcome to our digital customer service center. We're here to help you with any questions about our products, services, or general inquiries.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">How can we help you?</h2>
            <ul className="space-y-3">
              <li>• Product information and specifications</li>
              <li>• Order status and shipping inquiries</li>
              <li>• Technical support and troubleshooting</li>
              <li>• Returns and warranty information</li>
              <li>• General questions about our services</li>
            </ul>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Start a Conversation</h2>
            <p className="mb-4">
              Our AI-powered digital assistant is available 24/7 to help you. Click the chat button in the bottom right corner to start a conversation.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              For urgent matters or if you prefer human assistance, please contact our support team at support@neoloom.com
            </p>
          </div>
        </div>
      </div>

      {/* The DigitalCustomerService component will be rendered here */}
      <DigitalCustomerService />
    </motion.div>
  );
};

export default CustomerServicePage; 
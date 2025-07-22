import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface ContactDialogProps {
  onClose?: () => void;
}

export default function ContactDialog({ onClose }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    service: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const resetForm = () => {
    setFormData({ name: '', email: '', project: '', service: '', budget: '' });
    setFormErrors({});
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.project) errors.project = 'Project description is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.ok && responseData.success) {
        setSubmitSuccess(true);
        resetForm();
      } else {
        setSubmitError(responseData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    resetForm();
    setSubmitSuccess(false);
    setSubmitError('');
    setIsSubmitting(false);
    if (onClose) onClose();
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold leading-tight">Contact us</h3>
      </div>
      {submitSuccess ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-2xl font-semibold leading-snug mb-3">Thank you for your inquiry!</h4>
          <p className="text-base text-muted-foreground mb-8">We will get back to you ASAP.</p>
          <div className="space-y-4 mb-8">
            <div className="bg-background border border-border rounded-lg p-5">
              <p className="text-sm text-muted-foreground mb-2">Email us for more details or questions:</p>
              <a 
                href="mailto:christianthodesign@gmail.com"
                className="text-[#6017EA] hover:text-[#4F14B8] font-medium text-sm"
              >
                christianthodesign@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <a
              href="/book"
              className="bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-colors text-base"
            >
              Book a Call
            </a>
            <button
              onClick={handleClose}
              className="bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-colors text-base"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium leading-6 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your name"
                className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors focus:outline-none text-base leading-6 font-normal ${
                  formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-[#6017EA]'
                }`}
              />
              {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Your email"
                className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors focus:outline-none text-base leading-6 font-normal ${
                  formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-[#6017EA]'
                }`}
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 mb-2">Tell me about your project</label>
            <textarea
              required
              value={formData.project}
              onChange={(e) => setFormData({...formData, project: e.target.value})}
              placeholder="Tell me about your project..."
              rows={4}
              className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors resize-none focus:outline-none text-base leading-6 font-normal ${
                formErrors.project ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-[#6017EA]'
              }`}
            />
            {formErrors.project && <p className="text-red-500 text-xs mt-1">{formErrors.project}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 mb-2">How can I help you?</label>
            <div className="grid grid-cols-2 gap-3">
              {['DESIGN', 'DEVELOPMENT', 'BRANDING', 'PRODUCT DESIGN'].map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setFormData({...formData, service})}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    formData.service === service 
                      ? 'bg-[#6017EA] text-white' 
                      : 'bg-muted text-foreground hover:bg-[#6017EA]/10'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 mb-2">Budget (optional)</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-[#6017EA] transition-colors focus:outline-none text-base leading-6 font-normal"
            >
              <option value="">Select a budget</option>
              <option value="Under $1,000">Under $1,000</option>
              <option value="$1,000 - $3,000">$1,000 - $3,000</option>
              <option value="$3,000 - $5,000">$3,000 - $5,000</option>
            </select>
          </div>
          {submitError && <p className="text-red-500 text-sm text-center mt-2">{submitError}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-60 text-base"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
}
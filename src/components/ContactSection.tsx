import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { SiteConfig } from '../config/siteConfig';

interface ContactSectionProps {
  config: SiteConfig;
  preselectedService?: string;
}

interface FormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectType: string;
  location: string;
  estimatedBudget: string;
  projectDetails: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  projectType?: string;
  location?: string;
  estimatedBudget?: string;
  projectDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectType: 'Residential Interior',
    location: '',
    estimatedBudget: '₹5–10 lakh',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<FormState | null>(null);
  const [inquiryId, setInquiryId] = useState('');

  // When a service or project enquiry is triggered from another component
  useEffect(() => {
    if (preselectedService) {
      if (preselectedService.toLowerCase().includes('kitchen')) {
        setFormData((prev) => ({ ...prev, projectType: 'Modular Kitchen' }));
      } else if (preselectedService.toLowerCase().includes('commercial') || preselectedService.toLowerCase().includes('workplace')) {
        setFormData((prev) => ({ ...prev, projectType: 'Commercial Interior' }));
      } else if (preselectedService.toLowerCase().includes('styling') || preselectedService.toLowerCase().includes('renovation')) {
        setFormData((prev) => ({ ...prev, projectType: 'Renovation' }));
      } else {
        setFormData((prev) => ({ ...prev, projectType: 'Residential Interior' }));
      }
      setFormData((prev) => ({
        ...prev,
        projectDetails: `Inquiry regarding: ${preselectedService}. `,
      }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name';
    }

    const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      newErrors.phoneNumber = 'Please enter a valid phone number (8–15 digits)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please state your city or project location';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please share a brief note about your space';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide a little more detail (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = `LX-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryId(generatedId);
      setSubmittedSummary({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedSummary(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      projectType: 'Residential Interior',
      location: '',
      estimatedBudget: '₹5–10 lakh',
      projectDetails: '',
    });
    setErrors({});
  };

  const constructWhatsAppUrl = (data?: FormState) => {
    const text = data
      ? `Hello ${config.brandName}, I submitted an enquiry (Ref: ${inquiryId}):%0AName: ${encodeURIComponent(
          data.fullName
        )}%0AProject: ${encodeURIComponent(data.projectType)}%0ALocation: ${encodeURIComponent(
          data.location
        )}%0ABudget: ${encodeURIComponent(data.estimatedBudget)}%0ADetails: ${encodeURIComponent(
          data.projectDetails
        )}`
      : `Hello, I am interested in your interior design services. I would like to discuss my project.`;

    return `https://wa.me/${config.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F7F4EE] border-b border-[#E8DFD2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#777A67] mb-3">
                <span className="w-6 h-px bg-[#B69A69]" />
                <span>START A DIALOGUE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#22221F] tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
                Let's Create <br />
                <span className="italic font-normal">Something Beautiful.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#22221F]/80 font-light leading-relaxed mb-10 max-w-md">
                Tell us about your space, your ideas, and what you would love to create. We review every enquiry with deliberate care.
              </p>

              {/* Direct Channels */}
              <div className="space-y-6 pt-6 border-t border-[#E8DFD2]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#E8DFD2] bg-white flex items-center justify-center text-[#B69A69] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#777A67] block">
                      Direct Studio Line
                    </span>
                    <a
                      href={`tel:${config.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-medium text-[#22221F] hover:text-[#B69A69] transition-colors"
                    >
                      {config.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#E8DFD2] bg-white flex items-center justify-center text-[#B69A69] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#777A67] block">
                      Design Enquiries
                    </span>
                    <a
                      href={`mailto:${config.email}`}
                      className="text-sm font-medium text-[#22221F] hover:text-[#B69A69] transition-colors"
                    >
                      {config.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#E8DFD2] bg-white flex items-center justify-center text-[#B69A69] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#777A67] block">
                      Studio Presence
                    </span>
                    <p className="text-sm font-medium text-[#22221F]">
                      {config.location}
                    </p>
                    <p className="text-xs text-[#777A67] mt-0.5">
                      {config.serviceAreas}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Option Card */}
            <div className="mt-10 p-6 bg-[#E8DFD2]/40 border border-[#E8DFD2]">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>Prefer Instant WhatsApp?</span>
              </div>
              <p className="text-xs text-[#22221F]/70 font-light mb-4">
                Send your floor plan, photos, or query directly to our design principal on WhatsApp.
              </p>
              <a
                href={constructWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle size={15} />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Working Enquiry Form / Success State */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#E8DFD2] shadow-sm">
            {isSubmitted && submittedSummary ? (
              <div className="py-8 flex flex-col items-center text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#E8DFD2]/60 flex items-center justify-center text-[#B69A69] mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#777A67] block mb-1">
                  ENQUIRY CONFIRMATION · REF {inquiryId}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#22221F] mb-4">
                  Thank You, {submittedSummary.fullName}
                </h3>
                <p className="text-sm text-[#22221F]/80 font-light max-w-md mb-8 leading-relaxed">
                  Your project consultation request for a <strong>{submittedSummary.projectType}</strong> in <strong>{submittedSummary.location}</strong> has been received by our lead interior architect.
                </p>

                {/* Summary Box */}
                <div className="w-full text-left bg-[#F7F4EE] border border-[#E8DFD2] p-6 mb-8 text-xs space-y-2">
                  <div className="flex justify-between border-b border-[#E8DFD2] pb-2">
                    <span className="text-[#777A67]">Client Contact:</span>
                    <span className="font-medium text-[#22221F]">{submittedSummary.phoneNumber} · {submittedSummary.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DFD2] pb-2">
                    <span className="text-[#777A67]">Budget Tier:</span>
                    <span className="font-medium text-[#22221F]">{submittedSummary.estimatedBudget}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-[#777A67] block mb-1">Brief:</span>
                    <span className="font-light italic text-[#22221F]">{submittedSummary.projectDetails}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a
                    href={constructWhatsAppUrl(submittedSummary)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>SYNC TO WHATSAPP</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3.5 border border-[#22221F] text-[#22221F] text-xs uppercase tracking-wider font-semibold hover:bg-[#22221F] hover:text-white transition-colors cursor-pointer"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#22221F] mb-1">
                    Project Consultation Request
                  </h3>
                  <p className="text-xs text-[#777A67]">
                    Please share your requirements to schedule a bespoke consultation session.
                  </p>
                </div>

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Radhika Singhania"
                      className={`w-full px-4 py-3 bg-[#F7F4EE] border text-sm text-[#22221F] focus:outline-none focus:border-[#B69A69] transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-[#E8DFD2]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. +91 98200 12345"
                      className={`w-full px-4 py-3 bg-[#F7F4EE] border text-sm text-[#22221F] focus:outline-none focus:border-[#B69A69] transition-colors ${
                        errors.phoneNumber ? 'border-red-500' : 'border-[#E8DFD2]'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                {/* Email Address & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. radhika@example.com"
                      className={`w-full px-4 py-3 bg-[#F7F4EE] border text-sm text-[#22221F] focus:outline-none focus:border-[#B69A69] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#E8DFD2]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                      Location / City *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Bandra West, Mumbai"
                      className={`w-full px-4 py-3 bg-[#F7F4EE] border text-sm text-[#22221F] focus:outline-none focus:border-[#B69A69] transition-colors ${
                        errors.location ? 'border-red-500' : 'border-[#E8DFD2]'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>
                    )}
                  </div>
                </div>

                {/* Project Type & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EE] border border-[#E8DFD2] text-sm text-[#22221F] focus:outline-none focus:border-[#B69A69] transition-colors cursor-pointer"
                    >
                      <option value="Residential Interior">Residential Interior</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Commercial Interior">Commercial Interior</option>
                      <option value="Renovation">Renovation & Styling</option>
                      <option value="Other">Other Bespoke Space</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                      Estimated Budget *
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EE] border border-[#E8DFD2] text-sm text-[#22221F] focus:outline-none focus:border-[#B69A69] transition-colors cursor-pointer"
                    >
                      <option value="Under ₹2 lakh">Under ₹2 lakh</option>
                      <option value="₹2–5 lakh">₹2–5 lakh</option>
                      <option value="₹5–10 lakh">₹5–10 lakh</option>
                      <option value="₹10–20 lakh">₹10–20 lakh</option>
                      <option value="₹20 lakh+">₹20 lakh+</option>
                      <option value="Not Decided">Not Decided</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#22221F] font-semibold mb-2">
                    Project Details & Scope *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell us about the property, current state, key requirements, floor plan status, and preferred timeline..."
                    className={`w-full px-4 py-3 bg-[#F7F4EE] border text-sm text-[#22221F] focus:outline-none focus:border-[#B69A69] transition-colors ${
                      errors.projectDetails ? 'border-red-500' : 'border-[#E8DFD2]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.projectDetails}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#22221F] text-[#F7F4EE] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#B69A69] transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-sm"
                >
                  <span>SUBMIT CONSULTATION REQUEST</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

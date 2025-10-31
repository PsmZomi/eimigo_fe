import React, { useEffect } from "react";
import { ShieldCheck, FileText, HelpCircle } from "lucide-react";

const HelpCenter = () => {
  // 👇 Scroll smoothly when hash changes (e.g., /help#faq)
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; // Adjust for fixed navbar height if needed
          const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: yPosition, behavior: "smooth" });
        }
      }
    };

    handleHashChange(); // Scroll on load
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const faqs = [
    {
      q: "How can I track my order?",
      a: "Once your order ships, you’ll receive an email with a tracking link. You can also log into your Eimigo account to check your order status anytime."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major debit/credit cards, UPI, and wallet payments like Paytm and Google Pay."
    },
    {
      q: "Can I change my order after placing it?",
      a: "If your order hasn’t been shipped yet, contact us at support@eimigo.com and we’ll help you make changes."
    },
    {
      q: "Do you ship internationally?",
      a: "Currently, we ship across India. We’ll be expanding to other regions soon."
    }
  ];

  return (
    <section className="bg-white text-gray-800 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* 🧭 HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Help Center</h1>
          <p className="text-gray-600 mb-6">
            Everything you need to know — from FAQs to policies, all in one place.
          </p>

          {/* Sticky mini nav */}
          <div className="flex justify-center gap-6 text-sm font-medium text-gray-700">
            <a href="#faq" className="hover:text-black transition">FAQ</a>
            <a href="#privacy" className="hover:text-black transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-black transition">Terms of Service</a>
          </div>
        </div>

        {/* 💬 FAQ SECTION */}
        <div id="faq" className="scroll-mt-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            {faqs.map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-200"></div>

        {/* 🔒 PRIVACY POLICY */}
        <div id="privacy" className="scroll-mt-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-semibold">Privacy Policy</h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Your privacy matters to us. We collect personal details such as your name,
              email, and address only to fulfill your orders and improve your experience.
            </p>
            <p>
              We use secure encryption and never sell or share your data with third parties
              except for essential services like shipping or payment.
            </p>
            <p>
              You can request access or deletion of your data anytime at{" "}
              <a href="mailto:support@eimigo.com" className="underline text-black font-medium">
                support@eimigo.com
              </a>.
            </p>
            <p className="text-sm text-gray-500">Last updated: October 2025</p>
          </div>
        </div>

        <div className="h-px bg-gray-200"></div>

        {/* ⚖️ TERMS OF SERVICE */}
        <div id="terms" className="scroll-mt-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-black" />
            <h2 className="text-3xl font-semibold">Terms of Service</h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              By using Eimigo’s website, you agree to comply with our terms. We strive to
              maintain accurate product details but reserve the right to update prices,
              availability, and offers anytime.
            </p>
            <p>
              Payments are securely processed via trusted gateways. Please refer to our{" "}
              <a href="/shipping-returns" className="underline text-black font-medium">
                Shipping & Returns
              </a>{" "}
              policy for refunds or exchanges.
            </p>
            <p>
              All Eimigo content, including product designs, text, and media, are
              copyrighted and owned by Eimigo. Unauthorized use is prohibited.
            </p>
            <p className="text-sm text-gray-500">Last updated: October 2025</p>
          </div>
        </div>

        <div className="h-px bg-gray-200"></div>

        {/* 📦 LINK TO SHIPPING RETURNS */}
        <div className="text-center mt-8">
          <p className="text-gray-700">
            Looking for delivery info? Visit our{" "}
            <a href="/shipping-returns" className="underline font-medium text-black">
              Shipping & Returns
            </a>{" "}
            page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;

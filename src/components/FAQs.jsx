import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is the difference between landing pages and product pages?",
    a: "Landing pages focus on conversion while product pages provide detailed product information."
  },
  {
    q: "What if I have 100 products and want custom treatment for all of them?",
    a: "We prioritize high-performing products and create scalable templates."
  },
  {
    q: "Do you work with platforms other than Shopify?",
    a: "Our main focus is Shopify but we can advise for other platforms."
  },
  {
    q: "How will these landing pages work better than my current pages?",
    a: "We focus on CRO, UX, and performance data."
  },
  {
    q: "Will my website have both the landing page and the product page?",
    a: "Yes, both serve different purposes in the funnel."
  },
  {
    q: "Will you create my entire website if asked?",
    a: "Yes, we can design and build the entire store."
  },
  {
    q: "What increase in the conversion rate should I expect?",
    a: "It depends on traffic quality and existing performance."
  },
  {
    q: "Are you the right strategists for my brand?",
    a: "If you care about CRO and growth, we are a great fit."
  }
];

const FAQs = () => {
  return (
    <section className="bg-white py-10 sm:py-20 px-6 md:px-8 lg:px-16">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-12">
        <span className="inline-flex items-center px-5 py-[7px] rounded-full border border-[#1515151A] text-[10px] text-[#151515] mb-6">
          FAQs
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
          Frequently Asked
          <span className="text-[#F38400]"> Questions</span>
        </h2>
      </div>

      {/* Accordion */}
      <Accordion.Root
        type="single"
        collapsible
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16"
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border-t border-[#1515151A] py-5 last:border-b md:last:border-b-0"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-start justify-between text-left text-sm font-medium text-[#333333] cursor-pointer gap-4">
                <span>{faq.q}</span>
                <Plus className="w-4 h-4 shrink-0 mt-0.5 transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="overflow-hidden data-[state=open]:animate-none text-sm text-gray-500 mt-3 leading-relaxed pr-8">
              {faq.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

    </section>
  );
};

export default FAQs;
const FAQ = () => {
  const faqData = [
    {
      id: "item-1",
      question: "What documents are required to renew my vehicle papers?",
      answer:
        "Typically, you need your current vehicle papers, a valid ID, and proof of insurance. We'll guide you step-by-step.",
    },
    {
      id: "item-2",
      question: "How long does the renewal process take?",
      answer:
        "In most cases, the renewal process can be completed within 24–48 hours, depending on verification requirements.",
    },
    {
      id: "item-3",
      question: "Can I renew my papers online?",
      answer:
        "Yes, our platform supports secure online renewals. You can upload your documents and complete payment digitally.",
    },
    {
      id: "item-4",
      question: "Do I need to visit your office?",
      answer:
        "Not always. Many renewals can be done entirely online, but some cases may require physical verification.",
    },
    {
      id: "item-5",
      question: "What payment methods are accepted?",
      answer:
        "We accept bank transfers, debit/credit cards, and verified digital wallets.",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full items-center gap-10 lg:gap-16 px-4 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24 relative">
      {/* FAQ Card */}
      <div className="w-full lg:w-1/2 relative flex justify-center">
        <img
          className="max-h-[500px] w-auto object-contain -rotate-[2.89deg]"
          alt="FAQ card"
          src="/faq-card.png"
        />
      </div>

      {/* FAQ List */}
      <div className="flex lg:w-1/2 w-full flex-col md:p-4 max-w-2xl gap-2 lg:gap-8">
        {faqData.map((faq) => (
          <div key={faq.id} className="border-b border-border pb-6">
            <h3 className="text-[16px] font-bold text-foreground mb-2">
              {faq.question}
            </h3>
            <p className="text-[16px] font-normal text-muted-foreground">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

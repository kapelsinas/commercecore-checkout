interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface BenefitItemProps {
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    title: '90-Day Money Back Guarantee',
    description:
      "We love our products and we're confident you will too! If you're not in love with your LogoIpsum product, our easy return and refund policy is designed to make things as easy as possible for you.",
    icon: '/order-summary/cashback.svg',
  },
  {
    title: 'Over 75,000+ Happy Customers',
    description:
      'Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care into making our products, so you can enjoy seeing results when using it.',
    icon: '/order-summary/rating.svg',
  },
  {
    title: 'Professional Customer Support',
    description:
      'Our customer service works 24/7 for your satisfaction. Feel free to reach out to us anytime.',
    icon: '/order-summary/customer_service.svg',
  },
];

const BenefitItem = ({ title, description, icon }: BenefitItemProps) => {
  return (
    <div className="flex items-top gap-4">
      <div>
        <img src={icon} alt={title} className="min-w-8 min-h-8" />
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-xs-body font-bold text-[#333333]">{title}</h5>
        <p className="text-xs-body text-[#5C5C5C]">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="flex flex-col gap-4 p-4 pb-6 lg:p-0">
      <div className="flex items-center w-full text-cente gap-4">
        <div className="flex-grow border-t border-[#E0E0E0]"></div>
        <span className="text-[#333333] text-small-body">Why Choose LogoIpsum</span>
        <div className="flex-grow border-t border-[#E0E0E0]"></div>
      </div>
      <div className="flex flex-col gap-4">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;

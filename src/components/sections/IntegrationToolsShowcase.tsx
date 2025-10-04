"use client";

import Image from "next/image";

interface LogoItem {
  name: string;
  domain: string;
  fallback: string;
}

const communicationTools: LogoItem[] = [
  { name: "Slack", domain: "slack.com", fallback: "Slack" },
  { name: "Microsoft Teams", domain: "microsoft.com", fallback: "Teams" },
  { name: "Zoom", domain: "zoom.us", fallback: "Zoom" },
  { name: "Workable", domain: "workable.com", fallback: "Workable" },
  { name: "Greenhouse", domain: "greenhouse.io", fallback: "Greenhouse" },
  { name: "Lever", domain: "lever.co", fallback: "Lever" },
  { name: "Indeed", domain: "indeed.com", fallback: "Indeed" },
  { name: "WhatsApp", domain: "whatsapp.com", fallback: "WhatsApp" },
  { name: "Basecamp", domain: "basecamp.com", fallback: "Basecamp" },
  { name: "Jira", domain: "atlassian.com", fallback: "Jira" },
  { name: "ClickUp", domain: "clickup.com", fallback: "ClickUp" },
];

const businessTools: LogoItem[] = [
  { name: "Workday", domain: "workday.com", fallback: "Workday" },
  { name: "Salesforce", domain: "salesforce.com", fallback: "Salesforce" },
  { name: "BambooHR", domain: "bamboohr.com", fallback: "BambooHR" },
  { name: "UKG", domain: "ukg.com", fallback: "UKG" },
  { name: "HireVue", domain: "hirevue.com", fallback: "HireVue" },
  { name: "HackerRank", domain: "hackerrank.com", fallback: "HackerRank" },
  { name: "Calendly", domain: "calendly.com", fallback: "Calendly" },
  { name: "Checkr", domain: "checkr.com", fallback: "Checkr" },
  { name: "Stripe", domain: "stripe.com", fallback: "Stripe" },
  { name: "Mailchimp", domain: "mailchimp.com", fallback: "Mailchimp" },
  { name: "SAP SuccessFactors", domain: "sap.com", fallback: "SAP" },
  { name: "Dropbox", domain: "dropbox.com", fallback: "Dropbox" },
  { name: "Glassdoor", domain: "glassdoor.com", fallback: "Glassdoor" },
  { name: "Recruitee", domain: "recruitee.com", fallback: "Recruitee" },
];

function LogoItem({ item }: { item: LogoItem }) {
  return (
    <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200/60 flex items-center justify-center p-2.5 group hover:shadow-sm transition-all duration-200">
      <Image
        src={`https://logo.clearbit.com/${item.domain}`}
        alt={item.name}
        width={56}
        height={56}
        className="w-full h-full object-contain"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span className="text-xs font-bold text-gray-600">${item.fallback}</span>`;
          }
        }}
      />
    </div>
  );
}

function LogoRow({ logos, animationClass }: { logos: LogoItem[]; animationClass: string }) {
  return (
    <div className={`flex ${animationClass}`}>
      <div className="flex space-x-8 items-center shrink-0 min-w-max px-4">
        {logos.map((logo) => (
          <LogoItem key={logo.domain} item={logo} />
        ))}
      </div>
      {/* Duplicate set for seamless scrolling */}
      <div className="flex space-x-8 items-center shrink-0 min-w-max px-4">
        {logos.map((logo) => (
          <LogoItem key={`${logo.domain}-duplicate`} item={logo} />
        ))}
      </div>
    </div>
  );
}

export function IntegrationToolsShowcase() {
  return (
    <section className="py-16">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-slate-100 border border-slate-200">
            <span className="text-sm font-medium text-slate-600">300+ Integrations</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Plug AI into your own data
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Connect with your favorite tools and platforms. Our AI seamlessly integrates with your existing workflow.
          </p>
        </div>

        {/* Two-Row Integration Carousel */}
        <div className="relative overflow-hidden">
          {/* Row 1: Communication & Collaboration Tools */}
          <div className="mb-6">
            <LogoRow logos={communicationTools} animationClass="animate-scroll" />
          </div>

          {/* Row 2: Business & Productivity Tools */}
          <div>
            <LogoRow logos={businessTools} animationClass="animate-scroll-reverse" />
          </div>
        </div>

        {/* Browse All Integrations Button */}
        <div className="mt-12 text-center">
          <a
            href="/integrations"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-900 font-medium rounded-lg transition-colors duration-200 border border-slate-200 shadow-sm hover:shadow"
          >
            Browse all integrations
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

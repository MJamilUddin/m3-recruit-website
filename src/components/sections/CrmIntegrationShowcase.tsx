"use client";

import Image from "next/image";

interface CrmLogoItem {
  name: string;
  domain: string;
  fallback: string;
}

const crmLogos: CrmLogoItem[] = [
  { name: "Greenhouse", domain: "greenhouse.io", fallback: "Greenhouse" },
  { name: "Bullhorn", domain: "bullhorn.com", fallback: "Bullhorn" },
  { name: "Workday", domain: "workday.com", fallback: "Workday" },
  { name: "Jobvite", domain: "jobvite.com", fallback: "Jobvite" },
  { name: "Ashby", domain: "ashbyhq.com", fallback: "Ashby" },
  { name: "JazzHR", domain: "jazzhr.com", fallback: "JazzHR" },
  { name: "Workable", domain: "workable.com", fallback: "Workable" },
  { name: "BambooHR", domain: "bamboohr.com", fallback: "BambooHR" },
  { name: "Lever", domain: "lever.co", fallback: "Lever" },
  { name: "iCIMS", domain: "icims.com", fallback: "iCIMS" },
  { name: "Recruiterflow", domain: "recruiterflow.com", fallback: "Recruiterflow" },
  { name: "Teamtailor", domain: "teamtailor.com", fallback: "Teamtailor" },
  { name: "SmartRecruiters", domain: "smartrecruiters.com", fallback: "SmartRecruiters" },
  { name: "Vincere", domain: "vincere.io", fallback: "Vincere" },
  { name: "BreezyHR", domain: "breezyhr.com", fallback: "BreezyHR" },
  { name: "Zoho Recruit", domain: "zoho.com", fallback: "Zoho Recruit" },
];

function CrmLogoItem({ item }: { item: CrmLogoItem }) {
  return (
    <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
      <Image
        src={`https://logo.clearbit.com/${item.domain}`}
        alt={item.name}
        width={64}
        height={64}
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

export function CrmIntegrationShowcase() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Works with Any CRM</h2>
          <p className="text-gray-600">Seamlessly integrate with your existing ATS and CRM systems</p>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            <div className="flex space-x-8 items-center shrink-0">
              {crmLogos.map((logo) => (
                <CrmLogoItem key={logo.domain} item={logo} />
              ))}
            </div>

            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-8 items-center shrink-0">
              {crmLogos.map((logo) => (
                <CrmLogoItem key={`${logo.domain}-duplicate`} item={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CheckCircle, Zap, Users, Building, Star, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Solo',
      description: 'Perfect for individual recruiters and small agencies',
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      price: billingCycle === 'monthly' ? '£50' : '£500',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      features: [
        'Up to 50 candidate profiles',
        'Basic workflow automation',
        'Email integration',
        '5 CRM integrations',
        'Basic analytics',
        'Email support',
        '1 user account'
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Team',
      description: 'Ideal for growing recruitment teams',
      icon: <Users className="w-8 h-8 text-green-600" />,
      price: billingCycle === 'monthly' ? '£100' : '£1,000',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      features: [
        'Up to 500 candidate profiles',
        'Advanced workflow automation',
        'All email integrations',
        'Unlimited CRM integrations',
        'Advanced analytics & reporting',
        'Priority support',
        'Up to 10 user accounts',
        'Custom workflows',
        'API access'
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'default' as const,
      popular: false
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      icon: <Building className="w-8 h-8 text-purple-600" />,
      price: 'Custom',
      period: '',
      features: [
        'Unlimited candidate profiles',
        'Enterprise workflow automation',
        'All integrations + custom',
        'White-label solution',
        'Dedicated success manager',
        'Phone & email support',
        'Unlimited user accounts',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'default' as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-blue-600 block">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your recruitment needs. Start with our free trial and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 border border-gray-200 mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="absolute -top-4 -right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-md">
                Save 17%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-blue-500 shadow-blue-100 scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon}
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    {billingCycle === 'yearly' && plan.price !== 'Custom' && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        Save £{plan.name === 'Solo' ? '100' : '200'} per year
                      </p>
                    )}
                  </div>

                  <Link href="/contact" className="block">
                    <Button
                      className={`w-full mb-8 ${plan.popular ? '' : plan.name === 'Enterprise' ? 'bg-purple-600 text-white' : ''}`}
                      variant={plan.buttonVariant}
                      size="lg"
                    >
                      {plan.buttonText}
                      {plan.buttonText !== 'Contact Sales' && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                  </Link>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-4">What&apos;s included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes! All plans come with a 14-day free trial. No credit card required to get started.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">Absolutely. You can cancel your subscription at any time with no cancellation fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Recruitment Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of recruiters who have streamlined their workflow with M3 Recruit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-blue-600">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Search, Filter, Download, Eye, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50/30 via-white to-purple-50/20">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-800 to-blue-700 bg-clip-text text-transparent"> Modern Recruitment</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover how M3 Recruit&apos;s advanced features streamline your entire recruitment process from candidate sourcing to final placement.
            </p>
          </div>
        </div>
      </section>

      {/* Input Fields Section */}
      <section className="py-20">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Smart Input & Data Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Configure your recruitment workflows with intelligent input fields that capture exactly what you need.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Job Requirements Input */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Settings className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Job Requirements Input</CardTitle>
                </div>
                <CardDescription>
                  Define detailed job specifications with our intelligent form builder
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Title</label>
                  <Input placeholder="Senior Software Engineer" className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Required Skills</label>
                  <Textarea
                    placeholder="React, Node.js, TypeScript, AWS, PostgreSQL..."
                    className="bg-gray-50 min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Experience Level</label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Junior</Button>
                    <Button variant="outline" size="sm" className="bg-purple-100 text-purple-700">Mid-Level</Button>
                    <Button variant="outline" size="sm">Senior</Button>
                    <Button variant="outline" size="sm">Lead</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Salary Range</label>
                  <div className="flex gap-2">
                    <Input placeholder="$80,000" className="bg-gray-50" />
                    <span className="flex items-center text-muted-foreground">-</span>
                    <Input placeholder="$120,000" className="bg-gray-50" />
                  </div>
                </div>
                <Button className="w-full bg-purple-800 hover:bg-purple-900">
                  Save Job Requirements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Candidate Search Filters */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <Filter className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Advanced Search Filters</CardTitle>
                </div>
                <CardDescription>
                  Find the perfect candidates with precision filtering
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Keywords</label>
                  <Input placeholder="React developer, full-stack engineer..." className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input placeholder="San Francisco, CA or Remote" className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Experience (Years)</label>
                  <div className="flex gap-2">
                    <Input placeholder="3" className="bg-gray-50" />
                    <span className="flex items-center text-muted-foreground">-</span>
                    <Input placeholder="8" className="bg-gray-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Skills Match</label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Exact Match</Button>
                    <Button variant="outline" size="sm" className="bg-purple-100 text-purple-700">75% Match</Button>
                    <Button variant="outline" size="sm">Any Skill</Button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-purple-800 hover:bg-purple-900">
                    <Search className="mr-2 h-4 w-4" />
                    Search Candidates
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Output & Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Intelligent Output & Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Get actionable insights and beautifully formatted results from your recruitment data.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Candidate Matches */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Candidate Match Results</CardTitle>
                </div>
                <CardDescription>
                  AI-powered candidate matching with detailed scoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Candidate Card 1 */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <Badge className="bg-emerald-100 text-emerald-700">98% Match</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Senior React Developer • San Francisco, CA</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <Badge variant="outline" className="text-xs">React</Badge>
                      <Badge variant="outline" className="text-xs">TypeScript</Badge>
                      <Badge variant="outline" className="text-xs">Node.js</Badge>
                      <Badge variant="outline" className="text-xs">AWS</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-purple-800 hover:bg-purple-900">
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline">
                        Schedule Interview
                      </Button>
                    </div>
                  </div>

                  {/* Candidate Card 2 */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Michael Chen</h4>
                      <Badge className="bg-blue-100 text-blue-700">87% Match</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Full Stack Engineer • Remote</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <Badge variant="outline" className="text-xs">React</Badge>
                      <Badge variant="outline" className="text-xs">Python</Badge>
                      <Badge variant="outline" className="text-xs">Django</Badge>
                      <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-purple-800 hover:bg-purple-900">
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline">
                        Schedule Interview
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Dashboard */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Recruitment Analytics</CardTitle>
                </div>
                <CardDescription>
                  Comprehensive insights into your hiring pipeline
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Metric Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-700">142</div>
                      <div className="text-sm text-purple-600">Candidates Processed</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-700">12</div>
                      <div className="text-sm text-blue-600">Interviews Scheduled</div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4">
                      <div className="text-2xl font-bold text-emerald-700">3</div>
                      <div className="text-sm text-emerald-600">Offers Extended</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4">
                      <div className="text-2xl font-bold text-amber-700">8.5</div>
                      <div className="text-sm text-amber-600">Avg. Days to Hire</div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-purple-800 hover:bg-purple-900">
                      Export Report
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your free trial and see how M3 Recruit can transform your recruitment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 bg-purple-800 hover:bg-purple-900">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 border-purple-600 text-purple-600 hover:bg-purple-50">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

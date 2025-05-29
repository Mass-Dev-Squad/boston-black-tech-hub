
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Calendar, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const organizations = [
    {
      name: "Boston While Black (BWB)",
      description: "A prominent membership network for Black professionals, entrepreneurs, and students in Boston.",
      focus: "Community Building"
    },
    {
      name: "Blacks In Technology (BIT)",
      description: "New England chapter increasing Black representation in the tech industry.",
      focus: "Tech Representation"
    },
    {
      name: "NSBE Boston Professionals",
      description: "Supporting academic and professional success of Black engineering professionals.",
      focus: "Engineering Excellence"
    },
    {
      name: "Black Economic Council of MA",
      description: "Building Black wealth by supporting Black-owned businesses and removing barriers.",
      focus: "Economic Empowerment"
    }
  ];

  const events = [
    {
      title: "How To Boston While Black Summit",
      description: "Annual summit empowering Black professionals in tech and life sciences",
      date: "Coming Soon",
      type: "Annual Conference"
    },
    {
      title: "Mass Black Expo",
      description: "Networking and career advancement for Black-owned businesses",
      date: "Quarterly",
      type: "Business Expo"
    },
    {
      title: "Black Tech Weekend",
      description: "Workshops and networking for Black tech professionals",
      date: "Monthly",
      type: "Tech Event"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Boston Black Tech</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#organizations" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Organizations</a>
                <a href="#events" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Events</a>
                <Link to="/blog" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
                <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Boston <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Black Tech</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Empowering the network of Black professionals, entrepreneurs, and students in Boston's technology and life sciences sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
                <Link to="/blog" className="flex items-center">
                  Read Our Blog <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Boston Black Tech represents a vibrant and growing community fostering inclusion, 
              supporting career advancement, and building a thriving ecosystem for Black professionals 
              in Boston's technology and life sciences sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Increasing Representation</h3>
              <p className="text-slate-600">Growing Black representation and inclusion within tech and life sciences industries.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Entrepreneurship & Startups</h3>
              <p className="text-slate-600">Supporting Black tech founders and entrepreneurs with resources and growth opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Professional Development</h3>
              <p className="text-slate-600">Providing mentorship, resources, and opportunities for career advancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Key Organizations</h2>
            <p className="text-xl text-slate-600">
              Meet the organizations driving change in Boston's Black tech community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {organizations.map((org, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-400">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-slate-900">{org.name}</CardTitle>
                    <Badge variant="secondary">{org.focus}</Badge>
                  </div>
                  <CardDescription className="text-slate-600 text-base">
                    {org.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="hover:bg-orange-50 hover:border-orange-300">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Upcoming Events & Initiatives</h2>
            <p className="text-xl text-slate-600">
              Connect, learn, and grow with our community events
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{event.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-orange-600">{event.date}</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Connect with Boston's thriving Black tech community and be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white px-8 py-4">
              Join Our Network
            </Button>
            <Button size="lg" className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4">
              <Link to="/blog">
                Read Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Boston Black Tech</h3>
              <p className="text-slate-400">Empowering Black professionals in Boston's tech ecosystem.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-300">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#organizations" className="hover:text-white transition-colors">Organizations</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-300">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Job Board</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Startups</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Funding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-300">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            © 2024 Boston Black Tech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

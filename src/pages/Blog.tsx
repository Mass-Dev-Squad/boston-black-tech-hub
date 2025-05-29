
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Breaking Barriers: The Rise of Black Tech Entrepreneurs in Boston",
      excerpt: "Exploring the growing ecosystem of Black-founded startups in Boston and the resources that are helping them thrive.",
      author: "Maya Johnson",
      date: "December 15, 2024",
      category: "Entrepreneurship",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How Boston While Black is Transforming Professional Networks",
      excerpt: "An inside look at how BWB has become a cornerstone of the Black professional community in Boston.",
      author: "David Chen",
      date: "December 12, 2024",
      category: "Community",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Tech Skills for the Future: Programming Bootcamps and Black Excellence",
      excerpt: "Highlighting coding bootcamps and training programs that are creating pathways for Black professionals in tech.",
      author: "Aisha Williams",
      date: "December 10, 2024",
      category: "Education",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Venture Capital and Black Founders: Closing the Funding Gap",
      excerpt: "Examining the challenges and opportunities in securing funding for Black-led startups in Boston.",
      author: "Marcus Thompson",
      date: "December 8, 2024",
      category: "Funding",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Women in Black Tech: Leading Innovation in Life Sciences",
      excerpt: "Celebrating the Black women who are driving breakthrough innovations in Boston's life sciences sector.",
      author: "Dr. Keisha Roberts",
      date: "December 5, 2024",
      category: "Innovation",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Building Inclusive Tech Teams: Best Practices from Boston Companies",
      excerpt: "How leading Boston tech companies are creating more inclusive work environments and diverse teams.",
      author: "Robert Kim",
      date: "December 3, 2024",
      category: "Workplace",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Entrepreneurship", "Community", "Education", "Funding", "Innovation", "Workplace"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">Boston Black Tech Blog</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Innovation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, success stories, and resources from Boston's Black tech community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && selectedCategory === "All" && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="bg-orange-100 text-orange-800 mb-4">Featured</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {featuredPost.category}
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
          </h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Get the latest stories and insights from Boston's Black tech community delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white text-gray-900 border-0"
            />
            <Button className="bg-orange-700 hover:bg-orange-800 text-white border-0">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

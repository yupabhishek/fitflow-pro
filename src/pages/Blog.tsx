import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";

const categories = ["All", "Workouts", "Nutrition", "Wellness", "News", "Tips"];

const blogPosts = [
  {
    id: 1,
    title: "10 Compound Exercises You Should Be Doing",
    excerpt: "Maximize your workout efficiency with these essential compound movements that work multiple muscle groups simultaneously.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    category: "Workouts",
    author: "Marcus Johnson",
    date: "Jan 12, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Ultimate Guide to Protein Intake",
    excerpt: "Learn how much protein you really need based on your goals, activity level, and body composition.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    category: "Nutrition",
    author: "Sarah Chen",
    date: "Jan 10, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    title: "5 Recovery Techniques for Better Results",
    excerpt: "Recovery is where the magic happens. Discover the best techniques to optimize your rest days.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    category: "Wellness",
    author: "Emily Parker",
    date: "Jan 8, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "New Year, New Goals: Setting Up for Success",
    excerpt: "Tips and strategies to set realistic fitness goals and actually stick to them throughout the year.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    category: "Tips",
    author: "Lisa Thompson",
    date: "Jan 5, 2024",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Forge Fitness Announces Extended Hours",
    excerpt: "We're now open 24/7 to accommodate your schedule. Learn about our new hours and amenities.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
    category: "News",
    author: "Forge Team",
    date: "Jan 3, 2024",
    readTime: "2 min read",
    featured: false,
  },
  {
    id: 6,
    title: "HIIT vs Steady-State Cardio: Which is Better?",
    excerpt: "We break down the pros and cons of each cardio style to help you choose the right approach.",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
    category: "Workouts",
    author: "David Rodriguez",
    date: "Dec 28, 2023",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 7,
    title: "Meal Prep 101: Save Time and Stay on Track",
    excerpt: "Master the art of meal prepping with our step-by-step guide and recipe ideas.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    category: "Nutrition",
    author: "Sarah Chen",
    date: "Dec 25, 2023",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 8,
    title: "The Science of Sleep and Muscle Growth",
    excerpt: "Why sleep is the most underrated factor in your fitness journey and how to optimize it.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    category: "Wellness",
    author: "Emily Parker",
    date: "Dec 22, 2023",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 9,
    title: "Building a Home Gym on a Budget",
    excerpt: "Essential equipment recommendations for creating an effective home workout space.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    category: "Tips",
    author: "Marcus Johnson",
    date: "Dec 18, 2023",
    readTime: "5 min read",
    featured: false,
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts
    .filter((post) => selectedCategory === "All" || post.category === selectedCategory)
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            FITNESS <span className="gradient-text">RESOURCES</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips, workout guides, nutrition advice, and the latest gym news.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "gradient-bg text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No articles found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {featuredPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="group relative overflow-hidden rounded-3xl aspect-[16/10]"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-bg w-fit mb-4">
                          {post.category}
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                  Load More Articles
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            GET WEEKLY FITNESS TIPS
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest workouts, nutrition advice, and exclusive member content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background"
            />
            <Button className="gradient-bg hover:opacity-90 whitespace-nowrap">
              Subscribe
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

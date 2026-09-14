import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_POSTS } from '../data/initialPosts';
import './Blog.css';

export default function BlogPage() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        }
      })
      .catch((err) => {
        console.log('Using initial posts fallback:', err);
      });
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const recentPosts = [
    { title: "Bridging the Gap: Zero Emission Systems for a Sustainable Future", slug: "bridging-the-gap-zero-emission-systems" },
    { title: "Sustainable Mobility: Exploring the Challenges of Green Technology", slug: "sustainable-mobility-exploring-challenges" },
    { title: "Commercial Carbon Footprint Reduction: A Thorough Guide", slug: "commercial-carbon-footprint-reduction-a-thorough-guide" },
    { title: "Guide Through the World of Zero Emissions", slug: "guide-through-the-world-of-zero-emissions" },
    { title: "Understanding Climate Change: Frequently Asked Questions Answered", slug: "understanding-climate-change-faq" }
  ];

  return (
    <div className="blog-page-root">
      {/* Hero Banner */}
      <section className="blog-hero-banner">
        <div className="blog-hero-container">
          <h1 className="blog-hero-title">Blogs</h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="blog-main-container">
        <div className="blog-content-layout">
          
          {/* Left Column: Post List */}
          <main className="blog-posts-column">
            {currentPosts.map((post) => (
              <article key={post.id || post.slug} className="blog-post-row-card">
                
                {/* Image Box */}
                <div className="blog-card-image-box">
                  <img 
                    src={post.image || '/images/global-warming-1.jpg'} 
                    alt={post.title} 
                    className="blog-card-img"
                  />
                  {/* Top-Right Logo Overlay */}
                  <div className="blog-card-logo-overlay">
                    <img src="/images/logoA.png" alt="GYATK" className="overlay-logo" />
                  </div>
                  {/* Bottom Contact Banner Overlay */}
                  <div className="blog-card-bottom-bar">
                    <span className="bar-url">www.gyatk.com</span>
                    <span className="bar-phone">+91 98952 13495</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="blog-card-content-box">
                  <h2 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-card-excerpt">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="blog-pagination">
              <button 
                className={`pagination-btn ${currentPage === 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
              <button 
                className={`pagination-btn ${currentPage === 2 ? 'active' : ''}`}
                onClick={() => setCurrentPage(2)}
              >
                2
              </button>
              <button 
                className="pagination-next"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              >
                Next
              </button>
            </div>
          </main>

          {/* Right Sidebar Column */}
          <aside className="blog-sidebar-column">
            
            {/* Widget 1: Categories */}
            <div className="sidebar-widget categories-widget">
              <h3 className="widget-heading">Categories</h3>
              <ul className="categories-list">
                <li className="category-item">
                  <span className="bullet-dot">�</span> Check ( 10 )
                </li>
              </ul>
            </div>

            {/* Widget 2: Recent Posts */}
            <div className="sidebar-widget recent-posts-widget">
              <h3 className="widget-heading">Recent Posts</h3>
              <ul className="recent-posts-list">
                {recentPosts.map((rp, idx) => (
                  <li key={idx} className="recent-post-item">
                    <Link to={`/blog/${rp.slug}`} className="recent-post-link">
                      {rp.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}

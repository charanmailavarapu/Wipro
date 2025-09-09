import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
// import './Home.css';

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="container">
          <nav className="home-nav">
            <h1 className="home-logo">TaskTool</h1>
            <div className="home-nav-actions">
              {user ? (
                <Button 
                  variant="primary" 
                  onClick={() => navigate('/dashboard')}
                >
                  Go to Dashboard
                </Button>
              ) : (
                <>
                  <Button 
                    variant="text" 
                    onClick={() => navigate('/login')}
                    className="home-nav-btn"
                  >
                    Login
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={() => navigate('/register')}
                    className="home-nav-btn"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main className="home-main">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Manage Your Projects with Ease</h1>
              <p>
                TaskTool is the all-in-one project management solution that helps teams 
                organize tasks, collaborate effectively, and deliver projects on time.
              </p>
              <div className="hero-actions">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hero-image">
              <div className="placeholder-image">
                <span>📊 Kanban Board Preview</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2>Powerful Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3>Task Management</h3>
                <p>Create, assign, and track tasks with our intuitive Kanban board interface.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Team Collaboration</h3>
                <p>Work together with your team through comments, mentions, and file sharing.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔔</div>
                <h3>Real-time Notifications</h3>
                <p>Stay updated with instant notifications for assignments and changes.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Progress Tracking</h3>
                <p>Monitor project progress with visual indicators and detailed reports.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Role-based Access</h3>
                <p>Control permissions with Admin, Manager, Member, and Viewer roles.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📎</div>
                <h3>File Attachments</h3>
                <p>Attach documents, images, and files directly to your tasks.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Boost Your Productivity?</h2>
            <p>Join thousands of teams that use TaskTool to manage their projects efficiently.</p>
            <Button 
              variant="primary" 
              size="large"
              onClick={handleGetStarted}
            >
              Start Free Trial
            </Button>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} TaskTool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
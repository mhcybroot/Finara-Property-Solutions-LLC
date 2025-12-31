import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Finara Property Solutions" style={{ height: '40px', marginBottom: '16px' }} />
                            <span>FINARA PROPERTY SOLUTIONS LLC</span>
                        </Link>
                        <p className="footer-desc">
                            Professional property preservation and maintenance services in Buffalo, NY.
                            Dedicated to speed, compliance, and quality for asset managers and owners.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <Phone size={18} />
                                <span>(716) 274-8090</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>info@finarapropertysolutions.com</span>
                            </li>
                            <li>
                                <MapPin size={18} />
                                <span>Buffalo, NY</span>
                            </li>
                            <li>
                                <Clock size={18} />
                                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Finara Property Solutions LLC. All rights reserved.</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--primary);
          color: var(--text-dark-secondary);
          padding: 80px 0 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        
        body.dark .footer {
            background-color: var(--bg-dark);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }

        @media (min-width: 768px) {
            .footer-grid {
                grid-template-columns: 2fr 1fr 1fr;
            }
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-size: 1.25rem;
          margin-bottom: 24px;
          color: white;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        
        .footer-desc {
            max-width: 350px;
            margin-bottom: 32px;
            line-height: 1.6;
        }
        
        .social-links {
            display: flex;
            gap: 16px;
        }
        
        .social-links a {
          color: var(--text-dark-secondary);
          transition: all 0.2s;
          background: rgba(255,255,255,0.05);
          padding: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-links a:hover {
          color: white;
          background: var(--accent);
          transform: translateY(-2px);
        }
        
        .footer-col h4 {
            color: white;
            font-size: 1.1rem;
            margin-bottom: 24px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .footer-links li {
            margin-bottom: 12px;
        }
        
        .footer-links a {
            transition: color 0.2s;
        }
        
        .footer-links a:hover {
            color: var(--accent);
            padding-left: 4px;
        }
        
        .contact-list li {
            display: flex;
            gap: 12px;
            margin-bottom: 16px;
            align-items: flex-start;
        }
        
        .contact-list svg {
            color: var(--accent);
            flex-shrink: 0;
            margin-top: 4px;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 32px;
            border-top: 1px solid rgba(255,255,255,0.05);
            font-size: 0.9rem;
        }
            `}</style>
        </footer>
    );
}

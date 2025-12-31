import { Link } from 'react-router-dom';
import { ShieldCheck, TreePine, Trash2, Hammer, ClipboardCheck, Home, Ruler, Snowflake, PaintBucket, HardHat, Key } from 'lucide-react';

export default function ServicesPage() {
    const allServices = [
        { title: 'Securing & Lock Services', icon: <Key size={32} />, desc: 'Complete property securing including re-keying, lock changes, board-ups, and lockbox installation to prevent unauthorized access.' },
        { title: 'Lawn & Landscape Care', icon: <TreePine size={32} />, desc: 'Regular grass cuts, tree trimming, shrub maintenance, and seasonal yard cleanups to maintain curb appeal.' },
        { title: 'Debris Removal', icon: <Trash2 size={32} />, desc: 'Full interior and exterior trash-outs, hazard removal, and dumping services for foreclosed or vacant properties.' },
        { title: 'Initial Inspections & Reports', icon: <ClipboardCheck size={32} />, desc: 'Comprehensive property condition reports, occupancy verification, and damage assessment within 24-48 hours.' },
        { title: 'General Repairs', icon: <Hammer size={32} />, desc: 'Handyman services covering drywall, plumbing leaks, electrical safety checks, and structural repairs.' },
        { title: 'Exterior Maintenance', icon: <Home size={32} />, desc: 'Siding repairs, gutter cleaning, pressure washing, and roof tarping/patching.' },
        { title: 'Interior Maintenance', icon: <Ruler size={32} />, desc: 'Janitorial services, deep cleaning, carpet removal, and system checks.' },
        { title: 'Winterization', icon: <Snowflake size={32} />, desc: 'Plumbing system draining, anti-freeze application, and dry heat system testing to prevent freeze damage.' },
        { title: 'Renovation & Refresh', icon: <PaintBucket size={32} />, desc: 'Full painting, flooring replacement, and kitchen/bath upgrades to increase property value.' },
        { title: 'Health & Safety Repairs', icon: <ShieldCheck size={32} />, desc: 'Mold remediation, trip hazard removal, railing installation, and code compliance fixes.' },
        { title: 'Full Unit Turnovers', icon: <HardHat size={32} />, desc: 'End-to-end preparation of rental units for new tenants, including cleaning, repairs, and painting.' },
    ];

    return (
        <div className="services-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our Expert Services</h1>
                    <p>Comprehensive solutions for every stage of property preservation and management.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="services-grid-large">
                        {allServices.map((service, index) => (
                            <div key={index} className="service-card-large">
                                <div className="icon-wrapper">{service.icon}</div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="additional-info">
                        <h3>Need a custom solution?</h3>
                        <p>We also offer additional property solutions tailored to your specific asset needs.</p>
                        <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
                    </div>
                </div>
            </section>

            <style>{`
        .page-header {
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
          padding: 100px 0 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .page-header::before {
             content: '';
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             background-image: radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 30%);
             pointer-events: none;
        }

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out;
        }
        
        @media (min-width: 768px) {
            .page-header h1 { font-size: 4rem; }
        }

        .page-header p {
          font-size: 1.25rem;
          color: var(--text-dark-secondary);
          max-width: 700px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .services-grid-large {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 40px;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .service-card-large {
          background: white;
          border: 1px solid var(--surface-2);
          border-radius: 12px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          box-shadow: var(--shadow-sm);
        }
        
        body.dark .service-card-large {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }

        .service-card-large:hover {
          box-shadow: var(--shadow-xl);
          border-color: var(--accent);
          transform: translateY(-8px);
        }

        .icon-wrapper {
          background-color: var(--accent-light);
          padding: 16px;
          border-radius: 12px;
          color: var(--accent);
          margin-bottom: 24px;
          display: inline-flex;
        }
        
        body.dark .icon-wrapper {
            background-color: rgba(245, 158, 11, 0.1);
        }

        .service-card-large h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .service-card-large p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1.05rem;
        }
        
        body.dark .service-card-large p {
            color: var(--text-dark-secondary);
        }
        
        .section {
            padding: 140px 0;
        }

        .services-grid-large {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 40px;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        /* ... existing styles ... */

        .additional-info {
            text-align: center;
            margin-top: 100px;
            margin-bottom: 40px; /* Added spacing */
            padding: 60px;
            background-color: var(--bg-light);
            border-radius: 16px;
            border: 1px solid var(--surface-2);
            box-shadow: var(--shadow-lg);
        }
        
        body.dark .additional-info {
            background-color: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }
        
        .additional-info h3 {
            margin-bottom: 24px;
            font-size: 2rem;
        }
        
        .additional-info p {
            margin-bottom: 40px;
            color: var(--text-secondary);
            font-size: 1.25rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        body.dark .additional-info p {
            color: var(--text-dark-secondary);
        }
      `}</style>
        </div>
    );
}

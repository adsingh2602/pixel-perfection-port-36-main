import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  // Backend-ready structure - will fetch from API later
  const projects = [
    {
      id: 1,
      title: 'Ride–Hailing Application Backend',
      description: 'Developed the backend for a scalable ride-hailing application with features like ride booking, driver assignment, real-time route distance calculation, and fare estimation using OSRM. Built using Spring Boot and PostgreSQL with fully documented REST APIs.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'RESTful API', 'OSRM', 'Swagger UI'],
      github: 'https://github.com/adsingh2602/UberApp',
      // demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Social Networking Application Backend',
      description: 'Built a backend system for a professional networking platform similar to LinkedIn. Implemented features like profile creation, connections, posting updates, and feed management. Designed a robust relational schema in PostgreSQL and used microservices and Docker to structure the application for scalability.',
      tech: ["Java", "Spring Boot", "PostgreSQL", "RESTful APIs", "Docker", "Microservices"],
      github: 'https://github.com/adsingh2602/LinkedIn',
      // demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Bank Loan Data Analysis',
      description: 'Performed data cleaning and preprocessing on a bank loan dataset, handling missing values and preparing the data for analysis. Conducted exploratory data analysis to identify risk patterns based on loan grade, purpose, term, and income levels, helping to understand default risks across customer segments.',
      tech: ["Python", "pandas", "numpy", "matplotlib", "seaborn"],
      github: 'https://github.com/adsingh2602/bank-loan-analysis',
      // demo: 'https://demo.com',
    },
    {
      id: 4,
      title: 'E-Commerce Sales Data Analysis',
      description: 'Cleaned and transformed e-commerce sales data, including date parsing and handling missing values. Analysed revenue, profit, discounts, and sales trends by category, region, and time period, uncovering seasonality and customer preferences. Built visualizations and dashboards (Power BI) to present business insights.',
      tech: ["Python", "pandas", "numpy", "matplotlib", "seaborn", "Power BI"],
      github: 'https://github.com/adsingh2602/ecommerce-sales-analysis',
      // demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-transparent to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Some of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-card p-8 hover:glow-border transition-all duration-300 group animate-slide-up delay-${(idx + 1) * 100}`}
            >
              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-lg text-xs font-medium text-accent">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

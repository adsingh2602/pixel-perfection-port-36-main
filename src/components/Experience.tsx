import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   type: 'work',
    //   title: 'Senior Software Developer',
    //   company: 'Tech Solutions Inc.',
    //   period: '2022 - Present',
    //   description: 'Leading development of enterprise applications, mentoring junior developers, and implementing best practices.',
    // },
    // {
    //   type: 'work',
    //   title: 'Software Developer',
    //   company: 'Digital Innovations',
    //   period: '2020 - 2022',
    //   description: 'Built scalable web applications using React and Node.js, improved performance by 40%.',
    // },
    {
      type: 'education',
      title: 'Bachelor of Technology(Information Technology)',
      company: 'Uttarakhand Technical University',
      period: '2022 - 2026',
      description: 'Focused on software engineering, algorithms, and backend development.',
    },
    {
      type: 'education',
      title: 'Spring Boot 0 To 100',
      company: 'Coding shuttle',
      period: '2024',
      description: 'Mastered Spring Boot fundamentals to advanced concepts through project-based learning, including REST APIs, Spring Data JPA, and application deployment.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Experience & Education</h2>
          <p className="text-muted-foreground text-lg mt-4">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card p-8 hover:glow-border transition-all duration-300 animate-slide-up delay-${(idx + 1) * 100}`}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-xl">
                  {item.type === 'work' ? (
                    <Briefcase size={24} className="text-background" />
                  ) : (
                    <GraduationCap size={24} className="text-background" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <span className="text-primary text-sm font-semibold mt-1 md:mt-0">{item.period}</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-3">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

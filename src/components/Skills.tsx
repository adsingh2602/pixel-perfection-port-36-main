const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['Java','Python', 'C++', 'SQL'],
    },
    {
      category: 'Backend & Frameworks',
      skills: ['Spring Boot', 'Spring JPA', 'RESTful APIs', 'ExprMicroservices'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'DBeaver', 'Postman', 'VS Code'],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Agile', 'Leadership'],
    },
    {
      category: 'Analytics',
      skills: ['pandas', 'numpy', 'matplotlib', 'seaborn', 'SQL', 'Power BI'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div
              key={category.category}
              className={`glass-card p-8 hover:glow-border transition-all duration-300 hover:scale-105 animate-slide-up delay-${(idx + 1) * 100}`}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

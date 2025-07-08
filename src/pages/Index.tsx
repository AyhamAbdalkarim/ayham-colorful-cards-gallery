import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Award, Briefcase, GraduationCap, Heart, BookOpen, Star, Calendar, MapPin, ExternalLink } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const certifications = [
    { title: "AWS Solutions Architect", issuer: "Amazon", date: "2024", level: "Professional" },
    { title: "Google Cloud Professional", issuer: "Google", date: "2023", level: "Expert" },
    { title: "React Developer Certification", issuer: "Meta", date: "2023", level: "Advanced" },
    { title: "Kubernetes Administrator", issuer: "CNCF", date: "2022", level: "Professional" }
  ];

  const volunteering = [
    { role: "Tech Volunteer", org: "Code.org", duration: "2023 - Present", description: "Teaching coding to underserved communities" },
    { role: "Mentor", org: "TechStars", duration: "2022 - 2024", description: "Mentoring startup founders in technology strategy" },
    { role: "Workshop Leader", org: "Girls Who Code", duration: "2021 - 2023", description: "Leading programming workshops for young women" }
  ];

  const workExperience = [
    { title: "Senior Software Engineer", company: "TechCorp", duration: "2022 - Present", location: "San Francisco, CA", description: "Leading full-stack development team" },
    { title: "Full Stack Developer", company: "StartupX", duration: "2020 - 2022", location: "New York, NY", description: "Built scalable web applications" },
    { title: "Frontend Developer", company: "DesignStudio", duration: "2018 - 2020", location: "Los Angeles, CA", description: "Created responsive user interfaces" }
  ];

  const courses = [
    { name: "Advanced React Patterns", provider: "Epic React", completion: "2024", rating: 5 },
    { name: "System Design Masterclass", provider: "Educative", completion: "2023", rating: 5 },
    { name: "Machine Learning Specialization", provider: "Coursera", completion: "2023", rating: 4 },
    { name: "Cloud Architecture", provider: "Pluralsight", completion: "2022", rating: 5 }
  ];

  const education = [
    { degree: "Master of Science", field: "Computer Science", institution: "Stanford University", year: "2018", gpa: "3.8" },
    { degree: "Bachelor of Science", field: "Software Engineering", institution: "UC Berkeley", year: "2016", gpa: "3.7" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] grid gap-3 p-4">
                    <NavigationMenuLink 
                      onClick={() => scrollToSection('certifications')}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      <div className="text-sm font-medium leading-none">Certifications</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Professional certifications and achievements
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      onClick={() => scrollToSection('volunteering')}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      <div className="text-sm font-medium leading-none">Volunteering</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Community service and volunteer work
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      onClick={() => scrollToSection('experience')}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      <div className="text-sm font-medium leading-none">Work Experience</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Professional work history and roles
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      onClick={() => scrollToSection('courses')}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      <div className="text-sm font-medium leading-none">Courses</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Online courses and professional development
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      onClick={() => scrollToSection('education')}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      <div className="text-sm font-medium leading-none">Education</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Academic background and degrees
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-1 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Passionate developer with expertise in full-stack development, cloud architecture, and team leadership
          </p>
          <Button 
            onClick={() => scrollToSection('certifications')}
            variant="secondary" 
            size="lg"
            className="shadow-glow hover:shadow-card-hover transition-all duration-300"
          >
            Explore My Journey <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Certifications Section */}
        <section id="certifications" className="scroll-mt-20">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground text-lg">Professional achievements and credentials</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-2 border-0 text-primary-foreground hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-primary-foreground/80">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                      {cert.level}
                    </Badge>
                    <span className="text-sm opacity-80">{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Volunteering Section */}
        <section id="volunteering" className="scroll-mt-20">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Volunteering</h2>
            <p className="text-muted-foreground text-lg">Giving back to the community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {volunteering.map((vol, index) => (
              <Card key={index} className="bg-gradient-3 border-0 text-primary-foreground hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl">{vol.role}</CardTitle>
                  <CardDescription className="text-primary-foreground/80 font-medium">{vol.org}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 mb-3">{vol.description}</p>
                  <div className="flex items-center text-sm opacity-80">
                    <Calendar className="h-4 w-4 mr-2" />
                    {vol.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <div className="text-center mb-12">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground text-lg">Professional journey and achievements</p>
          </div>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <Card key={index} className="bg-gradient-4 border-0 text-primary-foreground hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="text-primary-foreground/80 font-medium text-lg">{exp.company}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm opacity-80 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-sm opacity-80">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="scroll-mt-20">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Courses</h2>
            <p className="text-muted-foreground text-lg">Continuous learning and skill development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-gradient-5 border-0 text-primary-foreground hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription className="text-primary-foreground/80">{course.provider}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm opacity-80">{course.completion}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < course.rating ? 'text-yellow-300 fill-current' : 'text-white/30'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                    Completed
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground text-lg">Academic foundation and achievements</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gradient-1 border-0 text-primary-foreground hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-lg">{edu.field}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-primary-foreground/90 font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-80">Class of {edu.year}</span>
                      <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-1 text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="mb-6 opacity-90">Ready to collaborate on your next project?</p>
          <Button variant="secondary" size="lg" className="shadow-glow">
            Get In Touch
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
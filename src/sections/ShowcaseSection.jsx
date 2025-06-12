import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const featuredProjectRef = useRef(null);
  const projectGridRef = useRef(null);
  const [imageIndices, setImageIndices] = useState({});

  // Project data - easily add more projects here
  const projects = [
    {
      id: 1,
      title: "A Camera Rent E-Commerce Full Stack app with Admin Panel",
      description:
        "An app built with Next Js, Firebase, Algolia search & TailwindCSS for a fast, user-friendly experience.",
      images: [
        "/images/p1.png",
        "/images/p1_2.png",
        "/images/p1_3.png"
      ],
      featured: true,
      bgColor: "bg-gradient-to-br from-blue-900 to-purple-900",
      liveUrl: "https://asdcameralk.vercel.app/",
      githubUrl: "https://github.com/chamma08/asdcameralk", 
    },
    {
      id: 2,
      title: "AI Powered AR Full Stack E-Commerce App",
      description:
        "My final year project at the University of Bedfordshire introduces a revolutionary shopping experience complete with AI-powered recommendations, a dedicated AI assistant, and augmented reality for product visualization. The application is built on the MERN stack and styled with Tailwind CSS, while AR functionalities are implemented using Three.js. The artificial intelligence features are powered by TensorFlow and PyTorch",
      images: [
        "/images/p2.png",
        "images/2_2.jpg",
        "/images/2_3.png"
      ],
      bgColor: "bg-slate-800",
      liveUrl: "https://furni-online.vercel.app/",
      githubUrl: "https://github.com/chamma08/FurniOnline", 
    },
    {
      id: 3,
      title: "Social Media Frame Capture App",
      description:
        "A mobile web application that can capture images and share to social medias including the amazing frame",
      images: [
        "/images/p3.png",
      ],
      bgColor: "bg-gray-800",
      liveUrl: "https://captureimg.netlify.app/",
      githubUrl: "https://github.com/yourusername/social-media-frame-capture", 
    },
    {
      id: 4,
      title: "Apple Demo Showcase App",
      description:
        "A sleek demo app showcasing Apple products with interactive features and animations.",
      images: [
        "/images/p4.png",
        
      ],
      bgColor: "bg-zinc-800",
      liveUrl: "https://appledemonew.netlify.app/",
      githubUrl: "https://github.com/yourusername/apple-demo-showcase", // Add your GitHub URL here
    },
    {
      id: 5,
      title: "Feedback system for NEIC Website",
      description:
        "A feedback system integrated into the NEIC website, allowing users to submit and view feedback easily. In the Admin panel, you can manage the feedbacks also can take a printout of the feedbacks.",
      images: [
        "/images/p5.png",
        "/images/p5_2.png"
      ],
      bgColor: "bg-neutral-800",
      liveUrl: "http://www.neic.cea.lk/feedbacks",
      githubUrl: "https://github.com/yourusername/neic-feedback-system", // Add your GitHub URL here
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  // Handle image navigation
  const nextImage = (projectId, totalImages) => {
    setImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getCurrentImageIndex = (projectId) => {
    return imageIndices[projectId] || 0;
  };

  useGSAP(() => {
    // Animate section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate featured project
    gsap.fromTo(
      featuredProjectRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: featuredProjectRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate project grid
    const projectCards =
      projectGridRef.current.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: (index + 2) * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen bg-black py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured Work
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto text-center">
            A collection of projects showcasing innovative solutions and
            cutting-edge technologies
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div ref={featuredProjectRef} className="mb-20">
            <div
              className={`${featuredProject.bgColor} rounded-3xl p-8 md:p-12 overflow-hidden relative`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 mb-6 inline-block">
                    <span className="text-white text-sm font-medium px-3 py-1">
                      Featured Project
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {featuredProject.title}
                  </h2>
                  <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed text-justify">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    )}
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    
                    {/* Featured Project Image Carousel */}
                    <div className="relative z-10 max-w-md mx-auto">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                          src={featuredProject.images[getCurrentImageIndex(featuredProject.id)]}
                          alt={`${featuredProject.title} - ${getCurrentImageIndex(featuredProject.id) + 1}`}
                          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Navigation Arrows */}
                        {featuredProject.images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(featuredProject.id, featuredProject.images.length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={() => nextImage(featuredProject.id, featuredProject.images.length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                      </div>
                      
                      {/* Image Indicators */}
                      {featuredProject.images.length > 1 && (
                        <div className="flex justify-center mt-4 space-x-2">
                          {featuredProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setImageIndices(prev => ({ ...prev, [featuredProject.id]: index }))}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                getCurrentImageIndex(featuredProject.id) === index 
                                  ? 'bg-white w-6' 
                                  : 'bg-white/50 hover:bg-white/75'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div
          ref={projectGridRef}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {regularProjects.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div
                  className={`${project.bgColor} p-6 relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  {/* Project Image Carousel */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={project.images[getCurrentImageIndex(project.id)]}
                        alt={`${project.title} - ${getCurrentImageIndex(project.id) + 1}`}
                        className="w-full h-48 object-cover relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage(project.id, project.images.length);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(project.id, project.images.length);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Image Indicators */}
                    {project.images.length > 1 && (
                      <div className="flex justify-center mt-3 space-x-1">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setImageIndices(prev => ({ ...prev, [project.id]: index }));
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                              getCurrentImageIndex(project.id) === index 
                                ? 'bg-white w-4' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1 text-justify">
                    {project.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-600 text-gray-300 text-sm px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Load More Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ShowcaseSection;
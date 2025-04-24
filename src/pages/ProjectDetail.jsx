import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import projects from '../pages/ProjectsData';
import PageTransition from '../components/common/PageTransition';

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === Number(id));

    useEffect(() => {
        document.title = project 
            ? `${project.title} - Wajedo Construction Inspection`
            : 'Project Not Found';
    }, [project]);

    if (!project) {
        return (
            <PageTransition>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                        <p className="text-lg mb-6">No project found with ID: {id}</p>
                        <Link 
                            to="/projects" 
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
                        >
                            Back to Projects
                        </Link>
                    </div>
                </div>
            </PageTransition>
        );
    }

    const relatedProjects = projects.filter(
        p => p.category === project.category && p.id !== project.id
    ).slice(0, 3);

    return (
        <PageTransition>
            <div className=" mt-4 pt-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Main content - optimized image sizing */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-8"> {/* Reduced mb from 12 to 8 */}
                        {/* Image column */}
                        <div className="lg:w-1/2">
                            <div className="rounded-lg overflow-hidden shadow-md">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-auto max-h-[500px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        
                        {/* Details column */}
                        <div className="lg:w-1/2">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
                                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                    {project.category}
                                </span>
                            </div>
                            
                            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
                                <span className="inline-flex items-center">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {project.location}
                                </span>
                            </p>
                            
                            <div className="prose dark:prose-invert prose-sm mb-6">
                                <p className="text-gray-700 dark:text-gray-300">
                                    {project.description}
                                </p>
                            </div>
                            
                            <div className="mt-4">
                                <Link 
                                    to="/contact" 
                                    className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
                                >
                                    Contact Us About Your Project
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Back button moved below main content */}
                    <div className="mb-8 mt-4"> {/* Added mt-4 for more spacing above */}
                        <Link 
                            to="/projects" 
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Projects
                        </Link>
                    </div>
                    
                    {/* Project details section */}
                    <div className="mb-12">
                        <div className="prose dark:prose-invert max-w-none prose-sm">
                            <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            
                            <h2 className="text-xl font-semibold mb-3">Inspection Services</h2>
                            <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-1.5">
                                <li>Structural integrity assessment</li>
                                <li>Building code compliance verification</li>
                                <li>Safety systems inspection</li>
                                <li>Quality assurance monitoring</li>
                                <li>Final completion certification</li>
                            </ul>
                            
                            <h2 className="text-xl font-semibold mb-3">Results</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Through our thorough inspection process, we identified and addressed several potential issues before they 
                                became significant problems, saving the client both time and resources. The project was completed on 
                                schedule and received all necessary approvals and certifications for occupancy.
                            </p>
                        </div>
                    </div>
                    
                    {/* Related projects */}
                    {relatedProjects.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-6">Related Projects</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedProjects.map(project => (
                                    <div 
                                        key={project.id}
                                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <Link to={`/projects/${project.id}`} className="block">
                                            <div className="h-48 overflow-hidden">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                                    <span className="inline-flex items-center">
                                                        <MapPin className="h-3 w-3 mr-1" />
                                                        {project.location}
                                                    </span>
                                                </p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{project.description}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PageTransition>
    );
};

export default ProjectDetailPage;
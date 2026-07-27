import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, MessageSquare, FolderOpen, LogOut } from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    technologies: "",
    github: "",
    live_demo: "",
    image: ""
  });

  useEffect(() => {
    fetchProjects();
    fetchMessages();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/projects/");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/contact/");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingProject 
        ? `http://localhost:8000/api/projects/${editingProject.id}/`
        : "http://localhost:8000/api/projects/";
      
      const method = editingProject ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectForm),
      });

      if (response.ok) {
        await fetchProjects();
        setShowProjectForm(false);
        setEditingProject(null);
        setProjectForm({
          title: "",
          description: "",
          technologies: "",
          github: "",
          live_demo: "",
          image: ""
        });
      }
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await fetch(`http://localhost:8000/api/projects/${id}/`, {
          method: "DELETE",
        });
        await fetchProjects();
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      github: project.github || "",
      live_demo: project.live_demo || "",
      image: project.image || ""
    });
    setShowProjectForm(true);
  };

  const handleDeleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await fetch(`http://localhost:8000/api/contact/${id}/`, {
          method: "DELETE",
        });
        await fetchMessages();
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <button 
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
          >
            <LogOut size={20} />
            <span>Back to Site</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
              activeTab === "projects"
                ? "bg-teal-600 text-white"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            <FolderOpen size={20} />
            <span>Projects</span>
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
              activeTab === "messages"
                ? "bg-teal-600 text-white"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            <MessageSquare size={20} />
            <span>Messages</span>
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div>
            {!showProjectForm ? (
              <div>
                <button
                  onClick={() => setShowProjectForm(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg transition mb-6"
                >
                  <Plus size={20} />
                  <span>Add New Project</span>
                </button>

                <div className="grid gap-6">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-slate-900 rounded-xl p-6 border border-slate-800"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-slate-400 mb-3">{project.description}</p>
                          <p className="text-sm text-teal-400">
                            Technologies: {project.technologies}
                          </p>
                          {project.github && (
                            <p className="text-sm text-slate-400 mt-1">
                              GitHub: {project.github}
                            </p>
                          )}
                          {project.live_demo && (
                            <p className="text-sm text-slate-400 mt-1">
                              Live Demo: {project.live_demo}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
                <h2 className="text-2xl font-bold mb-6">
                  {editingProject ? "Edit Project" : "Add New Project"}
                </h2>
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500"
                      rows="4"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Technologies</label>
                    <input
                      type="text"
                      value={projectForm.technologies}
                      onChange={(e) => setProjectForm({...projectForm, technologies: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500"
                      placeholder="React, Node.js, MongoDB"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">GitHub URL</label>
                    <input
                      type="url"
                      value={projectForm.github}
                      onChange={(e) => setProjectForm({...projectForm, github: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Live Demo URL</label>
                    <input
                      type="url"
                      value={projectForm.live_demo}
                      onChange={(e) => setProjectForm({...projectForm, live_demo: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Image URL</label>
                    <input
                      type="url"
                      value={projectForm.image}
                      onChange={(e) => setProjectForm({...projectForm, image: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition"
                    >
                      {editingProject ? "Update Project" : "Add Project"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowProjectForm(false);
                        setEditingProject(null);
                        setProjectForm({
                          title: "",
                          description: "",
                          technologies: "",
                          github: "",
                          live_demo: "",
                          image: ""
                        });
                      }}
                      className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="grid gap-6">
            {messages.length === 0 ? (
              <div className="text-center py-10 text-slate-400">
                No messages yet.
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className="bg-slate-900 rounded-xl p-6 border border-slate-800"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{message.name}</h3>
                      <p className="text-teal-400 mb-2">{message.email}</p>
                      <p className="text-slate-400 mb-3">{message.message}</p>
                      <p className="text-sm text-slate-500">
                        {new Date(message.created_at).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteMessage(message.id)}
                      className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
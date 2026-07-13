function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-sky-400">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Placeholder Card */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-sky-500/50 transition-colors">
          <h3 className="text-xl font-bold mb-2 text-white">Project Title</h3>
          <p className="text-slate-400 mb-4">A brief description explaining what this software does and who it's for.</p>
          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-800 rounded-full text-sky-400">React</span>
        </div>
      </div>
    </div>
  );
}
export default Projects;
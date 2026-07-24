import React from "react";

const Projects = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Fruit Management System</h3>
          <p className="text-gray-600">
            A web application for managing fruit sales and inventory.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
          <p className="text-gray-600">
            A personal portfolio built using React and Tailwind CSS.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Hospital System</h3>
          <p className="text-gray-600">
            A simple system for managing patient records and appointments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
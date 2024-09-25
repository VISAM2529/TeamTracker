"use client"
import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import Image from 'next/image';
import Modal from 'react-modal';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: "Sample Project",
    },
  ]);
  const [newProjectName, setNewProjectName] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProject = () => {
    const newProject = {
      id: projects.length,
      name: newProjectName,
    };
    setProjects([...projects, newProject]);
    setNewProjectName('');
    closeModal();
  };

  return (
    <div className='p-3 w-full h-full flex flex-col gap-10 overflow-scroll overflow-x-auto'>
      <div className='w-full flex items-center justify-between'>
        <div className='w-full flex items-center gap-5'>
          <input
            placeholder='Search Your Project'
            className='w-5/6 pt-3 pb-3 pl-10 outline-none rounded-full'
          />
          <button className='text-black text-3xl p-1 rounded-full'>
            <IoSearchSharp />
          </button>
        </div>
        <button
          className='bg-black text-white w-1/6 text-lg p-1 rounded-lg'
          onClick={openModal}
        >
          Add Project
        </button>
      </div>
      <div className='w-full flex flex-wrap gap-5'>
        {projects.map((project) => (
          <div key={project.id} className='w-1/4 shadow-lg bg-white rounded-lg flex flex-col items-center gap-5 p-5'>
            <img src='/prImage.jpg' className='w-full h-3/4 rounded-tl-lg rounded-tr-lg' />
            <hr className='w-full' />
            <h1>{project.name}</h1>
            <button className='bg-black text-white w-full rounded-lg p-2'>
              View Progress
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Project Modal"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            placeholder="Project Name"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <button
            className='bg-black text-white w-full rounded-lg p-2 mb-2'
            onClick={handleAddProject}
          >
            Add Project
          </button>
          <button
            className='bg-gray-500 text-white w-full rounded-lg p-2'
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Page;

// client component
"use client";

import { useState } from 'react';
import { useKanban } from '../hooks/useKanban';
import { Status } from '../types';
import Column from './Column';

const COLUMNS: Status[] = ['Pending', 'In Progress', 'Completed'];

export default function Board() {
  const { tasks, isLoaded, addTask, updateTask, deleteTask, moveTask } = useKanban();
  const [newTitle, setNewTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // <-- Added Search State

  if (!isLoaded) return <div className="text-center py-10">Loading board...</div>;

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addTask(newTitle, '');
    setNewTitle('');
  };

  // <-- Added Filter Logic -->
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      
      {/* Top Controls: Add Task & Search */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        {/* Add Task Form */}
        <form onSubmit={handleAddTask} className="flex-1 flex gap-2">
          <input 
            type="text" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="What needs to be done?" 
            className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap"
          >
            Add Task
          </button>
        </form>

        {/* Search Bar */}
        <div className="flex-1 md:max-w-xs">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks..." 
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white"
          />
        </div>
      </div>

      {/* Board Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COLUMNS.map(status => (
          <Column 
            key={status}
            status={status}
            // Pass filteredTasks instead of all tasks
            tasks={filteredTasks.filter(t => t.status === status)} 
            onUpdate={updateTask}
            onDelete={deleteTask}
            onMove={moveTask}
          />
        ))}
      </div>
    </div>
  );
}
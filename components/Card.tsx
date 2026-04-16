
import { useState } from 'react';
import { Task } from '../types';

interface CardProps {
  task: Task;
  onUpdate: (id: string, title: string, desc: string) => void;
  onDelete: (id: string) => void;
}

export default function Card({ task, onUpdate, onDelete }: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description);

  const handleSave = () => {
    if (!editTitle.trim()) return;
    onUpdate(task.id, editTitle, editDesc);
    setIsEditing(false);
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  if (isEditing) {
    return (
      <div className="bg-white p-4 rounded-lg shadow mb-3 border border-blue-400">
        <input 
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-full font-bold border-b mb-2 focus:outline-none"
          placeholder="Task Title"
          autoFocus
        />
        <textarea 
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
          className="w-full text-sm text-gray-600 border rounded p-1 mb-2 focus:outline-none"
          placeholder="Description"
          rows={3}
        />
        <div className="flex justify-end gap-2 text-sm">
          <button onClick={() => setIsEditing(false)} className="text-gray-500">Cancel</button>
          <button onClick={handleSave} className="bg-blue-500 text-white px-2 py-1 rounded">Save</button>
        </div>
      </div>
    );
  }

  return (
    <div 
      draggable
      onDragStart={handleDragStart}
      className="bg-white p-4 rounded-lg shadow mb-3 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow group"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800 wrap-break-word">{task.title}</h4>
        <div className="hidden group-hover:flex gap-2">
          <button onClick={() => setIsEditing(true)} className="text-blue-500 text-xs">Edit</button>
          <button onClick={() => onDelete(task.id)} className="text-red-500 text-xs">Delete</button>
        </div>
      </div>
      {task.description && <p className="text-sm text-gray-600 wrap-break-word">{task.description}</p>}
    </div>
  );
}
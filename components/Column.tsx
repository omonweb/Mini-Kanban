
import { Task, Status } from '../types';
import Card from './Card';

interface ColumnProps {
  status: Status;
  tasks: Task[];
  onUpdate: (id: string, title: string, desc: string) => void;
  onDelete: (id: string) => void;
  onMove: (id: string, status: Status) => void;
}

export default function Column({ status, tasks, onUpdate, onDelete, onMove }: ColumnProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    if (taskId) {
      onMove(taskId, status);
    }
  };

  return (
    <div 
      className="bg-gray-200/50 rounded-xl p-4 min-h-125 flex flex-col"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-gray-700">{status}</h2>
        <span className="bg-gray-300 text-gray-700 text-xs py-1 px-2 rounded-full font-medium">
          {tasks.length}
        </span>
      </div>
      
      <div className="flex-1">
        {tasks.map(task => (
          <Card key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
        {tasks.length === 0 && (
          <div className="h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm p-4 text-center">
            Drop cards here
          </div>
        )}
      </div>
    </div>
  );
}
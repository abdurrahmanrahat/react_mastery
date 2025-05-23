import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  // handle add task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);

    setShowAddTaskModal(false);
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddTaskModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container mx-auto">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddTaskHandler={() => setShowAddTaskModal(true)} />

          <TaskLists tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;

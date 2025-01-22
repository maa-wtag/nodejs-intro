class TaskQueue extends EventEmitter {
  constructor() {
    super();
    this.queue = [];
  }

  addTask(task) {
    this.queue.push(task);
    this.emit("taskAdded", task);
  }

  // Removing specific listeners
  removeTaskListener(listener) {
    this.removeListener("taskAdded", listener);
  }

  // Remove all listeners for an event
  removeAllTaskListeners() {
    this.removeAllListeners("taskAdded");
  }
}

const taskQueue = new TaskQueue();

// Adding multiple listeners with different priorities
const highPriorityListener = (task) => {
  console.log("High priority task added:", task);
};

const lowPriorityListener = (task) => {
  console.log("Low priority task added:", task);
};

// prependListener adds the listener to the beginning
taskQueue.prependListener("taskAdded", highPriorityListener);
taskQueue.on("taskAdded", lowPriorityListener);

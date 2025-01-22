class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("userJoined", {
      user,
      timestamp: new Date(),
      totalUsers: this.users.size,
    });
  }

  leave(user) {
    this.users.delete(user);
    this.emit("userLeft", {
      user,
      timestamp: new Date(),
      totalUsers: this.users.size,
    });
  }

  sendMessage(user, message) {
    this.emit("message", {
      user,
      message,
      timestamp: new Date(),
    });
  }
}

const chatRoom = new ChatRoom();

// Event listeners with complex data
chatRoom.on("userJoined", ({ user, timestamp, totalUsers }) => {
  console.log(`${user} joined at ${timestamp}. Total users: ${totalUsers}`);
});

chatRoom.on("message", ({ user, message, timestamp }) => {
  console.log(`[${timestamp}] ${user}: ${message}`);
});

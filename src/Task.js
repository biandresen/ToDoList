function Task(title, note, project, date, priority, color, checked = "false", id) {
  (this.title = title || "Task"),
    (this.note = note || "..."),
    (this.project = project || "Project"),
    (this.date = date),
    (this.priority = priority),
    (this.color = color),
    (this.checked = checked),
    (this.id = id);
}

export default Task;

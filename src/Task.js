function Task(title, note, project, date, priority, color, status) {
  (this.title = title),
    (this.note = note),
    (this.project = project),
    (this.date = date),
    (this.priority = priority),
    (this.color = color),
    (this.status = status);
}

export default Task;

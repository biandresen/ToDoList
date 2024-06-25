function Task(title = "task", note, project, date, priority, color, id, checked = false) {
  (this.title = title),
    (this.note = note),
    (this.project = project),
    (this.date = date),
    (this.priority = priority),
    (this.color = color),
    (this.checked = checked),
    (this.id = id);
}

export default Task;

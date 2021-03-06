const TaskAPI = require('./task-api')

const TaskManager = (flags, input) => {
  const api = new TaskAPI()

  if (flags.task) {
    return api.addTask(input, flags.create)
  }

  if (flags.remove) {
    if (input.length === 1) {
      return api.removeProject(input)
    } else {
      return api.removeTask(input)
    }
  }

  if (flags.commit) {
    return api.commitTask(input, flags.files)
  }

  if (flags.list) {
    return api.list(input)
  }

  if (flags.edit) {
    return api.edit(input)
  }

  if (flags.find) {
    return api.findTask(input)
  }

  if (flags.highlight) {
    return api.highlight(input)
  }

  return api.drawTaskList()
}

module.exports = TaskManager

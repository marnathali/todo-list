const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    console.log(req.body);
    return Todo
      .create({
        title: req.body.title,
      })
      .then((todo) => res.status(201).send(todo))
      .catch((error) => res.status(500).send(error))
      console.log(error.message);
  },

  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: TodoItem, as: 'todoItems' }, 'createdAt', 'ASC'],
        ],
      })
      .then((todos) => res.status(200).send(todos))
      .catch((error) => res.status(500).send(error))
      console.log(error.message);
  },

  retrieve(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch((error) => res.status(500).send(error))
      console.log(error.message);
  },

  update(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))
          .catch((error) => res.status(500).send(error))
          console.log(error.message);
      })
      .catch((error) => res.status(500).send(error))
      console.log(error.message);
  },

  destroy(req, res) {
    return Todo
      .findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error))
          console.log(error.message);
      })
      .catch((error) => res.status(500).send(error))
        console.log(error.message);
  },
};
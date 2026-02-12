import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { TEMP_TODO_ID } from '../../api/todos';

interface Props {
  visibleTodos: Todo[];
  tempTodo?: Todo | null;
  loadingTodoIds: number[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, dataQuery: Partial<Todo>) => Promise<void>;
}

export const TodoList: React.FC<Props> = ({
  visibleTodos,
  loadingTodoIds,
  tempTodo,
  onDelete,
  onUpdate,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isLoading={loadingTodoIds.includes(todo.id)}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
      {tempTodo && (
        <TodoItem
          key={TEMP_TODO_ID}
          todo={tempTodo}
          isLoading={true}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )}
    </section>
  );
};

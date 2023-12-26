"use client";

import { Todo } from "@prisma/client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTodo } from "../hooks/useTodo";

type Props = Pick<Todo, "id" | "content">;

function TodoItem({ id, content }: Props) {
  const { deleteTodo } = useTodo();
  return (
    <div className="flex space-x-4 my-1">
      <p>{content}</p>
      <Button onClick={() => deleteTodo(id)}>削除</Button>
    </div>
  );
}

export default TodoItem;

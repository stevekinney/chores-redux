import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { Stack } from '@twilio-paste/stack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasksSlice } from '../store/TasksSlice';

export const CreateTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <Box marginBottom="space60">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(tasksSlice.actions.add(title));
          setTitle('');
        }}
      >
        <Label htmlFor="create-task-title">Title</Label>
        <Stack orientation="horizontal" spacing="space20">
          <Input
            id="create-task-title"
            placeholder="New Task"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Button disabled={!title}>Add Task</Button>
        </Stack>
      </form>
    </Box>
  );
};

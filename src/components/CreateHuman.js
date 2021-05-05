import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { Stack } from '@twilio-paste/stack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { humansSlice } from '../store/HumansSlice';

export const CreateHuman = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <Box marginBottom="space60">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(humansSlice.actions.add(name));
          setName('');
        }}
      >
        <Label htmlFor="create-human-name">Name</Label>
        <Stack orientation="horizontal" spacing="space20">
          <Input
            id="create-human-name"
            placeholder="New Human"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button disabled={!name}>Add Human</Button>
        </Stack>
      </form>
    </Box>
  );
};

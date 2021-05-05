import { Box } from '@twilio-paste/box';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const CreateHuman = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <Box marginBottom="space60">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: 'IMPLEMENT_ME' });
          setName('');
        }}
      >
        <Label htmlFor="create-human-name">Name</Label>
        <Input
          id="create-human-name"
          placeholder="New Human"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
    </Box>
  );
};

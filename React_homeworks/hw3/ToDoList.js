import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

export function ToDoList() {
    const [toDoItems, setToDoItems] = useState([]);
    const [toDoItemId, setToDoItemId] = useState(1);
    const [toDoItemtxt, setToDoItemTxt] = useState();
    const [toDoItem, setToDoItem] = useState({ id: null, text: "" });
    const updateToDoItemId = () => {
        setToDoItemId(toDoItemId + 1);
    }

    const updateList = () => {
        updateToDoItemId();
        setToDoItem((item) => {
            item.id = toDoItemId;
            item.text = toDoItemtxt;
        });
        setToDoItems([...toDoItems, toDoItem])
        setToDoItem({ id: null, text: "" })
        setToDoItemTxt("");
    }

    const deleteToDoItem = (idToDelete) => {
        setToDoItems(toDoItems => toDoItems.filter(item => item.id !== idToDelete))
    }

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Список дел
            </Typography>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField
                    fullWidth
                    label="Новое дело"
                    id="fullWidth"
                    onChange={(event) => setToDoItemTxt(event.target.value)}
                    value={toDoItemtxt}
                />
            </Box>
            <Button onClick={updateList} variant="contained">Добавить в список дел</Button>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {toDoItems.map((toDoItem) => (
                    <ListItem
                        key={toDoItem.id}
                        disableGutters
                        secondaryAction={
                            <IconButton onClick={() =>
                                deleteToDoItem(toDoItem.id)
                            }
                                aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={toDoItem.text} />
                    </ListItem>
                ))}
            </List>


        </>
    );
}

export default ToDoList;
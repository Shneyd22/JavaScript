import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import InputAdornment from '@mui/material/InputAdornment';


function TemperatureConverter() {
    const [fahrenheitTemp, setFahrenheitTemp] = useState();
    const [celsiumTemp, setCelsiumTemp] = useState();

    const getCelsiumTemp = () => {
        setCelsiumTemp((fahrenheitTemp - 32) / 1.8)
        setFahrenheitTemp('');
    }

    const getFahrenheitTemp = () => {
        setFahrenheitTemp((celsiumTemp * 9) / 5 + 32);
        setCelsiumTemp('');
    }
    TemperatureConverter.propTypes = {
        fahrenheitTemp: PropTypes.number.isRequired,
        celsiumTemp: PropTypes.number.isRequired,
    }

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Конвертер температур
            </Typography>
            <div >
                <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                    <TextField
                        value={celsiumTemp}
                        onChange={(event) => setCelsiumTemp(event.target.value)}
                        label="Температура"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">°C</InputAdornment>,
                            },
                        }}
                    />
                    <Button onClick={getFahrenheitTemp} variant="outlined">в Фаренгейты</Button>
                </Box>

            </div>
            <br></br>
            <div >
                <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                    <TextField
                        value={fahrenheitTemp}
                        onChange={(event) => setFahrenheitTemp(event.target.value)}
                        label="Температура"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">°F</InputAdornment>,
                            },
                        }}
                    />
                    <Button onClick={getCelsiumTemp} variant="outlined">в Цельсии</Button>
                </Box>

            </div>
        </>
    );
}

export default TemperatureConverter;
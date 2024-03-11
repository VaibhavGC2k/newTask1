import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SignIn from './SignIn';
import SignUp from './Signup';

export default function Welcome() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
                <Box sx={{ width: {
              
                    md:"40%",
                    sm:"80%",
                    xs:"90%"
                } }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", backgroundColor: "rgb(151, 206, 230)", }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                <Tab label="SignIn" value="1" sx={{ color: "white" }} />
                                <Tab label="SignUp" value="2" sx={{ color: "white" }} />

                            </TabList>
                        </Box>
                        <Box sx={{ minHeight: "430px", backgroundColor: "rgb(151, 206, 230)" }}>
                            <TabPanel sx={{ margin: "0px", padding: "0px" }} value="1"><SignIn /></TabPanel>
                            <TabPanel sx={{ margin: "0px", padding: "0px" }} value="2"><SignUp /></TabPanel>
                        </Box>
                    </TabContext>
                </Box>
            </Box>
        </>
    )
}

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import clsx from 'clsx'
import style from './Loading.module.scss'

const Loading = ({isLoading}) => {
    return (
        <Box
        className={clsx(style.Loading,{
            [style.isLoading] : isLoading
        })}>
            <CircularProgress />
        </Box>
    );
} 
export default Loading;
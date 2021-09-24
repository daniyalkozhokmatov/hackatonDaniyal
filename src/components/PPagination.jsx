import React, { useContext } from 'react';
import { clientContext } from '../contexts/ClientContext';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import "../index.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PPagination = () => {
    const { postsPerPage, totalPosts, changePage } = useContext(clientContext)
    const classes = useStyles();
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    console.log(window)
    return (

        <div  >

            <ul>
                <div className={classes.root}>
                    <Pagination 
                    count={pageNumber.length} shape="rounded" 
                    onChange={(e, newPage) => changePage(newPage)}
                    />
                </div>
                {/* {
                    pageNumber.map(item => (
                        <li onClick={() => {
                            changePage(item)
                            window.scrollTo(0, 0)
                        }} key={item}>{item}</li>

                    ))
                } */}
            </ul>
        </div>
    );
};

export default PPagination;
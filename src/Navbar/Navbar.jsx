import React, { useContext, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { clientContext } from '../contexts/ClientContext';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
import Bentley from '../img/bentley_PNG21.png'
import './Navbar';
import '../index.css'


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 3,
        margin: 10,
        height: "30px",
        fontFamily: 'Abril Fatface',
    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        display: 'none',
        fontFamily: 'Abril Fatface',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },

    },
    search: {
        position: 'relative',
        
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        
        width: '100%',
        fontFamily: 'Abril Fatface',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        color: '#fca41e',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        backgroundColor: '#fff',
        borderRadius: '30px',
        width: '150px',
        fontFamily: 'Abril Fatface',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    back: {
        backgroundColor: 'transparent',
      },
      color: {
        color: '#fff'
      },
      color1: {
        color: 'grey',
        backgroundColor: 'white'
      }
}));

export default function Navbar() {
    const { productsCountInCart, getProducts } = useContext(clientContext)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu 
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link to="/sign-in">
                <MenuItem>Войти</MenuItem>
            </Link>
            <Link to="/sign-up">
                <MenuItem>Регистрация</MenuItem>
            </Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={productsCountInCart} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const history = useHistory()
    const [searchValue, setSearchValue] = React.useState('')
    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setSearchValue(search.get('q'))
        getProducts()
    }
    let search = new URLSearchParams(history.location.search)
    useEffect(() => {
        setSearchValue(search.get('q') || '')
    }, [history.location])

    // search end

    return (
        <div className={classes.grow}>
            <AppBar  position="fixed" color="white"  >
                <Toolbar >
                    <Link to="/">
                <Avatar className="Avatar" alt="Remy Sharp" src={Bentley} />
                </Link>
                <Link to="/">
                    <Typography  className={classes.title} variant="h5" noWrap> Bentley </Typography>
                    </Link>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase onChange={(e) => filterProducts('q', e.target.value)} placeholder="Search car" value={searchValue}
                            classes={{root: classes.inputRoot, input: classes.inputInput,}}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    
                     {/* <Typography className={classes.our} onClick="" variant="h6"  >
                     <link to="/">
                         Products
                         </link>
                     </Typography> */}
                     {/* <link to="/">
                         <Button>Product</Button>
                     </link> */}
                     <Typography variant="h6" className="Navtext" >Здесь вы можете купить машину</Typography>
                    


                   
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton  color="inherit">
                            <Badge badgeContent={productsCountInCart} color="secondary">
                                <Link to="/cart">
                                    <ShoppingCartIcon />
                                </Link>
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

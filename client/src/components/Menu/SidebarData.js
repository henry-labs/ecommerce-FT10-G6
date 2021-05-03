/*eslint-disable*/
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Profile',
        path: '/user/profile',
        icon: <AiIcons.AiFillHome />,
        cName: 'navm-text',
        belong: [100, 101]
    },
    {
        title: 'Library',
        path: '/user/library',
        icon: <FaIcons.FaImages />,
        cName: 'navm-text',
        belong: [101]
    },
    {
        title: 'Wishlist',
        path: '/user/wishlist',
        icon: <MdIcons.MdFavorite />,
        cName: 'navm-text',
        belong: [101]
    },
    {
        title: 'Orders',
        path: '/user/orders',
        icon: <IoIcons.IoIosPaper />,
        cName: 'navm-text',
        belong: [101]
    },
    {
        title: 'Questions',
        path: '/user/questions',
        icon: <FiIcons.FiHelpCircle />,
        cName: 'navm-text',
        belong: [102, 101]
    },
    {
        title: 'Products',
        path: '/admin/Product',
        icon: <AiIcons.AiFillHome />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Orders',
        path: '/admin/Order',
        icon: <FaIcons.FaImages />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Authors',
        path: '/admin/Author',
        icon: <IoIcons.IoIosPaper />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Categories',
        path: '/admin/Category',
        icon: <IoIcons.IoMdSettings />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Users',
        path: '/admin/User',
        icon: <FiIcons.FiHelpCircle />,
        cName: 'navm-text',
        belong: [100]
    },

]
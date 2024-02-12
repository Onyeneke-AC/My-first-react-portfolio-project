export const SidebarData = [
    {
        title: 'Home',
        path: '/',   
    },
    {
        title: 'About Us',
        path: '/about',
        iconClosed: <i className="fas fa-caret-down"/>,
        iconOpened: <i className="fas fa-caret-up"/>,
        subNav: [
            {
                title: 'Who We Are',
                path: '/who',
            },
            {
                title: 'Our Team',
                path: '/team',
            },
            {
                title: 'Awards',
                path: '/awards',
            },
            {
                title: 'Careers',
                path: '/careers',
            },
        ]
    },
    {
        title: 'Products & Services',
        path: '/products',   
    },
    {
        title: 'Partners',
        path: '/partners',   
    },
    {
        title: 'Clients',
        path: '/clients',   
    },
    {
        title: 'Media',
        path: '/media',
        iconClosed: <i className="fas fa-caret-down"/>,
        iconOpened: <i className="fas fa-caret-up"/>,
        subNav: [
            {
                title: 'News',
                path: '/news',
            },
            {
                title: 'Blogs',
                path: '/blogs',
            }
        ]   
    },
    {
        title: 'Contact Us',
        path: '/contact-us',   
    }
]
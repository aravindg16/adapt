var topContacts = [
    {
        "name": "louis napoletani",
        "role": "product owner",
        "department": "Finance & Administration"
    },
    {
        "name": "Anant Srivastava",
        "role": "dep general manager",
        "department": "Finance & Administration",
    },
    {
        "name": "Sean Watson",
        "role": "managing director",
        "department": "Finance & Administration",
    },
    {
        "name": "Annette Donnelly",
        "role": "managing director",
        "department": "Finance & Administration",
    },
    {
        "name": "Gordon Pitt",
        "role": "general manager, legal & business affairs",
        "department": "Finance & Administration",
    },
    {
        "name": "ismary rodriguez",
        "role": "vice president, international marketing/masterworks",
        "department": "Finance & Administration",
    }
];

function onMenuClick(event){  
    if($('.hamberger-menu').hasClass('hide')) {
        $('.hamberger-menu').addClass('show');
        $('.hamberger-menu').removeClass('hide');
    }
    else if ($('.hamberger-menu').hasClass('show')) {
        $('.hamberger-menu').addClass('hide');
        $('.hamberger-menu').removeClass('show');
    }
}
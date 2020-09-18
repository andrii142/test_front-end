function searchByName(name) {

    const users = [
        { name: 'Jonny Walker', birthDate: '1995-12-17' },
        { name: 'Andrew', birthDate: '2001-10-29' },
        { name: 'Viktor', birthDate: '1998-11-09' },
        { name: 'Andrew', birthDate: '2011-05-09' }
    ];
    return users.filter(element => element.name.includes(name))
}

console.log(searchByName('Andrew'));

var database = [
    {
        username: 'Vishwa',
        password: 'secretsuper'
    },
    {
        username: 'Abhay',
        password: 'secretsuper'
    },
    {
        username: 'Vineet',
        password: '123'
    }

];
var newsFeed = [
    {
        username: 'Vishwa',
        timeline: 'Happy morning'
    },
    {
        username: 'Abhay',
        timeline: 'Happy learning'
    },
    {
        username: 'Vineet',
        timeline: 'JS is cool'
    }
];

var usernamePrompt = prompt('Enter the username');
var passwordPrompt = prompt('enter password');

function isValidUser(username,password){
    for(i=0; i< database.length;i++){
        if(username === database[i].username && password === database[i].password){
          //  console.log(newsFeed);
          return true;
        }
        
    }
    return false;

}

function signIn(username,password){
    if(isValidUser(username,password)){
        console.log(newsFeed);
    }
    else{
        alert('wrong username and password');
    }
    //console.log(isValidUser(username,password));
    /*for(i=0; i< database.length;i++){
        if(username === database[i].username && password === database[i].password){
            console.log(newsFeed);
        }
        else{
            console.log('wrong username and password');
        }
    }

    if(username === database[0].username && password === database[0].password){
        alert('welcome');
        
    }
    else{
        alert('wrong username and password');
    }*/
}

signIn(usernamePrompt,passwordPrompt);
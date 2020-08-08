const search = document.getElementById('search');
var matchList = document.getElementById('match-list');

//matchList.innerHTML ='Hello';

//search json file and filter it
search.addEventListener('input', () => searchStates(search.value));

const searchStates = async searchText => {
    const data = await fetch('states.json').then(res => res.json());
    
    console.log(data);


    let matches = data.filter(state => {
        
        const regex = new RegExp (`^${searchText}`, 'gi');
        console.log(searchText)
        //console.log(state.name,regex,'reg');
        return state.name.match(regex);
        
    });
   
    if(searchText === ''){
        console.log('Nothing in search bar')
        //console.log(matches.length);
        matchList.innerHTML = ' ';
        matches = [];
       // console.log(matches.length);
    }
    //console.log(matches);
    outputHTML(matches);
};

const outputHTML = matches => {
    if(matches.length > 0){
        //console.log(matches,'called');
        var html = matches.map(match => 
        { 
        //console.log(match.name,'called');
        return `<div class="card card-body mb-1">
        <h4>${match.name}</h4>
        </div>
        `}).join(' ');
        //console.log(html,'html');
        matchList.innerHTML = html;
    }
}
//g modifier: global. All matches (don't return on first match)

//i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
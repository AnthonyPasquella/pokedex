


let pokemonList =[
    {
        name: 'Bulbasaur',
        height: 0.7,
        weight: 6.9,
        type: ['grass', 'poison']
    },
    {
        name: 'Pidgey',
        height: 0.3,
        weight: 1.8,
        type: ['flying', 'normal']
    },
    {
        name: 'Psyduck',
        height: 0.8,
        weight: 19.6,
        type: ['water']
    }
];

for (let i=0; i < pokemonList.length; i++)
    if (pokemonList[i].height > 0.7){
        document.write('<p>', pokemonList[i].name + ' - ' + pokemonList[i].height + ' - Whoa, that is big! </p>')
    }else if (pokemonList[i].height <= 0.7 && pokemonList[i].height > 0.3 ){
        document.write('<p>', pokemonList[i].name + ' - ' + pokemonList[i].height + '- Meh. </p>')
    }else {document.write('<p>', pokemonList[i].name + ' - ' + pokemonList[1].height + ' - I have seen bigger. </p>')}

    for (let i=0; i < pokemonList.length; i++)
    if (pokemonList[i].weight > 7){
        document.write('<p>', pokemonList[i].name + ' - ' + pokemonList[i].weight + ' - A Real Heavyweight! </p>')
    }else if (pokemonList[i].weight <= 7 && pokemonList[i].weight > 3 ){
        document.write('<p>', pokemonList[i].name + ' - ' + pokemonList[i].weight + '- Middleweight Contender. </p>')
    }else {document.write('<p>', pokemonList[i].name + ' - ' + pokemonList[1].weight + ' - Super Featherweight. </p>')}
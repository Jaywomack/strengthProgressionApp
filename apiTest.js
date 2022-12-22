// curl -X GET https://wger.de/api/v2/workout/ \
//      -H 'Authorization: Token 3ce6421c8e0914255b26ef588d4fcf947718f28e'
// fetch data from wger.de
// /api/v2/<endpoint>/?format=json
async function fetchExerciseData(){
    const response = await fetch('https://wger.de/api/v2/exercise/?format=json', {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization : 'Token 3ce6421c8e0914255b26ef588d4fcf947718f28e'
    });
    const data = await response.json();
    console.log(data);


}

console.log(fetchExerciseData());
let express = require("express");
let api = express();

//start chrome without CORS
//open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

let user_list = [
  {
    'id': 1,
    'name': 'Egon Olsen',
    'work_hours_per_week': 37,
    'registration_list': [
      {'week': 1, 'hours': [7.5, 7.5, 7.5, 8.0, 9.0]}, // +2,5
      {'week': 2, 'hours': [3.5, 4.5, 7.5, 7.5, 5.0]}, // -9.0
      {'week': 3, 'hours': [7.5, 7.5, 7.5, 7.5, 7.0]}, // 0,0
      {'week': 4, 'hours': [6.0, 6.5, 4.5, 11.0, 3.0]}, // -6,0
      {'week': 5, 'hours': [7.4, 7.4, 7.4, 7.4, 7.0]}, // -0,4
    ] // -12,9
  },
  {
    'id': 2,
    'name': 'Benny Frandsen',
    'work_hours_per_week': 30,
    'registration_list': [
      {'week': 1, 'hours': [6.5, 6.5, 6.5, 6.5, 4.0]}, // 0,0
      {'week': 2, 'hours': [3.5, 4.5, 7.5, 7.5, 5.0]}, // -2,0
      {'week': 3, 'hours': [6.0, 6.0, 0.0, 7.5, 7.0]}, // -3,5
      {'week': 4, 'hours': [7.0, 8.5, 11.5, 0.0, 0.0]}, // -3,0
      {'week': 5, 'hours': [7.5, 7.5, 7.5, 7.5, 0.0]}, // 0,0
    ] // -8,5
  },
  {
    'id': 3,
    'name': 'Kjeld Jensen',
    'work_hours_per_week': 40,
    'registration_list': [
      {'week': 1, 'hours': [8.0, 8.0, 8.0, 8.0, 8.0]}, // 0,0
      {'week': 2, 'hours': [8.0, 8.5, 8.5, 7.5, 5.0]}, // -2,5
      {'week': 3, 'hours': [7.5, 7.5, 11.5, 8.5, 8.0]}, // -3,0
      {'week': 4, 'hours': [10.0, 10.5, 14.5, 7.0, 3.0]}, // +5,0
      {'week': 5, 'hours': [0.0, 0.0, 0.0, 0.0, 0.0]}, // -40,0
    ] // -34,5
  },
  {
    'id': 4,
    'name': 'Yvonne Jensen',
    'work_hours_per_week': 36,
    'registration_list': [
      {'week': 1, 'hours': [7.5, 7.5, 7.5, 7.5, 7.0]}, // +1,0
      {'week': 2, 'hours': [8.5, 9.5, 0.5, 0.5, 12.0]}, // -0,5
      {'week': 3, 'hours': [9.5, 8.5, 10.5, 12.5, 7.0]}, // +12,0
      {'week': 4, 'hours': [7.0, 7.0, 10.5, 11.0, 3.0]}, // +2,5
      {'week': 5, 'hours': [7.4, 7.2, 7.1, 7.14, 7.16]}, // 0,0
    ] // +11,0
  }
];

api.get('/user', (request, response) => {
  response.json(user_list.map(user => {
    return {
      'id': user.id,
      'name': user.name,
      'work_hours_per_week': user.work_hours_per_week
    };
  }));
});

api.get('/user/:userId/registration', (request, response) => {
  let user = user_list.find(user => user.id == request.params.userId);

  if (typeof user !== 'undefined') {
    return response.json(user.registration_list);
  }

  return response
    .status(404)
    .send({
      'error': 'Sorry, no user was found with ID \'' + request.params.userId + '\''
    });
});

api.listen(8080, () => {
  console.log('API running at http://localhost:8080');
});

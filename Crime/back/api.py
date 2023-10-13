from flask import render_template
from flask import Flask
from flask import request
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/', methods=['GET'])
def login():
    username = request.args.get('username')
    password = request.args.get('password')
    user = {
            'username': username,
            'password': password
        }


    json_user = jsonify(user)
    print(json_user)
    return json_user

if __name__ == '__main__':
      app.run(host='0.0.0.0', port=8000)
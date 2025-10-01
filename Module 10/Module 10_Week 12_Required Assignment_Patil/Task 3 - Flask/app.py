from flask import Flask, session
from flask import render_template 

app = Flask(__name__)
app.secret_key = 'my-secret'

@app.route('/set-session')
def set_session():
    session['username'] = 'Alice'
    return 'Session username set to Alice'

@app.route('/')
def index():
    username = session.get('username', 'Alice')
    return render_template('index.html', username=username)


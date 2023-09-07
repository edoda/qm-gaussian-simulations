from flask import Flask, render_template
import os

app = Flask(__name__, template_folder=os.path.abspath('../templates'))

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/simulation1')
def simulation1():
    return render_template('simulations.html')

@app.route('/simulation2')
def simulation2():
    return render_template('simulations.html')

@app.route('/simulation3')
def simulation3():
    return render_template('simulations.html')

if __name__ == '__main__':
    app.run(debug=True)
